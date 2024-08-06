<script lang="ts">
	import { links } from '$lib/utils/links.js';
</script>

<footer
	id="contact"
	class="flex bg-neutral text-neutral-content items-center justify-center md:justify-between p-4"
>
	<aside class="hidden md:flex">
		<a href="/" class="text-xl"><span class="font-bold">J</span><span>M.</span></a>
	</aside>
	<div class="hidden md:flex ml-[105px]">
		<a href="#home" class="font-semibold hover:text-white">&#8593; Back to Top &#8593;</a>
	</div>
	<nav class="flex gap-12 md:gap-6 invert">
		<a href={links.github}>
			<img src="/icons/github.png" alt="github icon" width="24" height="24" />
		</a>
		<a href={links.linkedin}>
			<img src="/icons/linkedin.png" alt="linkedin icon" width="24" height="24" />
		</a>
		<a href={`mailto:${links.email}`}>
			<img src="/icons/email.png" alt="mail icon" width="24" height="24" />
		</a>
	</nav>
</footer>
