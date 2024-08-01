<script lang="ts">
	import About from '$lib/components/sections/About.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Home from '$lib/components/sections/Home.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Skills from '$lib/components/sections/Skills.svelte';
</script>

<main class="flex w-screen min-h-screen justify-center">
	<Home />
	<About />
	<Skills />
	<Projects />
	<Experience />
	<Contact />
</main>
