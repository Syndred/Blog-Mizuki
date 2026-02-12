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
	{ doubanId: "26728092", status: "completed" }, // 非暴力沟通
	{ doubanId: "1051220", status: "completed" }, // 潜规则
	{ doubanId: "25862578", status: "completed" }, // 重返狼群
	{ doubanId: "1082154", status: "completed" }, // 活着
	{ doubanId: "30373904", status: "completed" }, // 低风险创业
	{ doubanId: "21966353", status: "completed" }, // 贫穷的本质
	{ doubanId: "1427917", status: "completed" }, // 我与地坛
	{ doubanId: "1040934", status: "completed" }, // 君主论
	{ doubanId: "26363229", status: "completed" }, // 爱的博弈
	{ doubanId: "20427187", status: "completed" }, // 天才在左疯子在右
	{ doubanId: "26916012", status: "completed" }, // 启示路
	{ doubanId: "34466972", status: "completed" }, // 纳瓦尔宝典
	{ doubanId: "1033778", status: "completed" }, // 穷爸爸富爸爸

	// 正在看的书籍
	{ doubanId: "1008357", status: "reading", progress: 100, totalPages: 400 }, // 傲慢与偏见

	// 想看的书籍
	{ doubanId: "30353086", status: "planned" }, // 行为
	{ doubanId: "1291836", status: "planned" }, // 自私的基因
	{ doubanId: "6854525", status: "planned" }, // 黑天鹅
	{ doubanId: "25782168", status: "planned" }, // 反脆弱
	{ doubanId: "30165270", status: "planned" }, // 灰犀牛
	{ doubanId: "30353963", status: "planned" }, // 事实
	{ doubanId: "25984204", status: "planned" }, // 在细雨中呐喊
	{ doubanId: "25749845", status: "planned" }, // 第七天
	{ doubanId: "30360204", status: "planned" }, // 穿越寒冬
	{ doubanId: "30360835", status: "planned" }, // 谁说商业直觉是天生的
	{ doubanId: "1051220", status: "planned" }, // 血酬定律
	{ doubanId: "1296395", status: "planned" }, // 洞穴奇案
	{ doubanId: "3352904", status: "planned" }, // 每周工作四小时
	{ doubanId: "1011507", status: "planned" }, // 资本论
	{ doubanId: "26297694", status: "planned" }, // 世界观
	{ doubanId: "25985021", status: "planned" }, // 人类简史
	{ doubanId: "1200884", status: "planned" }, // 平凡的世界
	{ doubanId: "1008145", status: "planned" }, // 围城
	{ doubanId: "1479844", status: "planned" }, // 杀死一只知更鸟
	{ doubanId: "10594787", status: "planned" }, // 霍乱时期的爱情
	{ doubanId: "26969699", status: "planned" }, // 房思琪的初恋乐园
	{ doubanId: "6964185", status: "planned" }, // 冰与火之歌
	{ doubanId: "1858513", status: "planned" }, // 月亮与六便士
	{ doubanId: "1009097", status: "planned" }, // 人生的智慧
	{ doubanId: "1045818", status: "planned" }, // 苏菲的世界
	{ doubanId: "6082808", status: "planned" }, // 百年孤独
	{ doubanId: "3259440", status: "planned" }, // 白夜行
	{ doubanId: "1008000", status: "planned" }, // 教父
];

export default localBookList;
