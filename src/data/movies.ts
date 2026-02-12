// 电影数据配置
// 使用豆瓣ID，数据会自动从豆瓣API获取
export type MovieItem = {
	doubanId: string; // 豆瓣电影ID
	status: "watched" | "watching" | "planned";
	watchDate?: string; // 观看日期（可选）
	// 以下字段会从豆瓣API自动获取
	title?: string;
	rating?: number;
	cover?: string;
	description?: string;
	director?: string;
	year?: string;
	genre?: string[];
	duration?: string;
	link?: string;
};

const localMovieList: MovieItem[] = [
	// 看过的电影
	{
		doubanId: "1292052",
		status: "watched",
		title: "肖申克的救赎",
		director: "弗兰克·德拉邦特",
		cover: "/assets/movies/Interstellar.webp",
		rating: 9.7,
		year: "1994",
		genre: ["剧情", "犯罪"],
	},
	{
		doubanId: "1889243",
		status: "watched",
		title: "星际穿越",
		director: "克里斯托弗·诺兰",
		cover: "/assets/movies/Interstellar.webp",
		rating: 9.3,
		year: "2014",
		genre: ["科幻", "冒险"],
	},
	{
		doubanId: "1082154",
		status: "watched",
		title: "活着",
		director: "张艺谋",
		cover: "/assets/movies/Interstellar.webp",
		rating: 9.3,
		year: "1994",
		genre: ["剧情", "历史"],
	},

	// 正在看的
	{
		doubanId: "35593344",
		status: "watching",
		title: "奥本海默",
		director: "克里斯托弗·诺兰",
		cover: "/assets/movies/Interstellar.webp",
		rating: 8.8,
		year: "2023",
		genre: ["剧情", "传记"],
	},

	// 想看的电影
	{
		doubanId: "1293172",
		status: "planned",
		title: "美丽人生",
		director: "罗伯托·贝尼尼",
		cover: "/assets/movies/Interstellar.webp",
		year: "1997",
		genre: ["剧情", "战争"],
	},
	{
		doubanId: "1295124",
		status: "planned",
		title: "辛德勒的名单",
		director: "史蒂文·斯皮尔伯格",
		cover: "/assets/movies/Interstellar.webp",
		year: "1993",
		genre: ["剧情", "历史"],
	},
	{
		doubanId: "3541415",
		status: "planned",
		title: "盗梦空间",
		director: "克里斯托弗·诺兰",
		cover: "/assets/movies/Interstellar.webp",
		year: "2010",
		genre: ["科幻", "悬疑"],
	},
	{
		doubanId: "1291548",
		status: "planned",
		title: "死亡诗社",
		director: "彼得·威尔",
		cover: "/assets/movies/Interstellar.webp",
		year: "1989",
		genre: ["剧情", "励志"],
	},
];

export default localMovieList;
