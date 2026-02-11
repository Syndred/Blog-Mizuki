// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "javascript",
		name: "JavaScript",
		description:
			"Modern JavaScript development, including ES6+ syntax, asynchronous programming, and modular development.",
		icon: "logos:javascript",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["blog", "chilema", "comparison-text"],
		color: "#F7DF1E",
	},
	{
		id: "typescript",
		name: "TypeScript",
		description:
			"A type-safe superset of JavaScript that enhances code quality and development efficiency.",
		icon: "logos:typescript-icon",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 8 },
		projects: ["blog", "chilema", "comparison-text"],
		color: "#3178C6",
	},
	{
		id: "react",
		name: "React",
		description:
			"A JavaScript library for building user interfaces, including Hooks, Context, and state management.",
		icon: "logos:react",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 6 },
		projects: ["blog", "chilema", "comparison-text"],
		color: "#61DAFB",
	},
	{
		id: "vue",
		name: "Vue.js",
		description:
			"A progressive JavaScript framework that is easy to learn and use, suitable for rapid development.",
		icon: "logos:vue",
		category: "frontend",
		level: "advanced",
		experience: { years: 1, months: 8 },
		projects: ["data-visualization-tool"],
		color: "#4FC08D",
	},
	{
		id: "autojs",
		name: "Auto.js",
		description:
			"An automation scripting framework for Android, enabling rapid development of automation scripts using JavaScript.",
		icon: "logos",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 6 },
		projects: ["school-badminton"],
		color: "#DD0031",
	},
	{
		id: "nextjs",
		name: "Next.js",
		description:
			"A production-level React framework supporting SSR, SSG, and full-stack development.",
		icon: "logos:nextjs-icon",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 6 },
		projects: ["blog", "comparison-text"],
		color: "#616161", // 更改为深灰色，避免纯黑色
	},
	{
		id: "nuxtjs",
		name: "Nuxt.js",
		description:
			"An intuitive Vue.js framework supporting server-side rendering and static site generation.",
		icon: "logos:nuxt-icon",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 6 },
		projects: ["vue-ssr-app"],
		color: "#00DC82",
	},
	// {
	// 	id: "astro",
	// 	name: "Astro",
	// 	description:
	// 		"A modern static site generator supporting multi-framework integration and excellent performance.",
	// 	icon: "logos:astro-icon",
	// 	category: "frontend",
	// 	level: "beginner",
	// 	experience: { years: 0, months: 2 },
	// 	projects: ["mizuki-blog"],
	// 	color: "#FF5D01",
	// },
	{
		id: "tailwindcss",
		name: "Tailwind CSS",
		description:
			"A utility-first CSS framework for rapidly building modern user interfaces.",
		icon: "logos:tailwindcss-icon",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["blog", "chilema", "comparison-text"],
		color: "#06B6D4",
	},
	{
		id: "sass",
		name: "Sass/SCSS",
		description:
			"A CSS preprocessor providing advanced features like variables, nesting, and mixins.",
		icon: "logos:sass",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 3 },
		projects: ["legacy-website", "component-library"],
		color: "#CF649A",
	},
	{
		id: "webpack",
		name: "Webpack",
		description:
			"A static module bundler for modern JavaScript applications.",
		icon: "logos:webpack",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["custom-build-tool", "spa-application"],
		color: "#8DD6F9",
	},
	{
		id: "vite",
		name: "Vite",
		description:
			"Next-generation frontend build tool with fast cold starts and hot updates.",
		icon: "logos:vitejs",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 2 },
		projects: ["vue-project", "react-project"],
		color: "#646CFF",
	},

	// Backend Skills
	{
		id: "nodejs",
		name: "Node.js",
		description:
			"A JavaScript runtime based on Chrome V8 engine, used for server-side development.",
		icon: "logos:nodejs-icon",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		projects: ["data-visualization-tool", "e-commerce-platform"],
		color: "#339933",
	},
	{
		id: "python",
		name: "Python",
		description:
			"A general-purpose programming language suitable for web development, data analysis, machine learning, and more.",
		icon: "logos:python",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		color: "#3776AB",
	},
	{
		id: "java",
		name: "Java",
		description:
			"A mainstream programming language for enterprise application development, cross-platform and object-oriented.",
		icon: "logos:java",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["enterprise-system", "microservices-api"],
		color: "#ED8B00",
	},
	{
		id: "cpp",
		name: "C++",
		description:
			"A high-performance systems programming language widely used in game development, system software, and embedded development.",
		icon: "logos:c-plusplus",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 6 },
		projects: ["game-engine", "system-optimization"],
		color: "#00599C",
	},
	{
		id: "express",
		name: "Express.js",
		description: "A fast, minimalist Node.js web application framework.",
		icon: "simple-icons:express",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["data-visualization-tool"],
		color: "#616161", // 更改为深灰色，避免纯黑色
	},
	{
		id: "spring",
		name: "Spring Boot",
		description:
			"The most popular enterprise application development framework in the Java ecosystem.",
		icon: "logos:spring-icon",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["enterprise-system", "rest-api"],
		color: "#6DB33F",
	},

	// Database Skills
	{
		id: "mysql",
		name: "MySQL",
		description:
			"The world's most popular open-source relational database management system, widely used in web applications.",
		icon: "logos:mysql-icon",
		category: "database",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["e-commerce-platform", "blog-system"],
		color: "#4479A1",
	},
	{
		id: "redis",
		name: "Redis",
		description:
			"A high-performance in-memory data structure store, used as a database, cache, and message broker.",
		icon: "logos:redis",
		category: "database",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["e-commerce-platform", "real-time-chat"],
		color: "#DC382D",
	},

	// Tools
	{
		id: "git",
		name: "Git",
		description:
			"A distributed version control system, an essential tool for code management and team collaboration.",
		icon: "logos:git-icon",
		category: "tools",
		level: "advanced",
		experience: { years: 3, months: 0 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"A lightweight but powerful code editor with a rich plugin ecosystem.",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "expert",
		experience: { years: 3, months: 0 },
		color: "#007ACC",
	},
	{
		id: "intellij",
		name: "IntelliJ IDEA",
		description:
			"JetBrains flagship IDE, the preferred tool for Java development with powerful intelligent coding assistance.",
		icon: "logos:intellij-idea",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 8 },
		projects: ["java-enterprise", "spring-boot-app"],
		color: "#616161", // 更改为深灰色，避免纯黑色
	},
	{
		id: "pycharm",
		name: "PyCharm",
		description:
			"A professional Python IDE by JetBrains providing intelligent code analysis and debugging features.",
		icon: "logos:pycharm",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["python-web-app", "data-analysis"],
		color: "#21D789",
	},
	{
		id: "docker",
		name: "Docker",
		description:
			"A containerization platform that simplifies application deployment and environment management.",
		icon: "logos:docker-icon",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 1 },
		color: "#2496ED",
	},
	{
		id: "nginx",
		name: "Nginx",
		description: "A high-performance web server and reverse proxy server.",
		icon: "logos:nginx",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 1 },
		projects: ["web-server-config", "load-balancer"],
		color: "#009639",
	},
	{
		id: "tomcat",
		name: "Apache Tomcat",
		description:
			"A Java Servlet container and web server, the standard deployment environment for Java web applications.",
		icon: "logos:tomcat",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 1 },
		projects: ["java-web-app", "servlet-container"],
		color: "#F8DC75",
	},
	{
		id: "aws",
		name: "AWS",
		description:
			"Amazon's cloud platform providing comprehensive cloud computing solutions.",
		icon: "logos:aws",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 1 },
		projects: ["cloud-deployment", "serverless-app"],
		color: "#FF9900",
	},
	{
		id: "linux",
		name: "Linux",
		description:
			"An open-source operating system, the preferred choice for server deployment and development environments.",
		icon: "logos:linux-tux",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 2 },
		projects: ["server-management", "shell-scripting"],
		color: "#FCC624",
	},
	{
		id: "postman",
		name: "Postman",
		description:
			"An API development and testing tool that simplifies API design, testing, and documentation.",
		icon: "logos:postman-icon",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 3 },
		projects: ["api-testing", "api-documentation"],
		color: "#FF6C37",
	},
	{
		id: "photoshop",
		name: "Photoshop",
		description: "Professional image editing and design software.",
		icon: "logos:adobe-photoshop",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["ui-design", "image-processing"],
		color: "#31A8FF",
	},

	// Other Skills
	{
		id: "badminton",
		name: "Badminton",
		description:
			"A racquet sport played on a rectangular court with a net dividing it.",
		icon: "logos:badminton",
		category: "other",
		level: "advanced",
		experience: { years: 6, months: 3 },
		color: "#E10098",
	},
	{
		id: "photography",
		name: "Photography",
		description:
			"An art and science of capturing light through a camera lens to create images.",
		icon: "logos:photography",
		category: "other",
		level: "intermediate",
		experience: { years: 3, months: 6 },
		color: "#000000",
	},
];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate")
			.length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
