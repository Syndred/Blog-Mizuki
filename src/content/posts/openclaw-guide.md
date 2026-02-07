---
title: OpenClaw 使用指南：从零开始搭建你的 AI 会话系统
published: 2025-02-07
description: 一篇完整的 OpenClaw 实战教程，涵盖安装配置、模型切换、API 选择与常见坑位排查，基于真实踩坑经验整理。
tags: ["OpenClaw", "AI", "Gateway", "配置教程"]
category: "Technology"
draft: false
---

## 写在前面

这篇文章不是 OpenClaw 的官方文档翻译，而是基于我自己从零搭建、踩坑、调试后的实战总结。如果你也想用 OpenClaw 搭建一个**稳定、可扩展、成本可控**的 AI 会话系统，这篇文章应该能帮到你。

目标读者：有一定技术基础，想快速理解 OpenClaw 架构并上手配置的人。

---

## 一、OpenClaw 是什么

简单来说，OpenClaw 是一个**AI Gateway**——它位于你和各种 AI 模型之间，负责：

- 统一接入多个模型（OpenAI、Kimi、Claude、Qwen 等）
- 管理会话、路由请求
- 提供 Tools（搜索、文件读取等）
- 支持多渠道（Telegram、Discord 等）

### 为什么不用官方 SDK 直接调？

- 官方 SDK = 点对点，换个模型改一堆代码
- OpenClaw = 中间层，配置里改一行，全局生效
- 支持 fallback：Kimi 挂了自动切 GPT，业务不中断

---

## 二、基础安装与常用命令

### 1. 安装

```bash
npm i -g openclaw
```

### 2. 初始化配置

```bash
openclaw configure
```

这个命令会：
- 在 `~/.openclaw/` 目录创建配置文件
- 生成 `openclaw.json`（核心配置）
- 设置默认的模型和 provider

**什么时候必须重新运行 configure：**
- 第一次安装
- 切换主模型（如果你改了 openclaw.json 没生效，可能是配置格式问题，重新 configure 可以修复）

### 3. Gateway 常用操作

```bash
# 查看状态
openclaw gateway status

# 重启（修改配置后必须做）
openclaw gateway restart

# 停止/启动
openclaw gateway stop
openclaw gateway start
```

**关键认知：** 修改 `openclaw.json` ≠ 立刻生效。**必须 restart**，否则运行态还在用旧配置。

---

## 三、核心配置详解

OpenClaw 的核心是 `~/.openclaw/openclaw.json`。理解这几个概念，你就掌握了 90%：

### 1. Provider（服务提供商）

```json
"providers": {
  "moonshot": {
    "baseUrl": "https://api.moonshot.ai/v1",
    "api": "openai-completions"
  },
  "third-party": {
    "baseUrl": "https://yansd666.top/v1",
    "apiKey": "sk-xxx"
  }
}
```

- **官方 Provider**：直接走厂商 API，计费透明
- **中转 Provider**：你自己搭或第三方提供的聚合服务，统一计费，可能便宜，但多一层依赖

### 2. Model（模型定义）

每个 provider 下可以定义多个模型：

```json
"moonshot": {
  "models": [
    {
      "id": "kimi-k2.5",
      "name": "Kimi K2.5",
      "contextWindow": 256000
    }
  ]
}
```

**关键点：** `id` 必须和 provider 实际支持的 model ID 完全一致。

### 3. Primary（主模型）

```json
"primary": "moonshot/kimi-k2.5"
```

- 所有新 session 默认用这个模型
- 格式：`provider/model-id`

### 4. Fallbacks（降级策略）

```json
"fallbacks": [
  "qwen-portal/coder-model",
  "third-party/gpt-5.2-chat-latest"
]
```

- 当 primary 超时/报错时，自动按顺序尝试 fallback
- **坑位提醒：** 如果你不想偷偷走第三方，必须把 fallback 清掉或调整顺序

---

## 四、官方 API vs 中转 API：真实差异

这是新手最容易懵的地方，也是我今天刚踩完的坑。

### 场景还原

我配置好了 Moonshot 官方 key，设置了 primary 为 Kimi 2.5，但看中转后台发现 GPT‑5 的 token 还在涨。

**第一反应：** 配置没生效？OpenClaw 在偷偷走第三方？

**真实原因：**

