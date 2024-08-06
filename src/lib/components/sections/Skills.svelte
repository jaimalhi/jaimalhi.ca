<script lang="ts">
	import { devicons, type DeviconKey } from '$lib/utils/links.ts';
	import { onMount } from 'svelte';

	const skills: DeviconKey[] = [
		'typescript',
		'c',
		'cpp',
		'python',
		'java',
		'svelte',
		'react',
		'angular',
		// 'expressjs',
		'nodejs',
		'spring',
		// 'supabase',
		// 'firebase',
		'mongodb',
		'postgresql',
		'tailwind',
		'javascript',
		// 'bootstrap'
		'html',
		'css'
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

	// Display 12 skills on mobile, 15 on desktop, and all on medium screens
	let displayedSkills: DeviconKey[] = skills;

	function updateDisplayedSkills() {
		const width = window.innerWidth;
		if (width <= 768) {
			displayedSkills = skills.slice(0, 12);
		} else if (width > 1024) {
			displayedSkills = skills.slice(0, 15);
		} else {
			displayedSkills = skills;
		}
	}

	onMount(() => {
		updateDisplayedSkills();
		window.addEventListener('resize', updateDisplayedSkills);
		return () => window.removeEventListener('resize', updateDisplayedSkills);
	});
</script>

<br id="skills" />
<div id="skills" class="w-11/12 lg:w-5/6 flex flex-col justify-center items-center">
	<h1 class="text-5xl font-bold underline underline-offset-4 mb-6 decoration-accent">Skills</h1>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
		{#each displayedSkills as skill}
			<div
				class="inline-flex flex-col items-center justify-center text-center rounded-lg py-2 px-10 shadow-lg shadow-white/5 hover:shadow-accent/50"
			>
				<i class={`${devicons[skill]} text-8xl`} title={getDisplayName(skill)}></i>
				<p class="mt-2">{getDisplayName(skill)}</p>
			</div>
		{/each}
	</div>
</div>
