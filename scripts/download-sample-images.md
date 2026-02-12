# 示例图片下载指南

## 方法1：手动从豆瓣下载（推荐）

### 书籍封面

1. **三体** (santi.jpg)
   - 访问：https://book.douban.com/subject/2567698/
   - 右键封面图 → 图片另存为 → 保存到 `public/assets/books/santi.jpg`

2. **活着** (huozhe.jpg)
   - 访问：https://book.douban.com/subject/1082154/
   - 右键封面图 → 图片另存为 → 保存到 `public/assets/books/huozhe.jpg`

3. **人类简史** (sapiens.jpg)
   - 访问：https://book.douban.com/subject/25985021/
   - 右键封面图 → 图片另存为 → 保存到 `public/assets/books/sapiens.jpg`

4. **百年孤独** (bainian.jpg)
   - 访问：https://book.douban.com/subject/6082808/
   - 右键封面图 → 图片另存为 → 保存到 `public/assets/books/bainian.jpg`

### 电影海报

1. **肖申克的救赎** (shawshank.jpg)
   - 访问：https://movie.douban.com/subject/1292052/
   - 右键海报图 → 图片另存为 → 保存到 `public/assets/movies/shawshank.jpg`

2. **霸王别姬** (bawang.jpg)
   - 访问：https://movie.douban.com/subject/1291546/
   - 右键海报图 → 图片另存为 → 保存到 `public/assets/movies/bawang.jpg`

3. **千与千寻** (qianyu.jpg)
   - 访问：https://movie.douban.com/subject/1291561/
   - 右键海报图 → 图片另存为 → 保存到 `public/assets/movies/qianyu.jpg`

4. **星际穿越** (interstellar.jpg)
   - 访问：https://movie.douban.com/subject/1889243/
   - 右键海报图 → 图片另存为 → 保存到 `public/assets/movies/interstellar.jpg`

## 方法2：使用占位图片（临时方案）

如果暂时无法下载真实图片，可以使用占位图片：

### 在线生成占位图片

访问以下链接，右键保存图片：

**书籍封面：**
- https://via.placeholder.com/400x600/4A90E2/FFFFFF?text=三体
- https://via.placeholder.com/400x600/50C878/FFFFFF?text=活着
- https://via.placeholder.com/400x600/FF6B6B/FFFFFF?text=人类简史
- https://via.placeholder.com/400x600/9B59B6/FFFFFF?text=百年孤独

**电影海报：**
- https://via.placeholder.com/400x600/E74C3C/FFFFFF?text=肖申克的救赎
- https://via.placeholder.com/400x600/3498DB/FFFFFF?text=霸王别姬
- https://via.placeholder.com/400x600/2ECC71/FFFFFF?text=千与千寻
- https://via.placeholder.com/400x600/F39C12/FFFFFF?text=星际穿越

## 方法3：使用浏览器开发者工具

1. 打开豆瓣页面
2. 按 F12 打开开发者工具
3. 切换到 Network 标签
4. 刷新页面
5. 在 Network 中找到图片文件
6. 右键 → Open in new tab
7. 右键图片 → 图片另存为

## 图片处理建议

### 压缩图片

下载后建议压缩图片以提高加载速度：

**在线工具：**
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/

**命令行工具：**
```bash
# 安装 imagemagick
brew install imagemagick  # macOS
apt-get install imagemagick  # Linux

# 批量压缩
mogrify -quality 85 -resize 400x600 *.jpg
```

### 转换为 WebP

WebP 格式体积更小：

```bash
# 安装 cwebp
brew install webp  # macOS
apt-get install webp  # Linux

# 转换单个文件
cwebp -q 80 input.jpg -o output.webp

# 批量转换
for file in *.jpg; do
  cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done
```

## 快速检查清单

下载完成后，检查以下文件是否存在：

```
✅ public/assets/books/santi.jpg
✅ public/assets/books/huozhe.jpg
✅ public/assets/books/sapiens.jpg
✅ public/assets/books/bainian.jpg
✅ public/assets/movies/shawshank.jpg
✅ public/assets/movies/bawang.jpg
✅ public/assets/movies/qianyu.jpg
✅ public/assets/movies/interstellar.jpg
```

## 验证图片

运行开发服务器并访问页面：

```bash
npm run dev
# 或
pnpm dev
```

访问：http://localhost:4321/media/

如果图片正常显示，说明配置成功！

## 故障排除

### 图片不显示？

1. **检查文件路径**
   ```bash
   ls public/assets/books/
   ls public/assets/movies/
   ```

2. **检查文件名**
   - 确保文件名与代码中的一致
   - 注意大小写（Linux/Mac 区分大小写）

3. **检查文件格式**
   - 确保是有效的图片文件
   - 尝试在图片查看器中打开

4. **清除缓存**
   - 浏览器：Ctrl+Shift+R (Windows) 或 Cmd+Shift+R (Mac)
   - 或使用无痕模式测试

### 图片太大？

如果图片文件过大（>500KB），建议压缩：

1. 使用 TinyPNG 在线压缩
2. 或调整图片尺寸到 400-600px 宽
3. 或转换为 WebP 格式

## 需要帮助？

如果遇到问题，请检查：
1. 文件路径是否正确
2. 文件名是否匹配
3. 图片格式是否支持
4. 浏览器控制台是否有错误信息
