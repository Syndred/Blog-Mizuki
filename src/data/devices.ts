// 常用软件数据配置文件

export type SoftwarePlatform = "PC" | "MB" | "ALL";

export interface Software {
	name: string;
	image?: string;
	specs: string;
	platform: SoftwarePlatform;
	description: string;
	link: string;
}

// 软件分类类型，支持任意分类名称
export type SoftwareCategory = {
	[categoryName: string]: Software[];
} & {
	自定义?: Software[];
};

const withIcon = (link: string) =>
	`https://www.google.com/s2/favicons?sz=128&domain_url=${encodeURIComponent(link)}`;

export const softwareData: SoftwareCategory = {
	沟通: [
		{
			name: "钉钉",
			image: withIcon("https://www.dingtalk.com/"),
			specs: "沟通工具",
			platform: "ALL",
			description: "企业与团队沟通协作。",
			link: "https://www.dingtalk.com/",
		},
		{
			name: "QQ",
			image: withIcon("https://im.qq.com/"),
			specs: "沟通工具",
			platform: "ALL",
			description: "日常聊天与文件收发。",
			link: "https://im.qq.com/",
		},
		{
			name: "微信",
			image: withIcon("https://weixin.qq.com/"),
			specs: "沟通工具",
			platform: "ALL",
			description: "联系人沟通与社群交流。",
			link: "https://weixin.qq.com/",
		},
		{
			name: "Telegram",
			image: withIcon("https://telegram.org/"),
			specs: "沟通工具",
			platform: "ALL",
			description: "频道订阅与跨端沟通。",
			link: "https://telegram.org/",
		},
	],
	邮箱: [
		{
			name: "网易邮箱",
			image: withIcon("https://mail.163.com/"),
			specs: "邮箱服务",
			platform: "ALL",
			description: "常用邮件收发与归档。",
			link: "https://mail.163.com/",
		},
		{
			name: "QQ邮箱",
			image: withIcon("https://mail.qq.com/"),
			specs: "邮箱服务",
			platform: "ALL",
			description: "工作与注册邮件管理。",
			link: "https://mail.qq.com/",
		},
		{
			name: "谷歌邮箱",
			image: withIcon("https://mail.google.com/"),
			specs: "邮箱服务",
			platform: "ALL",
			description: "国际邮件与第三方服务绑定。",
			link: "https://mail.google.com/",
		},
	],
	办公软件: [
		{
			name: "PPT",
			image: withIcon(
				"https://www.microsoft.com/microsoft-365/powerpoint",
			),
			specs: "办公套件",
			platform: "PC",
			description: "演示文稿制作与展示。",
			link: "https://www.microsoft.com/microsoft-365/powerpoint",
		},
		{
			name: "Word",
			image: withIcon("https://www.microsoft.com/microsoft-365/word"),
			specs: "办公套件",
			platform: "PC",
			description: "文档编辑与排版。",
			link: "https://www.microsoft.com/microsoft-365/word",
		},
		{
			name: "Excel",
			image: withIcon("https://www.microsoft.com/microsoft-365/excel"),
			specs: "办公套件",
			platform: "PC",
			description: "表格处理与数据分析。",
			link: "https://www.microsoft.com/microsoft-365/excel",
		},
	],
	摄影: [
		{
			name: "PS",
			image: withIcon("https://www.adobe.com/products/photoshop.html"),
			specs: "影像处理",
			platform: "PC",
			description: "图像编辑与视觉设计。",
			link: "https://www.adobe.com/products/photoshop.html",
		},
		{
			name: "PR",
			image: withIcon("https://www.adobe.com/products/premiere.html"),
			specs: "影像处理",
			platform: "PC",
			description: "视频剪辑与调色。",
			link: "https://www.adobe.com/products/premiere.html",
		},
		{
			name: "LR",
			image: withIcon(
				"https://www.adobe.com/products/photoshop-lightroom.html",
			),
			specs: "影像处理",
			platform: "PC",
			description: "照片管理与批量调色。",
			link: "https://www.adobe.com/products/photoshop-lightroom.html",
		},
		{
			name: "BR",
			image: withIcon("https://www.adobe.com/products/bridge.html"),
			specs: "影像处理",
			platform: "PC",
			description: "素材整理与资源编目。",
			link: "https://www.adobe.com/products/bridge.html",
		},
	],
	卸载: [
		{
			name: "Geek",
			image: withIcon("https://geekuninstaller.com/"),
			specs: "卸载清理",
			platform: "PC",
			description: "深度卸载残留清理。",
			link: "https://geekuninstaller.com/",
		},
		{
			name: "HiBit Uninstaller",
			image: withIcon("https://www.hibitsoft.ir/Uninstaller.html"),
			specs: "卸载清理",
			platform: "PC",
			description: "批量卸载与系统清理。",
			link: "https://www.hibitsoft.ir/Uninstaller.html",
		},
	],
	音乐: [
		{
			name: "LX Music",
			image: withIcon("https://lxmusic.toside.cn/"),
			specs: "音乐播放",
			platform: "PC",
			description: "本地与在线音乐播放。",
			link: "https://lxmusic.toside.cn/",
		},
	],
	浏览器: [
		{
			name: "Chrome",
			image: withIcon("https://www.google.com/chrome/"),
			specs: "浏览器",
			platform: "ALL",
			description: "网页浏览与开发调试。",
			link: "https://www.google.com/chrome/",
		},
		{
			name: "Edge",
			image: withIcon("https://www.microsoft.com/edge"),
			specs: "浏览器",
			platform: "ALL",
			description: "日常浏览与微软生态联动。",
			link: "https://www.microsoft.com/edge",
		},
	],
	效率工具: [
		{
			name: "Quicker",
			image: withIcon("https://getquicker.net/"),
			specs: "效率提升",
			platform: "PC",
			description: "快捷动作自动化。",
			link: "https://getquicker.net/",
		},
		{
			name: "uTools",
			image: withIcon("https://www.u-tools.cn/"),
			specs: "效率提升",
			platform: "PC",
			description: "命令面板与插件工具箱。",
			link: "https://www.u-tools.cn/",
		},
		{
			name: "滴答清单",
			image: withIcon("https://dida365.com/"),
			specs: "效率提升",
			platform: "ALL",
			description: "任务管理与提醒。",
			link: "https://dida365.com/",
		},
	],
	Markdown: [
		{
			name: "Typora",
			image: withIcon("https://typora.io/"),
			specs: "Markdown 编辑",
			platform: "PC",
			description: "沉浸式 Markdown 写作。",
			link: "https://typora.io/",
		},
	],
	"AI Idea": [
		{
			name: "Cursor",
			image: withIcon("https://www.cursor.com/"),
			specs: "AI IDE",
			platform: "PC",
			description: "AI 辅助编程与重构。",
			link: "https://www.cursor.com/",
		},
		{
			name: "Trae",
			image: withIcon("https://www.trae.cn/"),
			specs: "AI IDE",
			platform: "PC",
			description: "智能代码生成与问答。",
			link: "https://www.trae.cn/",
		},
		{
			name: "Kiko",
			image: "",
			specs: "AI IDE",
			platform: "PC",
			description: "AI 编程助手。",
			link: "#",
		},
	],
	壁纸: [
		{
			name: "Wallpaper Engine",
			image: withIcon("https://www.wallpaperengine.io/"),
			specs: "壁纸工具",
			platform: "PC",
			description: "动态桌面壁纸管理。",
			link: "https://www.wallpaperengine.io/",
		},
	],
	思维导图: [
		{
			name: "XMind",
			image: withIcon("https://xmind.app/"),
			specs: "思维导图",
			platform: "ALL",
			description: "思维整理与结构化表达。",
			link: "https://xmind.app/",
		},
	],
	网盘: [
		{
			name: "百度网盘",
			image: withIcon("https://pan.baidu.com/"),
			specs: "网盘服务",
			platform: "ALL",
			description: "文件同步与分享。",
			link: "https://pan.baidu.com/",
		},
		{
			name: "阿里云盘",
			image: withIcon("https://www.aliyundrive.com/"),
			specs: "网盘服务",
			platform: "ALL",
			description: "大文件备份与传输。",
			link: "https://www.aliyundrive.com/",
		},
		{
			name: "腾讯微云",
			image: withIcon("https://www.weiyun.com/"),
			specs: "网盘服务",
			platform: "ALL",
			description: "腾讯生态文件协作。",
			link: "https://www.weiyun.com/",
		},
	],
	AI: [
		{
			name: "腾讯元宝",
			image: withIcon(
				"https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D/id6478167434",
			),
			specs: "AI",
			platform: "MB",
			description: "移动端 AI 助手。",
			link: "https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D/id6478167434",
		},
		{
			name: "豆包",
			image: withIcon(
				"https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%81%8A%E5%A4%A9%E5%8A%A9%E6%89%8B/id6446131372",
			),
			specs: "AI",
			platform: "MB",
			description: "移动端 AI 对话与创作。",
			link: "https://apps.apple.com/cn/app/%E8%B1%86%E5%8C%85-%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%81%8A%E5%A4%A9%E5%8A%A9%E6%89%8B/id6446131372",
		},
	],
	提升: [
		{
			name: "多邻国",
			image: withIcon("https://www.duolingo.com/"),
			specs: "提升",
			platform: "MB",
			description: "语言学习与打卡。",
			link: "https://www.duolingo.com/",
		},
		{
			name: "一言",
			image: withIcon("https://hitokoto.cn/"),
			specs: "提升",
			platform: "MB",
			description: "每日金句与灵感记录。",
			link: "https://hitokoto.cn/",
		},
		{
			name: "简讯",
			image: withIcon(
				"https://apps.apple.com/cn/app/%E7%AE%80%E8%AE%AF-%E4%B8%BA%E4%BD%A0%E7%B2%BE%E9%80%89%E6%AF%8F%E6%97%A5%E8%B5%84%E8%AE%AF/id1160249028",
			),
			specs: "提升",
			platform: "MB",
			description: "碎片化知识阅读。",
			link: "https://apps.apple.com/cn/app/%E7%AE%80%E8%AE%AF-%E4%B8%BA%E4%BD%A0%E7%B2%BE%E9%80%89%E6%AF%8F%E6%97%A5%E8%B5%84%E8%AE%AF/id1160249028",
		},
	],
	理财: [
		{
			name: "同花顺",
			image: withIcon("https://www.10jqka.com.cn/"),
			specs: "理财",
			platform: "MB",
			description: "行情查看与投资资讯。",
			link: "https://www.10jqka.com.cn/",
		},
		{
			name: "理财魔方",
			image: withIcon(
				"https://apps.apple.com/cn/app/%E7%90%86%E8%B4%A2%E9%AD%94%E6%96%B9-%E6%99%BA%E8%83%BD%E5%9F%BA%E9%87%91%E5%AE%9A%E6%8A%95%E7%BB%84%E5%90%88%E5%8A%A9%E6%89%8B/id1346789616",
			),
			specs: "理财",
			platform: "MB",
			description: "基金组合与理财管理。",
			link: "https://apps.apple.com/cn/app/%E7%90%86%E8%B4%A2%E9%AD%94%E6%96%B9-%E6%99%BA%E8%83%BD%E5%9F%BA%E9%87%91%E5%AE%9A%E6%8A%95%E7%BB%84%E5%90%88%E5%8A%A9%E6%89%8B/id1346789616",
		},
		{
			name: "支付宝",
			image: withIcon("https://www.alipay.com/"),
			specs: "理财",
			platform: "MB",
			description: "支付与理财服务。",
			link: "https://www.alipay.com/",
		},
	],
	信息: [
		{
			name: "抖音",
			image: withIcon("https://www.douyin.com/"),
			specs: "信息获取",
			platform: "MB",
			description: "短视频内容获取。",
			link: "https://www.douyin.com/",
		},
		{
			name: "小红书",
			image: withIcon("https://www.xiaohongshu.com/"),
			specs: "信息获取",
			platform: "MB",
			description: "生活方式与经验分享。",
			link: "https://www.xiaohongshu.com/",
		},
		{
			name: "哔哩哔哩",
			image: withIcon("https://www.bilibili.com/"),
			specs: "信息获取",
			platform: "MB",
			description: "视频学习与社区内容。",
			link: "https://www.bilibili.com/",
		},
		{
			name: "即刻",
			image: withIcon("https://okjike.com/"),
			specs: "信息获取",
			platform: "MB",
			description: "兴趣圈层与动态订阅。",
			link: "https://okjike.com/",
		},
		{
			name: "酷安",
			image: withIcon("https://www.coolapk.com/"),
			specs: "信息获取",
			platform: "MB",
			description: "应用资讯与数码社区。",
			link: "https://www.coolapk.com/",
		},
		{
			name: "中羽在线",
			image: withIcon("https://www.badmintoncn.com/"),
			specs: "信息获取",
			platform: "MB",
			description: "羽毛球资讯与交流。",
			link: "https://www.badmintoncn.com/",
		},
	],
	效率: [
		{
			name: "滴答清单",
			image: withIcon("https://dida365.com/"),
			specs: "效率",
			platform: "MB",
			description: "移动端任务管理。",
			link: "https://dida365.com/",
		},
		{
			name: "不做手机控",
			image: withIcon(
				"https://apkpure.com/%E4%B8%8D%E5%81%9A%E6%89%8B%E6%9C%BA%E6%8E%A7/no.phone.control",
			),
			specs: "效率",
			platform: "MB",
			description: "专注控制与使用时长管理。",
			link: "https://apkpure.com/%E4%B8%8D%E5%81%9A%E6%89%8B%E6%9C%BA%E6%8E%A7/no.phone.control",
		},
	],
	播放器: [
		{
			name: "OPlayer",
			image: withIcon(
				"https://apps.apple.com/cn/app/oplayer/id344784375",
			),
			specs: "播放器",
			platform: "MB",
			description: "移动端多格式视频播放。",
			link: "https://apps.apple.com/cn/app/oplayer/id344784375",
		},
	],
	活动: [
		{
			name: "互动吧",
			image: withIcon("https://www.hudongba.com/"),
			specs: "活动",
			platform: "MB",
			description: "活动报名与组织。",
			link: "https://www.hudongba.com/",
		},
		{
			name: "活动行",
			image: withIcon("https://www.huodongxing.com/"),
			specs: "活动",
			platform: "MB",
			description: "线下活动检索与报名。",
			link: "https://www.huodongxing.com/",
		},
		{
			name: "哇友聚",
			image: withIcon("https://www.wayouju.com/"),
			specs: "活动",
			platform: "MB",
			description: "社交活动发现与参与。",
			link: "https://www.wayouju.com/",
		},
	],
	公众号助手: [
		{
			name: "公众号助手",
			image: withIcon(
				"https://apps.apple.com/cn/app/%E5%85%AC%E4%BC%97%E5%8F%B7%E5%8A%A9%E6%89%8B/id1143391042",
			),
			specs: "公众号",
			platform: "MB",
			description: "公众号内容发布与管理。",
			link: "https://apps.apple.com/cn/app/%E5%85%AC%E4%BC%97%E5%8F%B7%E5%8A%A9%E6%89%8B/id1143391042",
		},
	],
	清浊: [
		{
			name: "清浊",
			image: withIcon(
				"https://apkpure.com/%E6%B8%85%E6%B5%8A%E5%A2%83/com.dada.qingzhuo",
			),
			specs: "清理工具",
			platform: "MB",
			description: "移动端缓存与垃圾清理。",
			link: "https://apkpure.com/%E6%B8%85%E6%B5%8A%E5%A2%83/com.dada.qingzhuo",
		},
	],
};
