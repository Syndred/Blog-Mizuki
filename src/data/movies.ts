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
		description:
			"两个被囚禁的男人多年来建立了深厚的友谊，通过共同的救赎经历找到了慰藉和最终的自由。",
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
		description:
			"一组宇航员穿越虫洞寻找人类新家园，探索爱与时间的终极意义。",
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
		description:
			"一个普通人在时代变迁中的生存故事，展现了生命的坚韧与尊严。",
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
		description:
			"原子弹之父奥本海默的传记，探讨科学、道德与历史责任的复杂关系。",
		year: "2023",
		genre: ["剧情", "传记"],
	},
	{
		doubanId: "3541415",
		status: "watching",
		title: "盗梦空间",
		director: "克里斯托弗·诺兰",
		cover: "/assets/movies/Interstellar.webp",
		rating: 9.3,
		description:
			"一个盗梦团队进入他人梦境窃取秘密，在梦境与现实的边界探索人性。",
		year: "2010",
		genre: ["科幻", "悬疑"],
	},

	// 想看的电影
	{
		doubanId: "1293172",
		status: "planned",
		title: "美丽人生",
		director: "罗伯托·贝尼尼",
		cover: "/assets/movies/Interstellar.webp",
		description:
			"一位父亲用想象力为儿子编织美好世界，在集中营中守护童真与希望。",
		year: "1997",
		genre: ["剧情", "战争"],
	},
	{
		doubanId: "1295124",
		status: "planned",
		title: "辛德勒的名单",
		director: "史蒂文·斯皮尔伯格",
		cover: "/assets/movies/Interstellar.webp",
		description: "二战期间，一位德国商人拯救了上千名犹太人的生命。",
		year: "1993",
		genre: ["剧情", "历史"],
	},
	{
		doubanId: "1291548",
		status: "planned",
		title: "死亡诗社",
		director: "彼得·威尔",
		cover: "/assets/movies/Interstellar.webp",
		description:
			"一位充满激情的教师用诗歌唤醒学生对生命的热爱和独立思考的勇气。",
		year: "1989",
		genre: ["剧情", "励志"],
	},
];

export default localMovieList;
