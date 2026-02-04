// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	{
		id: "chilema",
		title: "chilema",
		description:
			"一个使用 TypeScript 开发的项目，展示了现代 Web 开发技能。",
		image: "",
		category: "web",
		techStack: ["TypeScript"],
		status: "in-progress",
		sourceCode: "https://github.com/Syndred/chilema",
		visitUrl: "https://github.com/Syndred/chilema",
		startDate: "2026-02-04",
		featured: true,
		tags: ["TypeScript", "Web开发"],
	},
	{
		id: "7good-meal-uni",
		title: "7good-meal-uni",
		description: "一个使用 CSS 开发的 uni-app 相关项目。",
		image: "",
		category: "mobile",
		techStack: ["CSS", "uni-app"],
		status: "planned",
		sourceCode: "https://github.com/Syndred/7good-meal-uni",
		visitUrl: "https://github.com/Syndred/7good-meal-uni",
		startDate: "2026-02-04",
		tags: ["uni-app", "移动端", "CSS"],
	},
	{
		id: "compare",
		title: "compare",
		description: "一个使用 TypeScript 开发的比较分析工具项目。",
		image: "",
		category: "web",
		techStack: ["TypeScript"],
		status: "in-progress",
		sourceCode: "https://github.com/Syndred/compare",
		visitUrl: "https://github.com/Syndred/compare",
		startDate: "2026-02-04",
		featured: true,
		tags: ["TypeScript", "数据比较", "分析工具"],
	},
	{
		id: "wake",
		title: "Wake",
		description:
			"一个使用 CSS 开发的项目，可能涉及唤醒屏幕或前端界面相关功能。",
		image: "",
		category: "web",
		techStack: ["CSS"],
		status: "planned",
		sourceCode: "https://github.com/Syndred/Wake",
		visitUrl: "https://github.com/Syndred/Wake",
		startDate: "2026-02-04",
		tags: ["CSS", "前端", "界面"],
	},
	{
		id: "unidemo",
		title: "uniDemo",
		description: "一个使用 CSS 开发的 uni-app 演示项目。",
		image: "",
		category: "mobile",
		techStack: ["CSS", "uni-app"],
		status: "planned",
		sourceCode: "https://github.com/Syndred/uniDemo",
		visitUrl: "https://github.com/Syndred/uniDemo",
		startDate: "2026-02-04",
		tags: ["CSS", "uni-app", "演示"],
	},
	{
		id: "autojs",
		title: "autojs",
		description: "JavaScript 自动化脚本项目，展示了自动化编程技能。",
		image: "",
		category: "mobile",
		techStack: ["JavaScript"],
		status: "planned",
		sourceCode: "https://github.com/Syndred/autojs",
		visitUrl: "https://github.com/Syndred/autojs",
		startDate: "2026-02-04",
		tags: ["自动化", "JavaScript", "脚本"],
	},
	{
		id: "todo-calendar",
		title: "todo-calendar",
		description:
			"一个结合待办事项和日历功能的应用程序，使用 TypeScript 构建。",
		image: "",
		category: "web",
		techStack: ["TypeScript"],
		status: "planned",
		sourceCode: "https://github.com/Syndred/todo-calendar",
		visitUrl: "https://github.com/Syndred/todo-calendar",
		startDate: "2026-02-04",
		tags: ["待办事项", "日历", "TypeScript"],
	},
	{
		id: "react-study-todolist",
		title: "reactStudy_todoList",
		description: "React 学习项目，实现了一个功能完整的待办事项列表应用。",
		image: "",
		category: "web",
		techStack: ["TypeScript", "React"],
		status: "planned",
		sourceCode: "https://github.com/Syndred/reactStudy_todoList",
		visitUrl: "https://github.com/Syndred/reactStudy_todoList",
		startDate: "2026-02-04",
		tags: ["React", "学习", "待办事项"],
	},
	{
		id: "project",
		title: "Project",
		description: "Vue 项目，展示了前端框架开发技能。",
		image: "",
		category: "web",
		techStack: ["Vue"],
		status: "planned",
		sourceCode: "https://github.com/Syndred/Project",
		visitUrl: "https://github.com/Syndred/Project",
		startDate: "2026-02-04",
		tags: ["Vue", "前端", "项目"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
