---
title: 踩坑实录
published: 2026-02-04
description: 记录部署 Meting API 服务器和配置 OpenClaw 系统过程中遇到的问题及解决方案
tags: ["踩坑", "Meting API", "OpenClaw", "配置", "服务器"]
category: "技术"
---
# 踩坑实录

## 概述

今天主要处理了两个重要任务：

1. 部署和配置 Meting API 服务器，用于博客音乐播放器
2. 配置 OpenClaw 系统，包括第三方 API 接入和提醒功能修复

## 第一部分：Meting API 服务器配置踩坑

### 问题一：服务器无法从外部访问

#### 踩坑情况

- **现象**：服务器在本地正常运行，但从外部 IP 访问时连接超时
- **错误信息**：Connection timeout 或 Unable to connect
- **时间**：上午 10:30 左右

#### 诊断过程

```bash
# 尝试从外部访问
curl http://43.153.183.194:3000
# 返回：curl: (7) Failed to connect to 43.153.183.194 port 3000: Connection timed out
```

#### 解决方案

经过排查发现是防火墙阻止了外部访问：

1. 检查防火墙状态
   ```bash
   sudo ufw status
   # 输出：Status: active
   # 端口 3000 未开放
   ```

2. 开放端口
   ```bash
   sudo ufw allow 3000
   # 规则已添加
   ```

3. 重启防火墙
   ```bash
   sudo ufw reload
   # 防火墙已重载
   ```

#### 验证结果

- ✅ 从外部可以正常访问 http://43.153.183.194:3000
- ✅ API 接口返回正常数据

### 问题二：API 响应格式不匹配博客需求

#### 踩坑情况

- **现象**：API 返回的数据格式与博客音乐播放器期望的格式不一致
- **具体问题**：博客期望 `{name, artist, url, pic, lrc}` 格式，但 API 返回标准 Meting 格式
- **影响**：音乐播放器无法正确解析和显示歌曲信息

#### 解决方案

决定创建一个专门的 API 端点来返回博客兼容的格式：

1. 修改服务器文件 `/root/meting-server.js`
2. 添加新的路由处理函数：

```javascript
app.get('/api/blog-format', async (req, res) => {
  const { server, type, id } = req.query;
  
  // 验证参数
  if (!server || !type || !id) {
    return res.status(400).json({
      error: 'Missing required parameters: server, type, id'
    });
  }
  
  try {
    // 获取原始数据
    const metingApi = new Meting(server);
    let result = await metingApi[type](id);
    
    // 转换为博客兼容格式
    let transformedResult = [];
    if (Array.isArray(result)) {
      transformedResult = result.map(item => ({
        name: item.name || item.title || '',
        artist: item.artist || item.author || '',
        url: item.url || '',
        pic: item.pic || item.cover || '',
        lrc: item.lrc || item.lyric || ''
      }));
    } else {
      // 如果是单个对象
      transformedResult = [{
        name: result.name || result.title || '',
        artist: result.artist || result.author || '',
        url: result.url || '',
        pic: result.pic || result.cover || '',
        lrc: result.lrc || result.lyric || ''
      }];
    }
    
    res.json(transformedResult);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'API request failed' });
  }
});
```

3. 测试新端点：
   ```bash
   curl "http://43.153.183.194:3000/api/blog-format?server=netease&type=playlist&id=3778678"
   ```

#### 验证结果

- ✅ 新端点返回符合博客格式的数据
- ✅ 音乐播放器可以正确解析和显示歌曲信息

### 问题三：网易云音乐版权限制

#### 踩坑情况

- **现象**：音频 URL 返回为空，导致无法播放音乐
- **具体表现**：`{"success":true,"data":{"url":""}}` - 音频 URL 为空字符串
- **原因**：网易云音乐的版权政策限制

#### 解决方案

接受这一上游限制，向用户说明情况：

1. 文档记录：在配置说明中明确标注版权限制
2. 用户沟通：向用户解释这是上游平台的版权政策，无法绕过
3. 备选方案：建议使用其他音乐服务商或自行上传音乐文件
:::note[标记]
测试了无数版，还docker容器化部署了，本地可以但是服务器不行，歌曲链接一直没有，原来是海外服务器不给获取...
:::

#### 验证结果

- ✅ 明确了问题根源
- ✅ 用户理解了版权限制的存在

## 第二部分：OpenClaw 系统配置踩坑

### 问题一：第三方 API 配置

#### 踩坑情况

- **目标**：将 OpenClaw 配置为使用第三方 OpenAI 兼容 API
- **挑战**：需要正确配置 API 端点和模型名称

#### 解决方案

1. 修改配置文件 `/root/.openclaw/openclaw.json`
2. 添加第三方提供商配置：

```json
{
  "providers": {
    "third-party": {
      "baseUrl": "https://yansd666.top/v1",
      "apiKey": "YOUR_API_KEY_HERE",
      "models": {
        "gpt-5.2-chat-latest": {
          "capabilities": ["chat", "completion"]
        }
      }
    }
  }
}
```

3. 验证配置：
   ```bash
   openclaw models
   # 确认第三方模型出现
   ```

4. 切换模型：
   ```bash
   # 切换到新模型
   # 验证切换成功
   ```

#### 验证结果

- ✅ 成功注册 `third-party/gpt-5.2-chat-latest` 模型
- ✅ 可以成功切换到新模型

### 问题二：提醒功能修复

#### 踩坑情况

- **现象**：`remind-me` 技能无法正常发送 Telegram 通知
- **错误表现**：系统事件创建了，但没有实际发送消息到 Telegram

#### 诊断过程

1. 检查脚本文件 `/root/.openclaw/workspace/skills/remind-me/create-reminder.sh`
2. 发现问题：脚本中使用了错误的参数 `--announce` 而不是 `--deliver`
3. 查阅文档：确认正确的参数应该是 `--deliver` 用于直接发送消息

#### 解决方案

修改提醒脚本以使用正确的参数：

1. 更新脚本中的 cron 作业创建命令：（目标是更新remind-me Skill的执行内容）

```bash
# 旧版本（错误）
openclaw cron add \
  --name "Reminder: $MESSAGE" \
  --at "$TIMESTAMP" \
  --session main \
  --message "System Event: $MESSAGE" \
  --announce \
  --json

# 新版本（正确）
openclaw cron add \
  --name "Reminder: $MESSAGE" \
  --at "$TIMESTAMP" \
  --session isolated \
  --message "⏰ Reminder: $MESSAGE" \
  --deliver \
  --channel telegram \
  --to "8071307039" \
  --delete-after-run \
  --json
```

2. 测试修改后的脚本：
   ```bash
   /root/.openclaw/workspace/skills/remind-me/create-reminder.sh "测试提醒功能" "in 2 minutes"
   ```

#### 验证结果

- ✅ 修正后的脚本成功创建了 cron 作业
- ✅ 提醒在设定时间准确发送到 Telegram
- ✅ 消息格式正确，包含提醒图标和内容

## 第三部分：使用到的 Markdown 语法示例

本文档使用了以下 Markdown 语法：

- 多级标题（`#`、`##`、`###`、`####`）
- 无序列表（`-`、`•`）
- 代码块（`` ```bash ``、`` ```javascript ``、`` ```json ``）
- 内联代码（`` ` ` ``）
- 加粗文本（`** **`）
- 任务列表（`- [ ]`、`- [x]`）
- 表格（未使用但支持）