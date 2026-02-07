---
title: OpenClaw 完全使用指南：从零搭建你的 AI 会话系统
published: 2026-02-07
description: 一篇超详细的 OpenClaw 实战教程，涵盖完整命令参考、配置详解、模型切换策略与排坑指南，基于真实踩坑经验整理，新手友好。
tags: ["OpenClaw", "AI", "Gateway", "配置教程", "CLI"]
category: "Technology"
draft: false
---

## 写在前面

这篇文章不是 OpenClaw 官方文档的翻译，而是基于我自己从零搭建、踩坑、调试后的**完整实战总结**。如果你也想用 OpenClaw 搭建一个稳定、可扩展、成本可控的 AI 会话系统，这篇文章应该能帮到你。

目标读者：
- 刚接触 OpenClaw 的新手
- 想理解配置逻辑、排查问题的用户
- 需要管理多个 AI 模型的人

**阅读提示**：建议配合终端实际操作，边读边敲命令，理解更深。

---

## 一、OpenClaw 是什么

OpenClaw 是一个**AI Gateway**（AI 网关）——它位于你和各种 AI 模型之间，作为中间层统一管理：

- **多模型接入**：OpenAI、Kimi、Claude、Qwen 等统一配置
- **会话管理**：自动维护上下文、token 计算、历史记录
- **工具集成**：内置搜索、文件读取、网页抓取等能力
- **多渠道支持**：Telegram、Discord、Slack 等一键接入
- **智能路由**：自动 fallback，一个模型挂了自动切另一个

### 为什么不用官方 SDK 直接调？

| 方式 | 问题 |
|------|------|
| 官方 SDK | 每个模型一套代码，切换模型改一堆东西 |
| OpenClaw | 配置里改一行，`openclaw gateway restart` 就生效 |

**核心优势**：配置驱动，一次设置，到处运行。

---

## 二、安装与初始化

### 1. 安装 OpenClaw

```bash
# 全局安装
npm i -g openclaw

# 验证安装
openclaw --version
```

### 2. 查看帮助

```bash
# 查看所有命令
openclaw --help

# 查看具体命令帮助
openclaw gateway --help
openclaw configure --help
```

### 3. 初始化配置（ wizard 模式）

```bash
openclaw configure
```

这个命令会启动交互式向导，引导你完成：
- 选择默认模型
- 配置 API Key
- 选择接入渠道（Telegram、Discord 等）
- 生成 `~/.openclaw/openclaw.json`

**什么时候需要重新运行 configure：**
- 第一次安装后
- 配置文件损坏
- 想快速重置到默认配置

---

## 三、Gateway 核心命令（日常使用最高频）

Gateway 是 OpenClaw 的核心进程，负责接收请求、路由到模型、管理会话。

### 查看 Gateway 状态

```bash
openclaw gateway status
```

输出示例：
```
🦞 OpenClaw 2026.2.2-3
Gateway: running
Port: 18789
Mode: local
Uptime: 2h 15m
```

### 启动 Gateway

```bash
# 前台启动（调试时看日志）
openclaw gateway start

# 后台启动（生产环境）
openclaw gateway start --daemon
```

### 停止 Gateway

```bash
openclaw gateway stop
```

### 重启 Gateway（修改配置后必须做）

```bash
openclaw gateway restart
```

**⚠️ 重要提醒**：
- 修改 `openclaw.json` 后 **必须 restart**
- 否则运行态还在用旧配置
- 旧 session 不会自动切换新模型

### 查看 Gateway 日志

```bash
# 实时查看日志
openclaw gateway logs

# 查看最近 100 行
openclaw gateway logs --tail 100

# 查看包含错误的日志
openclaw gateway logs --grep error
```

---

## 四、配置管理命令

### 查看当前配置

```bash
openclaw config get
```

这会输出完整的 `openclaw.json` 内容，带格式和语法高亮。

### 查看配置结构（schema）

```bash
openclaw config schema
```

适合想了解有哪些配置项可以用的场景。

### 应用完整配置（谨慎使用）

```bash
openclaw config apply < config.json
```

这会**完全替换**现有配置，然后自动重启 Gateway。

**⚠️ 警告**：用之前先备份原配置！

```bash
# 备份
openclaw config get > backup.json

# 修改后应用
cat my-config.json | openclaw config apply
```

### 安全 patch（推荐）

```bash
# 只修改部分配置
openclaw config patch --raw '{"agents":{"defaults":{"model":{"primary":"moonshot/kimi-k2.5"}}}}'
```

