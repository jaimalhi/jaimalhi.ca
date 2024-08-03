<script lang="ts">
	const languages = [
		'C++',
		'C',
		'C#',
		'Java',
		'JavaScript/TypeScript',
		'HTML/CSS',
		'Python',
		'Git',
		'SQL',
		'NoSQL'
	];
	const technologies = [
		'NodeJS',
		'Docker',
		'JSON',
		'Linux',
		'Jest',
		'Spring Boot',
		'React',
		'NextJS',
		'SvelteKit',
		'JUnit',
		'GCP',
		'PostgreSQL'
	];
	const developerTools = ['VS-Code', 'Visual Studio', 'IntelliJ', 'GitHub', 'Bash', 'OAuth'];
	const projectManagement = ['AGILE', 'SCRUM', 'CI/CD', 'CRUD', 'REST'];
</script>

<div id="skills" class="w-11/12 lg:w-5/6 flex flex-col justify-center items-center">
	<h1 class="text-5xl font-bold underline underline-offset-4 mb-6 decoration-accent">Skills</h1>
	<ul class="flex">
		{#each languages as lang}
			<li>{lang + ', '}</li>
		{/each}
	</ul>
</div>
