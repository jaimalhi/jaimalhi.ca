<script lang="ts">
	import { devicons, type DeviconKey } from '$lib/utils/links.ts';

	const skills: DeviconKey[] = [
		'typescript',
		// 'javascript',
		'c',
		'cpp',
		'python',
		'java',
		'html',
		'css',
		'svelte',
		'react',
		// 'angular',
		// 'expressjs',
		'nodejs',
		'spring',
		// 'supabase',
		// 'firebase',
		'mongodb',
		'postgresql',
		'tailwind'
		// 'bootstrap'
	];

	const skillDisplayNames: { [key: string]: string } = {
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
		tailwind: 'Tailwind CSS',
		bootstrap: 'Bootstrap'
	};

	function getDisplayName(skill: string): string {
		return skillDisplayNames[skill];
	}
</script>

<div id="skills" class="w-11/12 lg:w-5/6 flex flex-col justify-center items-center">
	<h1 class="text-5xl font-bold underline underline-offset-4 mb-6 decoration-accent">Skills</h1>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
		{#each skills as skill}
			<div
				class="inline-flex flex-col items-center justify-center text-center rounded-lg py-2 px-10 shadow-lg shadow-white/5 hover:shadow-accent/50"
			>
				<i class={`${devicons[skill]} text-8xl`} title={getDisplayName(skill)}></i>
				<p class="mt-2">{getDisplayName(skill)}</p>
			</div>
		{/each}
	</div>
</div>
