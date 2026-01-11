<!-- IMAGES MUST BE 500px x 500px -->
<script lang="ts">
	import { devicons, type DeviconKey } from '$lib/utils/constants/links.ts';
	import { global } from './constants/images.ts';

	export let src: string = global.no_image;
	export let alt: string = 'Image Not Available';
	export let href: string = '/';
	export let utilizes: DeviconKey[] = ['error'];
</script>

<a {href} class="group text-center block">
	<div class="relative">
		<img
			{src}
			alt={alt + ' Project'}
			class="rounded-lg mb-2 shadow-lg group-hover:shadow-accent/50"
		/>
		<!-- Hover Overlay -->
		<div
			class="absolute grid grid-cols-3 items-center justify-center inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
		>
			{#each utilizes as tool}
				<i class={`${devicons[tool]} text-5xl lg:text-4xl`} title={tool}></i>
			{/each}
		</div>
	</div>

	<!-- Image Title -->
	<p class="font-semibold text-lg group-hover:text-accent">{alt}</p>
</a>
