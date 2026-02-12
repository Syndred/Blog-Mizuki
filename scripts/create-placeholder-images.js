// 创建占位图片的脚本
// 运行: node scripts/create-placeholder-images.js

const fs = require("fs");
const path = require("path");

// 创建目录
const booksDir = path.join(process.cwd(), "public", "assets", "books");
const moviesDir = path.join(process.cwd(), "public", "assets", "movies");

if (!fs.existsSync(booksDir)) {
	fs.mkdirSync(booksDir, { recursive: true });
	console.log("✅ 创建目录: public/assets/books/");
}

if (!fs.existsSync(moviesDir)) {
	fs.mkdirSync(moviesDir, { recursive: true });
	console.log("✅ 创建目录: public/assets/movies/");
}

// 创建 .gitkeep 文件
fs.writeFileSync(path.join(booksDir, ".gitkeep"), "");
fs.writeFileSync(path.join(moviesDir, ".gitkeep"), "");

console.log("\n📁 目录结构已创建！");
console.log("\n📝 请将以下图片放入对应目录：");
console.log("\n书籍封面 (public/assets/books/):");
console.log("  - santi.jpg       (三体)");
console.log("  - huozhe.jpg      (活着)");
console.log("  - sapiens.jpg     (人类简史)");
console.log("  - bainian.jpg     (百年孤独)");
console.log("\n电影海报 (public/assets/movies/):");
console.log("  - shawshank.jpg   (肖申克的救赎)");
console.log("  - bawang.jpg      (霸王别姬)");
console.log("  - qianyu.jpg      (千与千寻)");
console.log("  - interstellar.jpg (星际穿越)");
console.log("\n💡 提示：");
console.log("  1. 图片建议尺寸：宽度 400-600px，高度按 2:3 比例");
console.log("  2. 支持格式：jpg, png, webp");
console.log("  3. 可以从豆瓣下载图片后保存到对应目录");
console.log("  4. 或使用任何你喜欢的封面图片");
