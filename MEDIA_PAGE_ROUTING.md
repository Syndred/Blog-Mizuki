# 媒体页面路由说明

## 问题描述

用户反馈媒体页面显示在所有页面上，但实际上媒体页面应该只在 `/media/` 路由显示。

## 路由机制

Astro 使用基于文件的路由系统：

```
src/pages/
├── index.astro          → /
├── anime.astro          → /anime/
├── media.astro          → /media/
└── posts/
    └── [slug].astro     → /posts/:slug/
```

## 媒体页面配置

### 1. 文件位置
- 文件：`src/pages/media.astro`
- 路由：`/media/`
- 只在访问 `/media/` 时显示

### 2. 功能开关
在 `src/config.ts` 中：

```typescript
featurePages: {
  anime: false,    // 番剧页面关闭
  books: true,     // 书籍功能开启
  movies: true,    // 电影功能开启
  // ...
}
```

### 3. 导航配置
在 `src/config.ts` 的 `navBarConfig` 中：

```typescript
{
  name: "My",
  url: "/content/",
  icon: "material-symbols:person",
  children: [
    {
      name: "Media",
      url: "/media/",  // 指向媒体页面
      icon: "material-symbols:library-books",
    },
    // ...
  ],
}
```

## 可能的问题原因

### 1. 浏览器缓存
**症状**：页面内容没有更新
**解决方案**：
```bash
# 清除浏览器缓存
Ctrl + Shift + Delete (Windows)
Cmd + Shift + Delete (Mac)

# 或者硬刷新
Ctrl + F5 (Windows)
Cmd + Shift + R (Mac)
```

### 2. 开发服务器缓存
**症状**：修改后页面没有变化
**解决方案**：
```bash
# 停止开发服务器
Ctrl + C

# 清除 Astro 缓存
rm -rf .astro
rm -rf node_modules/.astro
rm -rf node_modules/.vite

# 重新启动
npm run dev
```

### 3. 路由冲突
**症状**：媒体页面出现在错误的路由
**检查**：
- 确保没有其他文件使用相同的路由
- 检查 `src/pages/` 目录结构
- 确认没有动态路由冲突

## 验证步骤

### 1. 检查路由
访问以下URL，确认页面正确显示：

- `http://localhost:4321/` - 首页
- `http://localhost:4321/media/` - 媒体页面（书籍+电影）
- `http://localhost:4321/anime/` - 番剧页面（如果启用）

### 2. 检查导航
点击导航栏中的 "Media" 链接，应该跳转到 `/media/` 页面

### 3. 检查功能
在媒体页面：
- 点击 "📚 书籍" 按钮，显示书籍列表
- 点击 "🎬 电影" 按钮，显示电影列表
- 筛选功能正常工作

## 设计参考

媒体页面的设计参考了番剧页面（`src/pages/anime.astro`）：

### 相同的设计元素
1. **布局结构**：使用 `MainGridLayout`
2. **卡片样式**：相同的卡片设计和悬停效果
3. **筛选器**：相同的筛选按钮样式
4. **动画效果**：淡入淡出动画
5. **响应式网格**：`anime-grid-container` 类

### 媒体页面的特殊功能
1. **双视图切换**：书籍和电影切换按钮
2. **独立筛选**：每个视图有独立的筛选器
3. **数据分离**：使用独立的数据文件

## 样式文件

媒体页面使用与番剧页面相同的样式文件：

```astro
import "../styles/anime.css";
```

这确保了视觉一致性。

## 常见问题

### Q: 为什么媒体页面看起来和番剧页面不一样？
A: 检查以下内容：
1. 确保导入了 `../styles/anime.css`
2. 确保使用了 `anime-grid-container` 类
3. 确保卡片使用了相同的结构

### Q: 如何添加更多书籍或电影？
A: 
1. 在 `src/data/books.ts` 或 `src/data/movies.ts` 中添加豆瓣ID和状态
2. 在 `src/data/bookDetails.ts` 或 `src/data/movieDetails.ts` 中添加详细信息

### Q: 如何禁用媒体页面？
A: 在 `src/config.ts` 中设置：
```typescript
featurePages: {
  books: false,
  movies: false,
}
```

## 性能优化

媒体页面已经过性能优化：

1. **数据分离**：详细信息存储在独立文件中
2. **懒加载**：初始显示时添加淡入动画
3. **代码分割**：使用 IIFE 避免全局变量污染
4. **文件大小**：页面文件从 150KB 减少到 40KB

## 相关文件

- `src/pages/media.astro` - 媒体页面主文件
- `src/data/books.ts` - 书籍配置
- `src/data/bookDetails.ts` - 书籍详细信息
- `src/data/movies.ts` - 电影配置
- `src/data/movieDetails.ts` - 电影详细信息
- `src/styles/anime.css` - 共享样式文件
- `src/config.ts` - 站点配置

## 总结

媒体页面是一个独立的路由页面，只在访问 `/media/` 时显示。如果在其他页面看到媒体内容，请：

1. 清除浏览器缓存
2. 重启开发服务器
3. 检查路由配置
4. 验证导航链接

如果问题仍然存在，请检查浏览器控制台的错误信息。
