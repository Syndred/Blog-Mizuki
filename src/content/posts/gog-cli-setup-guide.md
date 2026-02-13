---
title: gog CLI 配置实录：Google Workspace 命令行工具完整踩坑指南
published: 2026-02-13
description: 详细记录 gog（Google Workspace CLI）的完整配置流程，包括 Google Cloud 项目创建、OAuth 配置、API 启用等步骤，以及 OpenClaw 更新卡死问题的排查思路。
tags: [Google, CLI, OAuth, OpenClaw, PostgreSQL]
category: Technology
author: "安羽"
draft: false
---

## 写在前面

今天的主要任务是配置 **gog** —— 一个 Google Workspace 的命令行工具，可以像操作 Git 一样操作 Gmail、Calendar、Drive 等 Google 服务。过程中踩了不少坑，也顺道解决了 OpenClaw 更新卡死的问题，还初步搭建了一个 AI 工具 SaaS 站模板。这篇博客把全流程记录下来，给未来的自己留个备忘录。

---

## 一、gog CLI 是什么

gog = Google on Git。它让你可以用命令行管理 Google Workspace：

```bash
# 查看未读邮件
gog gmail messages search "in:inbox is:unread"

# 查看日历事件  
gog calendar events your@gmail.com --from 2026-02-13T00:00:00+08:00

# 上传文件到 Drive
gog drive files upload ./document.pdf
```

对于习惯终端工作的人来说，不用打开浏览器就能处理邮件和日程，效率提升明显。

---

## 二、Google Cloud 项目配置全流程

### 第1步：创建项目

1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 登录 Google 账号
3. 点击顶部项目下拉框 → **NEW PROJECT**
4. 项目名称随意，比如 `gog-cli-access`
5. 点击 **CREATE**

### 第2步：启用 API（逐个搜索启用）

左侧菜单 → **APIs & Services → Library**，搜索并启用：

| API | 用途 |
|-----|------|
| Gmail API | 邮件操作 |
| Google Calendar API | 日历管理 |
| Google Drive API | 文件存储 |
| Google Sheets API | 表格操作 |
| Google Docs API | 文档操作 |
| People API | 联系人管理 |

每个 API 点进去 → 点击 **ENABLE**，重复6次。

### 第3步：配置 OAuth 同意屏幕

左侧菜单 → **APIs & Services → OAuth consent screen**

1. **User Type** 选 **External**（外部用户）
2. 点击 **CREATE**
3. **App information**:
   - App name: `gog CLI`
   - User support email: 你的邮箱
   - Developer contact: 你的邮箱
4. 点击 **SAVE AND CONTINUE**
5. **Scopes** 页面直接点 **SAVE AND CONTINUE**（不用改）
6. **Test users** 页面 → **ADD USERS** → 输入你的 Gmail → **ADD**
7. 点击 **SAVE AND CONTINUE** → **BACK TO DASHBOARD**

### 第4步：创建 OAuth 凭证

左侧菜单 → **APIs & Services → Credentials**

1. 点击 **+ CREATE CREDENTIALS → OAuth client ID**
2. **Application type** 选 **Desktop app**
3. **Name** 填: `gog-cli-desktop`
4. 点击 **CREATE**
5. 弹窗显示 Client ID 和 Client Secret
6. 点击 **DOWNLOAD JSON** 📥
7. 把下载的文件重命名为 `client_secret.json`

### 第5步：上传到服务器

```bash
# 把 client_secret.json 上传到服务器
scp client_secret.json root@your-server:/root/.openclaw/workspace/client_secret.json
```

### 第6步：gog 认证

```bash
# 设置密钥环密码（gog 需要）
export GOG_KEYRING_PASSWORD="your-password"

# 加载凭证
gog auth credentials /root/.openclaw/workspace/client_secret.json

# 添加账号（按提示完成浏览器授权）
gog auth add your@gmail.com --services gmail,calendar,drive,contacts,docs,sheets
```

授权时会弹出一个 URL，在浏览器里登录 Google 账号并授权，然后把授权码贴回终端即可。

---

## 三、OpenClaw 更新踩坑记录

配置完 gog 后顺手升级了 OpenClaw，结果遇到**更新卡死**问题。

### 症状
```bash
npm i -g openclaw@latest  # 卡住不动，没反应
```

### 原因排查

OpenClaw 实际是用 **yarn global** 安装的，不是 npm：

```bash
which openclaw
# 输出: /usr/local/share/.config/yarn/global/node_modules/.bin/openclaw
```

用 npm 升级会冲突，导致卡死。

### 正确升级方式

```bash
# 检查当前版本
openclaw status

# 用 yarn 升级
yarn global upgrade openclaw@latest

# 或者指定版本
yarn global upgrade openclaw@0.x.x
```

### 教训总结

- 升级前先检查安装方式：`which openclaw` 或 `openclaw status`
- 混用 npm 和 yarn 全局安装会导致各种奇怪问题
- 卡死时 `Ctrl+C` 中断，清理残留进程：`pkill -f openclaw`

---

## 四、PostgreSQL 初体验

今天还抽时间学习了 PostgreSQL 的基础操作。虽然之前用过 MySQL，但 PG 的语法和特性还是有些差异：

```bash
# 连接数据库
psql -U username -d database_name

# 常用命令
\l          # 列出所有数据库
\dt         # 列出所有表
\d tablename # 查看表结构
\q          # 退出
```

AI 工具 SaaS 站的后端打算用 PG，所以提前熟悉一下。初步感受：

- JSONB 字段类型很方便，可以直接存半结构化数据
- 全文搜索比 MySQL 强大
- 权限管理更细粒度

---

## 五、AI 工具 SaaS 站模板

最后，初步完成了一个 AI 工具 SaaS 站的模板创建。这个项目的定位是：**开箱即用的 AI 工具站源码**，类似那些月流水几千刀的站群。

### 技术栈规划

| 层级 | 技术 |
|------|------|
| 前端 | Next.js + Tailwind |
| 后端 | Node.js + Express |
| 数据库 | PostgreSQL |
| 部署 | Docker + Vercel |
| AI 接口 | OpenAI / Claude / 自定义 |

### 模板功能

- 用户注册/登录（JWT）
- 工具列表展示
- API 调用次数统计
- 支付集成（Stripe）
- 后台管理面板

明天继续完善模板细节，争取跑通第一个 MVP。

---

## 六、今日汇总

| 任务 | 状态 | 备注 |
|------|------|------|
| gog CLI 配置 | ✅ 完成 | OAuth 流程走通，API 调用正常 |
| OpenClaw 升级 | ✅ 完成 | 解决卡死问题，升级到最新版 |
| PostgreSQL 学习 | ✅ 开始 | 基础命令掌握，明天深入 |
| AI SaaS 模板 | 🚧 进行中 | 框架搭建完成，明天填功能 |

---

## 参考链接

- [gog GitHub](https://github.com/kiwicom/gog)
- [Google Cloud Console](https://console.cloud.google.com/)
- [OpenClaw 文档](https://docs.openclaw.ai)

---

有问题欢迎在评论区留言，或者 [Telegram 找我](https://t.me/Syndred) 交流 🐕