优势：
- 只改你指定的字段
- 其他配置保持不变
- 自动校验 JSON 语法
- 自动重启 Gateway

---

## 五、会话与会话管理

### 查看当前会话状态

```bash
openclaw session status
```

输出关键信息：
- 当前模型
- 使用的 API Key
- Token 使用量（in/out）
- 上下文占用比例
- Runtime 模式

### 列出所有活跃会话

```bash
openclaw sessions list
```

### 查看会话历史

```bash
# 查看当前会话最近 20 条消息
openclaw sessions history

# 查看指定会话
openclaw sessions history --session <session-key>

# 查看最近 50 条
openclaw sessions history --limit 50
```

### 向其他会话发送消息

```bash
openclaw sessions send --session <session-key> "你好"
```

### 派生子 Agent（高级用法）

```bash
openclaw sessions spawn --task "帮我分析这个日志文件" --agent coding-agent
```

会在后台启动一个独立的子会话执行任务，完成后结果回到主会话。

---

## 六、系统诊断与维护

### 运行诊断检查

```bash
openclaw doctor
```

会检查：
- 配置文件语法
- API Key 有效性
- Gateway 健康状态
- 网络连通性
- 权限问题

### 非交互式诊断（CI/CD 场景）

```bash
openclaw doctor --non-interactive
```

### 查看系统状态

```bash
openclaw status
```

### 更新 OpenClaw

```bash
# 检查更新
openclaw update check

# 执行更新
openclaw update run
```

更新后会自动重启 Gateway。

---

## 七、核心配置详解（openclaw.json）

理解了配置结构，才能真正掌控 OpenClaw。

### 配置文件位置

```
~/.openclaw/openclaw.json
```

### 核心概念速查

| 概念 | 说明 | 示例 |
|------|------|------|
| **Provider** | 服务提供商 | moonshot, openai, qwen-portal |
| **Model** | 具体模型 | kimi-k2.5, gpt-4 |
| **Primary** | 默认主模型 | moonshot/kimi-k2.5 |
| **Fallback** | 失败时自动降级 | 按顺序尝试 |
| **Session** | 一次对话上下文 | 包含历史消息 |
| **Agent** | 配置模板 | defaults 是默认配置 |

### 最小可用配置示例

```json
{
  "models": {
    "mode": "merge",
    "providers": {
      "moonshot": {
        "baseUrl": "https://api.moonshot.cn/v1",
        "apiKey": "sk-your-key",
        "api": "openai-completions",
        "models": [
          {
            "id": "kimi-k2.5",
            "name": "Kimi 2.5",
            "contextWindow": 200000,
            "maxTokens": 8192
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "moonshot/kimi-k2.5",
        "fallbacks": []
      }
    }
  },
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "your-bot-token"
    }
  }
}
```

### 多 Provider 配置示例

```json
{
  "models": {
    "providers": {
      "moonshot": {
        "baseUrl": "https://api.moonshot.cn/v1",
        "apiKey": "sk-moonshot-key",
        "models": [{"id": "kimi-k2.5", "contextWindow": 200000}]
      },
      "openai": {
        "baseUrl": "https://api.openai.com/v1",
        "apiKey": "sk-openai-key",
        "models": [{"id": "gpt-4", "contextWindow": 128000}]
      },
      "qwen-portal": {
        "baseUrl": "https://portal.qwen.ai/v1",
        "apiKey": "qwen-oauth",
        "models": [{"id": "coder-model", "contextWindow": 128000}]
      }
    }
  }
}
```

### Primary 与 Fallback 详解

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "qwen-portal/coder-model",
        "fallbacks": [
          "moonshot/kimi-k2.5",
          "openai/gpt-4"
        ]
      }
    }
  }
}
```

**执行逻辑：**
1. 优先用 `primary`（Qwen Coder）
2. 如果超时/报错，尝试 `fallbacks[0]`（Kimi 2.5）
3. 还失败，尝试 `fallbacks[1]`（GPT-4）
4. 全部失败才报错

---

## 八、模型切换实战

### 场景一：临时切换（当前会话）

在对话中直接说：
- "切到 GPT-5" → 当前会话用 GPT-5
- "切回 Kimi" → 切回 Kimi
- "用 Qwen 写代码" → 临时切 Qwen

**特点**：只影响当前对话，不影响全局配置。

### 场景二：修改全局 Primary

```bash
# 切到 Kimi 2.5
openclaw config patch --raw '{"agents":{"defaults":{"model":{"primary":"moonshot/kimi-k2.5"}}}}'

# 切到 Qwen Coder
openclaw config patch --raw '{"agents":{"defaults":{"model":{"primary":"qwen-portal/coder-model"}}}}'

