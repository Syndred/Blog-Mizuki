// Timeline data configuration file
// Used to manage data for the timeline page

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // If empty, it means current
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	// ========== 工作经历 ==========
	{
		id: "codingcat-teacher",
		title: "AIC++教学导师",
		description:
			"在编程猫担任C++教学导师，负责学生教学、解答家长疑问、学生答疑等工作。期间兼职羽毛球教练。",
		type: "work",
		startDate: "2025-02-01",
		location: "深圳",
		organization: "编程猫",
		position: "AIC++教学导师",
		skills: ["C++", "教学", "沟通", "羽毛球"],
		achievements: [
			"负责C++课程教学，帮助学生掌握编程基础",
			"解答家长疑问，维护良好的家校沟通",
			"兼职羽毛球教练，发挥体育特长",
		],
		icon: "material-symbols:school",
		color: "#DC2626",
		featured: true,
	},
	{
		id: "zhenfang-intern",
		title: "前端开发工程师",
		description:
			"在深圳市绽放工场科技有限公司担任前端开发，参与多个企业级项目开发，包括保险官网、人脸签章系统、视频通话系统和政务服务平台。",
		type: "work",
		startDate: "2024-07-01",
		endDate: "2025-01-31",
		location: "深圳",
		organization: "深圳市绽放工场科技有限公司",
		position: "前端开发",
		skills: ["Vue3", "Vue2", "Element Plus", "Vant", "Vuetify", "Canvas", "WebSocket", "TRTC", "i18n"],
		achievements: [
			"亚太财险香港官网：使用Vue3+ElementPlus+i18n实现国际化响应式官网",
			"人脸签章系统：使用Vue+Vant+Canvas实现移动端视频流实时预览和人脸认证",
			"车险理赔视频通话：使用腾讯TRTC+WebSocket实现小程序与PC端视频通话，优化心跳与断线重连机制",
			"交通局12328平台：使用Vue2+Vuetify完成协办工单流程及表单操作",
		],
		icon: "material-symbols:work",
		color: "#DC2626",
		featured: true,
	},
	{
		id: "timeline-intern",
		title: "前端开发实习生",
		description:
			"在深圳市新时间线集团有限公司实习，参与企业后台管理系统、AIGC聚合平台和网页端OS的开发工作。",
		type: "work",
		startDate: "2023-08-01",
		endDate: "2023-10-31",
		location: "深圳",
		organization: "深圳市新时间线集团有限公司",
		position: "前端开发（实习）",
		skills: ["Vue", "jQuery", "Bootstrap", "ElementUI", "Layer", "WebSocket", "RuoYi"],
		achievements: [
			"企业后台管理系统：基于若依框架开发，负责UI设计、页面交互、前后端联调",
			"AIGC聚合平台：集合通义、天工、GPT、智谱、Kimi等多个AI接口，负责前端页面实现",
			"网页端OS：使用jQuery、Vue、Bootstrap、ElementUI、WebSocket等技术实现网页端操作系统",
		],
		icon: "material-symbols:work",
		color: "#DC2626",
		featured: true,
	},

	// ========== 教育背景 ==========
	{
		id: "university-education",
		title: "软件工程本科",
		description:
			"广东技术师范大学软件工程专业本科毕业，主修Web开发、数据库、UI设计、软件工程、云计算等课程。在校期间担任多项学生工作，积极参与各类比赛和活动。",
		type: "education",
		startDate: "2020-07-01",
		endDate: "2024-07-01",
		location: "广州",
		organization: "广东技术师范大学",
		position: "本科生",
		skills: ["Java", "Web开发", "数据库", "UI设计", "Linux", "云计算", "数据结构与算法", "AI基础"],
		achievements: [
			"担任校级心理中心阳光使者",
			"担任班委和学生会干部",
			"参加征文比赛获二等奖",
			"任职勤工俭学老师助手",
			"担任爱心助教负责人",
			"参加羽毛球和摄影比赛",
			"兼职羽毛球教练",
			"担任抖音探店达人和账号运营",
		],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},

	// ========== 比赛项目 ==========
	{
		id: "software-cup-2023",
		title: "第十二届中国软件杯大赛 - 智能简历解析系统",
		description:
			"智能简历APP项目，用户可以通过上传简历识别录入简历信息，并能通过岗位智能匹配简历。获得省级奖项。",
		type: "project",
		startDate: "2023-03-01",
		endDate: "2023-07-01",
		skills: ["Vue3", "Vue-CLI", "Vue-Router", "Vuex", "Axios", "Element Plus", "ECharts"],
		achievements: [
			"负责团队分工、需求规划、Git仓库管理、代码规范、接口设计与对接",
			"使用Vue3全家桶构建整个前端项目",
			"采用模块化开发与前后端分离架构",
			"负责文档撰写和演示准备",
		],
		icon: "material-symbols:emoji-events",
		color: "#7C3AED",
		featured: true,
	},
	{
		id: "innovation-contest-2022",
		title: "第十四届中国大学生创新创业大赛",
		description:
			"【A37】基于智能文字场景个人财务管理创新应用 - 智能记账App，使用Vue框架，通过ChatGPT、OCR等多个接口实现智能记账及分析功能。",
		type: "project",
		startDate: "2022-11-01",
		endDate: "2023-05-01",
		skills: ["Vue2", "Axios", "jQuery", "Bootstrap", "Big.js"],
		achievements: [
			"负责前期市场调研和前端原型图设计",
			"协调沟通组内工作，推进项目进度",
			"使用Vue2+Axios+jQuery+Big.js构建前端",
			"使用Bootstrap实现青年/老年模式切换和响应式页面",
			"后期负责部分文档编写和演示视频剪辑",
		],
		icon: "material-symbols:emoji-events",
		color: "#7C3AED",
		featured: true,
	},

	// ========== 毕业设计 ==========
	{
		id: "graduation-project",
		title: "毕业设计：失物招领平台",
		description:
			"基于SpringBoot+Vue的失物招领平台的设计与实现。用户可浏览与发布失物或拾物，管理员可登录后台管理页面查看与管理物品、公告、用户等信息。",
		type: "project",
		startDate: "2024-03-01",
		endDate: "2024-05-01",
		skills: ["Vue3", "ElementPlus", "Pinia", "SpringBoot", "Redis", "MyBatis", "百度API", "高德地图"],
		achievements: [
			"全栈开发：设计与实现前后端完整功能",
			"使用Vue3 Setup语法糖、ElementPlus、Pinia构建前端",
			"集成百度图片识别接口和高德地图接口",
			"后端使用SpringBoot、Redis、MyBatis",
			"完成一个完整可用的失物招领平台",
		],
		icon: "material-symbols:code",
		color: "#EA580C",
		featured: true,
	},

	// ========== 证书与能力 ==========
	{
		id: "certificates",
		title: "所获证书",
		description:
			"CET-4、普通话二级乙等、1+X Web前端中级证书。",
		type: "achievement",
		startDate: "2020-09-01",
		endDate: "2024-07-01",
		skills: ["英语", "普通话", "Web前端"],
		achievements: [
			"CET-4 英语四级证书",
			"普通话二级乙等",
			"1+X Web前端开发中级证书",
		],
		icon: "material-symbols:verified",
		color: "#059669",
	},
];

// Get timeline statistics
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education")
			.length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// Get timeline items by type
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
};

// Get featured timeline items
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
};

// Get current ongoing items
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// Calculate total work experience
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
