# 媒体页面快速开始指南

## 🚀 快速设置（3步完成）

### 第1步：创建图片目录

```bash
node scripts/create-placeholder-images.js
```

### 第2步：准备图片

将图片放入以下目录：

```
public/assets/books/     # 书籍封面
  ├── santi.jpg         # 三体
  ├── huozhe.jpg        # 活着
  ├── sapiens.jpg       # 人类简史
  └── bainian.jpg       # 百年孤独

public/assets/movies/    # 电影海报
  ├── shawshank.jpg     # 肖申克的救赎
  ├── bawang.jpg        # 霸王别姬
  ├── qianyu.jpg        # 千与千寻
  └── interstellar.jpg  # 星际穿越
```

### 第3步：访问页面

打开浏览器访问：`http://localhost:4321/media/`

## 📥 如何获取图片

### 方法1：从豆瓣下载（最简单）

1. 访问豆瓣页面（例如：https://book.douban.com/subject/2567698/）
2. 右键点击封面图片 → "图片另存为"
3. 保存到对应目录

### 方法2：使用占位图片（临时方案）

访问以下链接直接下载占位图片：
- https://via.placeholder.com/400x600.jpg?text=Book
- https://via.placeholder.com/400x600.jpg?text=Movie

## ✏️ 添加新内容

### 添加书籍

1. **准备图片**：保存到 `public/assets/books/your-book.jpg`

2. **编辑** `src/data/books.ts`：
```typescript
{
  doubanId: "豆瓣ID",
  status: "reading",  // reading | completed | planned
  progress: 100,
  totalPages: 300,
}
```

3. **编辑** `src/pages/media.astro` 的 `bookData`：
```typescript
{
  doubanId: "豆瓣ID",
  title: "书名",
  cover: "/assets/books/your-book.jpg",
  rating: 9.0,
  author: "作者",
  publisher: "出版社",
  year: "2024",
  description: "简介",
  genre: ["类型"],
  link: "https://book.douban.com/subject/豆瓣ID/",
}
```

### 添加电影

1. **准备图片**：保存到 `public/assets/movies/your-movie.jpg`

2. **编辑** `src/data/movies.ts`：
```typescript
{
  doubanId: "豆瓣ID",
  status: "watched",  // watched | planned
  watchDate: "2024-01",
}
```

3. **编辑** `src/pages/media.astro` 的 `movieData`：
```typescript
{
  doubanId: "豆瓣ID",
  title: "电影名",
  cover: "/assets/movies/your-movie.jpg",
  rating: 9.0,
  director: "导演",
  year: "2024",
  duration: "120分钟",
  description: "简介",
  genre: ["类型"],
  link: "https://movie.douban.com/subject/豆瓣ID/",
}
```

## 🎨 图片规格

- **尺寸**：400-600px 宽，2:3 比例（如 400x600）
- **格式**：jpg, png, webp
- **大小**：建议 < 200KB

## 🔧 常见问题

### 图片不显示？
1. 检查文件路径是否正确
2. 检查文件名大小写
3. 清除浏览器缓存（Ctrl+Shift+R）

### 如何压缩图片？
使用在线工具：
- https://tinypng.com/
- https://squoosh.app/

### 如何获取豆瓣ID？
从豆瓣URL中获取数字部分：
- `https://book.douban.com/subject/2567698/` → ID是 `2567698`

## 📚 完整文档

查看 `BOOKS_MOVIES_SETUP.md` 获取详细说明。

## 🎯 页面功能

- ✅ 书籍/电影一键切换
- ✅ 状态筛选
- ✅ 阅读进度显示
- ✅ 响应式布局
- ✅ 豆瓣链接跳转

## 🌐 访问地址

- 开发环境：http://localhost:4321/media/
- 生产环境：https://your-domain.com/media/
