<script lang="ts">
	import 'tailwindcss/tailwind.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Jai Malhi</title>
	<meta name="description" content="Software Developer" />
	<link rel="canonical" href="https://www.jaimalhi.ca" />
	<meta name="author" content="Jai Malhi" />
	<!-- Open Graph metadata -->
	<meta property="og:title" content="Jai Malhi - Software Developer" />
	<meta property="og:description" content="Software Developer" />
	<meta property="og:url" content="https://www.jaimalhi.ca" />
	<meta property="og:site_name" content="Jai Malhi" />
	<meta property="og:type" content="website" />
	<meta name="robots" content="index, follow" />
	<link
		rel="stylesheet"
		type="text/css"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
	/>
</svelte:head>

<Navbar />
<slot />
<Footer />

<style>
	:global(html) {
		overflow-x: hidden;
	}
</style>
