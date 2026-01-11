<script lang="ts">
	import { global } from './constants/images.ts';

	export let src: string = global.no_image;
	export let companyLinkedIn: string = '';
	export let alt: string = 'Experience Image';
	export let duration: string = 'MONTH YEAR - PRESENT';
	export let title: string = 'Title | Company';
	export let description: string[] = ['Description 1', 'Description 2', 'Description 3'];
</script>

<li>
	<hr class="bg-primary" />
	<div class="timeline-middle">
		<a href={companyLinkedIn} target="_blank" rel="noopener noreferrer">
			<img {src} {alt} width="48" height="48" class="rounded-md" />
		</a>
	</div>
	<div class="timeline-end mb-10 ml-4">
		<time class="font-mono italic">{duration}</time>
		<div class="text-lg font-black">{title}</div>
		<ul class="list-disc ml-6">
			{#each description as desc}
				<li>{desc}</li>
			{/each}
		</ul>
	</div>
	<hr class="bg-primary" />
</li>
