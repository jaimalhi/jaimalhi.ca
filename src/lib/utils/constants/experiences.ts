import { logos } from './images.ts';

interface Experience {
	src: string;
	srcAlt: string;
	companyLinkedIn: string;
	duration: string;
	title: string;
	description: string[];
}

export const axis_consulting: Experience = {
	src: logos.sfu_axis_consulting,
	srcAlt: 'SFU Axis Consulting Logo',
	companyLinkedIn: 'https://www.linkedin.com/company/sfuaxisconsulting/',
	duration: 'MAY 2025 - PRESENT',
	title: 'Director of Web Development | Axis Consulting',
	description: [
		'Rebuilding the Axis Consulting website with a cleaner UX and modern developer workflows, improving load times and increasing visitor engagement.',
		'Implemented CDN image delivery and caching, significantly enhancing site performance and scalability under high-traffic conditions and changing internet connections.',
		'Established developer guidelines and feature flag framework, enabling other admins to easily add and toggle features, reducing update turnaround time from weeks to days.'
	]
};

export const blueprint: Experience = {
	src: logos.blueprint,
	srcAlt: 'Blueprint Logo',
	companyLinkedIn: 'https://www.linkedin.com/company/sfu-blueprint/',
	duration: 'SEPT 2023 - SEPT 2025',
	title: 'Project Developer | SFU Blueprint',
	description: [
		'Developed responsive web applications utilizing React and NextJS.',
		'Led front-end development efforts, ensuring high-quality user experiences and seamless interactions.',
		'Conducted thorough code reviews, enhancing code quality and performance, and collaborated through Agile sprints using GitHub.'
	]
};

export const fispan: Experience = {
	src: logos.fispan,
	srcAlt: 'FISPAN Logo',
	companyLinkedIn: 'https://www.linkedin.com/company/fispan/',
	duration: 'SEPT 2024 - APRIL 2025',
	title: 'Software Engineer Co-op | FISPAN',
	description: [
		'Built a multi-tenant dashboard (React, TypeScript, Playwright), used daily by 5,000+ users, improving onboarding experience and data accessibility through improved UI workflows.',
		'Modernized ERP-embedded applications (React + Svelte), cutting bugs through test driven development and enabling faster adoption of new financial service features.',
		'Collaborated in design reviews, providing detailed technical feedback and delivering accurate time estimates for assigned development tasks.'
	]
};

export const zebra_robotics: Experience = {
	src: logos.zebra_robotics,
	srcAlt: 'Zebra Robotics Logo',
	companyLinkedIn: 'https://www.linkedin.com/company/zebra-robotics-inc./',
	duration: 'AUG 2023 - AUG 2024',
	title: 'Coding & Robotics Instructor | Zebra Robotics',
	description: [
		'Responsible for instructing children ages 6-17 about programming and providing guidance as required.',
		'Teaching HTML/CSS, JavaScript, and Python ranging from beginner to advanced levels.',
		'Training incoming instructors in company software & teaching etiquette.',
		'Assisting with admin responsibilities including management & local school engagement.'
	]
};

export const camino_soft: Experience = {
	src: logos.camino_soft,
	srcAlt: 'CaminoSoft Logo',
	companyLinkedIn: 'https://www.linkedin.com/company/caminosoft-corporation',
	duration: 'JAN 2022 - AUG 2022',
	title: 'Software Developer Intern | CaminoSoft',
	description: [
		'Developed Data Science applications in Python using libraries like Pandas and NumPy.',
		"Improved data parser (csv inputs) runtime by ~20% by utilizing the Pandas library's chunking capabilities while maintaining low memory usage.",
		'Assisted in maintaining code style and efficiency of programs by refactoring code.',
		'Designed infrastructure automation process to deploy updates on client machines using Ansible and YAML.'
	]
};
