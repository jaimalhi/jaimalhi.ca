export const links = {
	linkedin: 'https://www.linkedin.com/in/jaimalhi/',
	github: 'https://github.com/jaimalhi',
	email: 'jai_malhi@sfu.ca',
	resume: 'https://drive.google.com/file/d/1dOH4V2VdlhyOs2m1sas2hBjnLN24EKR4/view?usp=drive_link',
	portfolio: 'https://www.jaimalhi.ca/'
};

export const devicons = {
	svelte: 'devicon-svelte-plain colored',
	react: 'devicon-react-original colored',
	angular: 'devicon-angularjs-plain colored',
	typescript: 'devicon-typescript-plain colored',
	javascript: 'devicon-javascript-plain colored',
	c: 'devicon-c-plain colored',
	cpp: 'devicon-cplusplus-plain colored',
	python: 'devicon-python-plain colored',
	java: 'devicon-java-plain colored',
	html: 'devicon-html5-plain colored',
	css: 'devicon-css3-plain colored',
	supabase: 'devicon-supabase-plain colored',
	firebase: 'devicon-firebase-plain colored',
	expressjs: 'devicon-express-original',
	nodejs: 'devicon-nodejs-plain colored',
	spring: 'devicon-spring-original colored',
	mongodb: 'devicon-mongodb-plain colored',
	postgresql: 'devicon-postgresql-plain colored',
	sqlite: 'devicon-sqlite-plain',
	mysql: 'devicon-mysql-original colored',
	tailwind: 'devicon-tailwindcss-original colored',
	bootstrap: 'devicon-bootstrap-plain colored',
	go: 'devicon-go-original-wordmark colored',
	discordjs: 'devicon-discordjs-plain',
	error: 'Oops! Icon not found'
};

export type DeviconKey = keyof typeof devicons;

export const skillDisplayNames: { [key: string]: string } = {
	typescript: 'TypeScript',
	javascript: 'JavaScript',
	c: 'C',
	cpp: 'C++',
	python: 'Python',
	java: 'Java',
	html: 'HTML',
	css: 'CSS',
	svelte: 'Svelte',
	react: 'React',
	angular: 'Angular',
	expressjs: 'ExpressJS',
	nodejs: 'Node.js',
	spring: 'Spring',
	supabase: 'Supabase',
	firebase: 'Firebase',
	mongodb: 'MongoDB',
	postgresql: 'PostgreSQL',
	sqlite: 'SQLite',
	mysql: 'MySQL',
	tailwind: 'Tailwind CSS',
	bootstrap: 'Bootstrap',
	go: 'GoLang',
	discordjs: 'Discord.js'
};
