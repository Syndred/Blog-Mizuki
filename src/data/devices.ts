// 常用软件数据配置文件

export interface Software {
	name: string;
	image?: string;
	specs: string;
	description: string;
	link: string;
}

// 软件分类类型，支持任意分类名称
export type SoftwareCategory = {
	[categoryName: string]: Software[];
} & {
	自定义?: Software[];
};

export const softwareData: SoftwareCategory = {
	开发工具: [
		{
			name: "Visual Studio Code",
			image: "https://cdn.simpleicons.org/visualstudiocode/007ACC",
			specs: "代码编辑器 / 插件生态丰富",
			description: "主力编辑器，轻量、启动快，适合日常开发与远程调试。",
			link: "https://code.visualstudio.com/",
		},
		{
			name: "Cursor",
			image: "https://cdn.simpleicons.org/cursor/000000",
			specs: "AI IDE / 多模型支持",
			description: "用于快速重构、生成样板代码和阅读大型项目代码。",
			link: "https://www.cursor.com/",
		},
		{
			name: "GitHub Desktop",
			image: "https://cdn.simpleicons.org/github/181717",
			specs: "Git 图形化客户端",
			description: "处理常规提交、分支切换与冲突查看，减少命令记忆负担。",
			link: "https://desktop.github.com/",
		},
	],
	效率工具: [
		{
			name: "Notion",
			image: "https://cdn.simpleicons.org/notion/000000",
			specs: "知识管理 / 项目协作",
			description: "整理文档、任务和项目看板，统一管理个人工作流。",
			link: "https://www.notion.so/",
		},
		{
			name: "Obsidian",
			image: "https://cdn.simpleicons.org/obsidian/7C3AED",
			specs: "Markdown 笔记 / 双向链接",
			description: "记录技术笔记与灵感，适合长期沉淀知识库。",
			link: "https://obsidian.md/",
		},
		{
			name: "Raycast",
			image: "https://cdn.simpleicons.org/raycast/FF6363",
			specs: "启动器 / 自动化效率",
			description: "通过快捷命令快速打开应用、搜索内容和执行日常脚本。",
			link: "https://www.raycast.com/",
		},
	],
	网络与沟通: [
		{
			name: "Google Chrome",
			image: "https://cdn.simpleicons.org/googlechrome/4285F4",
			specs: "主力浏览器 / 跨端同步",
			description: "用于前端调试、插件测试与多账号隔离场景。",
			link: "https://www.google.com/chrome/",
		},
		{
			name: "Telegram",
			image: "https://cdn.simpleicons.org/telegram/26A5E4",
			specs: "即时通讯 / 多端在线",
			description: "用于技术频道订阅、协作沟通和文件临时传输。",
			link: "https://telegram.org/",
		},
		{
			name: "Discord",
			image: "https://cdn.simpleicons.org/discord/5865F2",
			specs: "社群沟通 / 语音频道",
			description: "参与开发社区交流，语音讨论和项目协作都很方便。",
			link: "https://discord.com/",
		},
	],
	多媒体: [
		{
			name: "Spotify",
			image: "https://cdn.simpleicons.org/spotify/1DB954",
			specs: "流媒体音乐",
			description: "工作和学习时的常用背景音乐播放器。",
			link: "https://open.spotify.com/",
		},
		{
			name: "VLC",
			image: "https://cdn.simpleicons.org/vlcmediaplayer/FF8800",
			specs: "全格式视频播放器",
			description: "本地视频播放稳定，格式兼容性强，开箱即用。",
			link: "https://www.videolan.org/vlc/",
		},
		{
			name: "Figma",
			image: "https://cdn.simpleicons.org/figma/F24E1E",
			specs: "界面设计 / 原型协作",
			description: "用于简单 UI 设计、标注与和开发协作交付。",
			link: "https://www.figma.com/",
		},
	],
};