1. **旧 session 没死**——重启 gateway 前建立的 session，会继续用当时的模型
2. **中转显示的是历史累计**，不是实时请求
3. **Moonshot usage 有延迟**（5–15 分钟）

### 如何确认自己走的是哪条路？

```bash
openclaw session status
```

看这几个字段：
- `Model`：显示实际使用的模型
- `api-key`：显示用的哪个 provider 的 key
- `Runtime`：direct = 直连，proxy = 经过中转

**判定标准：**
- 如果显示 `moonshot/kimi-k2.5` + `moonshot:default` = 官方 ✅
- 如果显示 `third-party/gpt-5.2` = 走中转 ⚠️

### 成本对比

| 路径 | 优势 | 劣势 |
|------|------|------|
| 官方 API | 稳定、透明、延迟低 | 单价固定 |
| 中转 API | 可能便宜、统一账单 | 多一层依赖、模型映射可能不透明 |

**建议：**
- 主力用官方
- 中转作为 fallback 或特殊场景（比如某些模型官方没有）

---

## 五、模型切换最佳实践

### 当前我的配置参考

```json
{
  "primary": "moonshot/kimi-k2.5",
  "fallbacks": [
    "qwen-portal/coder-model",
    "third-party/gpt-5.2-chat-latest"
  ]
}
```

### 各模型适用场景

| 模型 | 场景 | 备注 |
|------|------|------|
| Kimi 2.5 | 日常聊天、长文写作、思考整理 | 表达自然，上下文 256k |
| Kimi K2 preview | 超长文档分析、系统架构 | 更稳，偏工程 |
| GPT‑5 (中转) | 关键决策、复杂推理 | 能力强，但贵 |
| Qwen Coder | 写代码、改代码 | 中文友好，免费 |
| Qwen Vision | 看图、OCR | 图像理解 |

### 临时切换模型（不动全局配置）

你可以直接对我说：
- "切 GPT‑5" → 当前 session 用 GPT‑5
- "切回 2.5" → 切回 Kimi 2.5

**注意：** 临时切换只影响当前 session，不会影响 primary 配置。

---

## 六、常见问题 & 排错清单

### 1. 改了配置没生效？

**检查清单：**
- [ ] 是否 `openclaw gateway restart`？
- [ ] 是否是当前 session？（旧 session 继续用旧配置）
- [ ] 配置 JSON 格式是否正确？（少个逗号都会导致 fallback）

### 2. 怎么看实时用的是哪个模型？

```bash
openclaw session status
```

重点看 `Model` 和 `api-key` 字段。

### 3. Moonshot 余额没动，是不是没走官方？

**可能原因：**
- Usage 延迟（等 5–15 分钟）
- 用的是赠送额度（免费额度不会扣余额）
- 请求量太小，没触发计费阈值

**验证方法：** 发一条明显会扣费的长请求，然后看 Usage 页面。

### 4. 想彻底不走中转？

编辑 `openclaw.json`，把 `fallbacks` 里的 `third-party/*` 全部移除：

```json
"fallbacks": [
  "qwen-portal/coder-model"
  // 删掉 third-party/gpt-5.2-chat-latest
]
```

然后 restart。

---

## 七、最小可用配置示例

如果你只想快速跑起来，用这个配置：

```json
{
  "models": {
    "mode": "merge",
    "providers": {
      "moonshot": {
        "baseUrl": "https://api.moonshot.ai/v1",
        "api": "openai-completions",
        "models": [
          {
            "id": "kimi-k2.5",
            "name": "Kimi K2.5",
            "contextWindow": 256000,
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
      "botToken": "YOUR_BOT_TOKEN"
    }
  }
}
```

**说明：**
- 只用官方 Kimi，不走任何第三方
- 适合一开始摸清路数

---

## 写在最后

OpenClaw 是一个**配置驱动**的系统。理解 `provider` → `model` → `primary` → `fallback` 这条链，你就掌握了它的核心逻辑。

今天这篇是我自己的踩坑实录，也是一份可复用的配置手册。如果你在搭建过程中遇到问题，对照上面的排错清单应该能解决 80%。

祝搭建顺利。

---

**参考链接：**
- OpenClaw 官方文档：https://docs.openclaw.ai
- Moonshot API：https://platform.moonshot.cn