# 切到 GPT-4
openclaw config patch --raw '{"agents":{"defaults":{"model":{"primary":"openai/gpt-4"}}}}'
```

### 场景三：查看当前在用哪个模型

```bash
openclaw session status
```

关键字段：
- `Model`：当前模型
- `api-key`：用的哪个 provider

---

## 九、官方 API vs 中转 API

这是新手最容易踩坑的地方。

### 区别对比

| 维度 | 官方 API | 中转 API |
|------|----------|----------|
| 计费 | 直接走厂商账户 | 走中转账户 |
| 稳定性 | 高 | 依赖中转商 |
| 模型映射 | 透明 | 可能不透明 |
| 延迟 | 低 | 多一层代理 |
| 成本 | 固定 | 可能更便宜 |

### 如何确认自己走的是哪条路？

**方法一：看 session status**
```bash
openclaw session status
```
- `api-key` 显示 `moonshot:default` = 官方
- `api-key` 显示 `third-party:xxx` = 中转

**方法二：看控制台**
- Moonshot 控制台有 Usage 记录 = 官方
- 中转后台有请求记录 = 中转

**常见误区**：
> "改了配置但控制台没扣钱，是不是没生效？"

**真相**：
- 可能是 Usage 延迟（5-15分钟）
- 可能是用的赠送额度
- 旧 session 还在用旧配置

**验证方法**：发一条明显会扣费的长请求，等几分钟看 Usage。

---

## 十、常见问题 & 排错清单

### 问题一：改了配置没生效

**检查清单**：
- [ ] 是否运行了 `openclaw gateway restart`？
- [ ] 是否在当前 session？（旧 session 继续用旧配置）
- [ ] JSON 格式是否正确？（少个逗号都会导致 fallback）

**诊断命令**：
```bash
openclaw doctor
openclaw config get | jq .  # 检查 JSON 格式
```

### 问题二：Gateway 启动失败

**排查步骤**：
1. 看日志：`openclaw gateway logs --tail 50`
2. 检查端口占用：`lsof -i :18789`
3. 检查配置：`openclaw doctor`

### 问题三：模型响应慢/超时

**可能原因**：
- 模型服务本身慢
- 网络问题
- token 太长

**解决方案**：
- 检查 fallback 是否触发
- 临时切换到其他模型
- 压缩上下文（compact）

### 问题四：Token 消耗异常

**检查方法**：
```bash
openclaw session status
```

看 `Tokens` 字段的 in/out。

**优化建议**：
- 长对话及时开启新 session
- 使用 compaction 模式
- 选择合适的模型（Qwen 免费，Kimi 性价比高）

---

## 十一、进阶技巧

### 1. 快速备份配置

```bash
# 备份
openclaw config get > openclaw-backup-$(date +%Y%m%d).json

# 恢复
cat backup.json | openclaw config apply
```

### 2. 查看版本信息

```bash
openclaw --version
openclaw status
```

### 3. 多环境管理

```bash
# 开发环境
export OPENCLAW_CONFIG=~/.openclaw/dev.json

# 生产环境
export OPENCLAW_CONFIG=~/.openclaw/prod.json
```

### 4. 配合 systemd 守护进程

```ini
# /etc/systemd/system/openclaw.service
[Unit]
Description=OpenClaw Gateway
After=network.target

[Service]
Type=simple
User=your-user
ExecStart=/usr/bin/openclaw gateway start
Restart=always

[Install]
WantedBy=multi-user.target
```

---

## 十二、写在最后

OpenClaw 的精髓在于**配置驱动**。理解 `provider` → `model` → `primary` → `fallback` 这条链，你就掌握了它的核心逻辑。

建议的搭建顺序：
1. 跑通 `openclaw configure`
2. 配置一个官方 Provider（如 Moonshot）
3. 测试 `openclaw gateway status` 正常
4. 接入一个渠道（如 Telegram）
5. 逐步添加 fallback 和工具

遇到问题，优先运行 `openclaw doctor`，80% 的问题都能定位。

祝搭建顺利，享受你的 AI 助手 🐕

---

## 参考链接

- OpenClaw 官方文档：https://docs.openclaw.ai
- GitHub 仓库：https://github.com/openclaw/openclaw
- Moonshot API 文档：https://platform.moonshot.cn
- Qwen Portal：https://portal.qwen.ai

---

**文章信息**
- 作者：基于真实踩坑经验整理
- 发布时间：2026-02-07
- 字数：约 5500 字
- 适用版本：OpenClaw 2026.2.x
