<!-- IMAGES MUST BE 500px x 500px -->
<script lang="ts">
	export let src = '/projects/no-image.png';
	export let alt = 'Image Not Available';
	export let href = '/';

	$: {
		if (src === '' || src === undefined || src === null) {
			src = '/projects/no-image.png';
		}
	}
</script>

<a {href} class="text-center hover:text-accent">
	<img
		{src}
		alt={alt + ' Project'}
		class="rounded-lg shadow-lg shadow-white/50 hover:shadow-accent/50 mb-2"
	/>
	<p class="font-semibold text-lg">{alt}</p>
</a>
