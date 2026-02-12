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
	{ doubanId: "1292052", status: "watched" }, // 肖申克的救赎
	{ doubanId: "1291843", status: "watched" }, // 黑客帝国
	{ doubanId: "1292063", status: "watched" }, // 这个杀手不太冷
	{ doubanId: "1292720", status: "watched" }, // 阿甘正传
	{ doubanId: "1292001", status: "watched" }, // 海上钢琴师
	{ doubanId: "1292064", status: "watched" }, // 楚门的世界
	{ doubanId: "1889243", status: "watched" }, // 星际穿越
	{ doubanId: "1292722", status: "watched" }, // 泰坦尼克号
	{ doubanId: "1291546", status: "watched" }, // 霸王别姬（魔女可能是这个）
	{ doubanId: "1293182", status: "watched" }, // 闪灵
	{ doubanId: "1652587", status: "watched" }, // 阿凡达
	{ doubanId: "26752088", status: "watched" }, // 流浪地球
	{ doubanId: "1291841", status: "watched" }, // 教父
	{ doubanId: "6786002", status: "watched" }, // 白日梦想家
	{ doubanId: "1292215", status: "watched" }, // 怦然心动
	{ doubanId: "1292220", status: "watched" }, // 情书
	{ doubanId: "27060077", status: "watched" }, // 绿皮书
	{ doubanId: "3541415", status: "watched" }, // 盗梦空间
	{ doubanId: "30140571", status: "watched" }, // 我不是药神（修正ID）
	{ doubanId: "26683290", status: "watched" }, // 你的名字
	{ doubanId: "1298624", status: "watched" }, // 闻香识女人
	{ doubanId: "20495023", status: "watched" }, // 寻梦环游记
	{ doubanId: "1849031", status: "watched" }, // 当幸福来敲门
	{ doubanId: "26794435", status: "watched" }, // 哪吒之魔童降世
	{ doubanId: "30282717", status: "watched" }, // 罗小黑战记

	// 正在看的
	{ doubanId: "35593344", status: "watching" }, // 奥本海默

	// 想看的电影
	{ doubanId: "1293172", status: "planned" }, // 美丽人生（修正ID）
	{ doubanId: "1295124", status: "planned" }, // 辛德勒的名单
	{ doubanId: "1292365", status: "planned" }, // 活着
	{ doubanId: "1293839", status: "planned" }, // 乱世佳人
	{ doubanId: "2140939", status: "planned" }, // 华尔街之狼
	{ doubanId: "1793929", status: "planned" }, // 达拉斯买家俱乐部
	{ doubanId: "1306029", status: "planned" }, // 美丽心灵
	{ doubanId: "1296736", status: "planned" }, // 钢琴家
	{ doubanId: "1900841", status: "planned" }, // 触不可及（修正ID）
	{ doubanId: "26430107", status: "planned" }, // 海边的曼彻斯特
	{ doubanId: "26348103", status: "planned" }, // 月光男孩
	{ doubanId: "4154858", status: "planned" }, // 叫我第一名
	{ doubanId: "26942645", status: "planned" }, // 莫娣
	{ doubanId: "1292656", status: "planned" }, // 灿烂人生
	{ doubanId: "1291548", status: "planned" }, // 死亡诗社
	{ doubanId: "6849646", status: "planned" }, // 超脱
	{ doubanId: "1418200", status: "planned" }, // 傲慢与偏见
	{ doubanId: "30170448", status: "planned" }, // 何以为家
	{ doubanId: "34841067", status: "planned" }, // 捍卫雅各布
	{ doubanId: "30468961", status: "planned" }, // 想见你
];

export default localMovieList;
