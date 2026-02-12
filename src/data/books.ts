// 书籍数据配置
// 使用豆瓣ID，数据会自动从豆瓣API获取
export type BookItem = {
	doubanId: string; // 豆瓣书籍ID
	status: "reading" | "completed" | "planned";
	progress?: number; // 当前阅读页数（可选）
	totalPages?: number; // 总页数（可选）
	startDate?: string; // 开始阅读日期（可选）
	endDate?: string; // 完成阅读日期（可选）
	// 以下字段会从豆瓣API自动获取
	title?: string;
	rating?: number;
	cover?: string;
	description?: string;
	author?: string;
	year?: string;
	genre?: string[];
	publisher?: string;
	link?: string;
};

const localBookList: BookItem[] = [
	// 看过的书籍
	{
		doubanId: "26728092",
		status: "completed",
		title: "非暴力沟通",
		author: "马歇尔·卢森堡",
		cover: "/assets/books/chongfan.jpg",
		rating: 8.6,
		description: "一本关于沟通技巧的经典著作，教你如何用爱的语言化解冲突。",
		genre: ["心理学", "沟通"],
	},
	{
		doubanId: "1051220",
		status: "completed",
		title: "潜规则",
		author: "吴思",
		cover: "/assets/books/chongfan.jpg",
		rating: 8.5,
		description: "揭示中国历史中的隐秘规则，深入剖析权力运作的本质。",
		genre: ["历史", "社会"],
	},
	{
		doubanId: "1082154",
		status: "completed",
		title: "活着",
		author: "余华",
		cover: "/assets/books/chongfan.jpg",
		rating: 9.4,
		description: "讲述一个人一生的苦难历程，展现生命的韧性与尊严。",
		genre: ["小说", "文学"],
	},

	// 正在看的书籍
	{
		doubanId: "1008357",
		status: "reading",
		progress: 100,
		totalPages: 400,
		title: "傲慢与偏见",
		author: "简·奥斯汀",
		cover: "/assets/books/chongfan.jpg",
		rating: 9.0,
		description: "英国文学经典，讲述伊丽莎白与达西的爱情故事。",
		genre: ["小说", "爱情"],
	},

	// 想看的书籍
	{
		doubanId: "30353086",
		status: "planned",
		title: "行为",
		author: "罗伯特·萨波尔斯基",
		cover: "/assets/books/chongfan.jpg",
		description: "从生物学角度解读人类行为的百科全书。",
		genre: ["科学", "心理学"],
	},
	{
		doubanId: "1291836",
		status: "planned",
		title: "自私的基因",
		author: "理查德·道金斯",
		cover: "/assets/books/chongfan.jpg",
		description: "进化论经典，从基因角度重新理解生命。",
		genre: ["科学", "生物学"],
	},
	{
		doubanId: "6854525",
		status: "planned",
		title: "黑天鹅",
		author: "纳西姆·塔勒布",
		cover: "/assets/books/chongfan.jpg",
		description: "探讨不可预测事件对世界的巨大影响。",
		genre: ["经济学", "哲学"],
	},
	{
		doubanId: "25985021",
		status: "planned",
		title: "人类简史",
		author: "尤瓦尔·赫拉利",
		cover: "/assets/books/chongfan.jpg",
		description: "从石器时代到人工智能时代的人类发展史。",
		genre: ["历史", "人类学"],
	},
];

export default localBookList;
