<script lang="ts">
	import Home from '$lib/components/sections/Home.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Skills from '$lib/components/sections/Skills.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
</script>

<main class="w-screen flex flex-col justify-center items-center space-y-[8rem]">
	<Home />
	<About />
	<!-- <Skills /> -->
	<Projects />
	<Experience />
	<br /><br /><br />
</main>
