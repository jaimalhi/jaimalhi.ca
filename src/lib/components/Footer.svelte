<script lang="ts">
	import { links } from '$lib/utils/links.js';
</script>

<!-- <footer
	id="contact"
	class="flex bg-neutral text-neutral-content items-center justify-center md:justify-between p-6"
>
	<aside class="hidden md:flex">
		<a href="/" class="text-2xl"><span class="font-bold">J</span><span>M.</span></a>
	</aside>
	<div class="hidden md:flex ml-[105px]">
		<a href="#home" class="font-semibold hover:text-white">&#8593; Back to Top &#8593;</a>
	</div>
	<nav class="flex gap-12 md:gap-6 invert">
		<a href={links.github}>
			<img src="/icons/github.webp" alt="github icon" width="32" height="32" />
		</a>
		<a href={links.linkedin}>
			<img src="/icons/linkedin.webp" alt="linkedin icon" width="32" height="32" />
		</a>
		<a href={`mailto:${links.email}`}>
			<img src="/icons/email.webp" alt="mail icon" width="32" height="32" />
		</a>
	</nav>
</footer> -->

<footer
	id="contact"
	class="footer bg-neutral text-neutral-content p-10 justify-between items-center"
>
	<aside>
		<a href="/" class="text-2xl"><span class="font-bold">J</span><span>M.</span></a>
		<a href={`mailto:${links.email}`} class="hover:text-white">jai_malhi@sfu.ca</a>
	</aside>
	<div class="hidden md:flex">
		<a href="#home" class="text-base font-semibold hover:text-white">&#8593; Back to Top &#8593;</a>
	</div>
	<nav>
		<h6 class="footer-title">Contact</h6>
		<div class="grid grid-flow-col gap-4 invert">
			<a href={links.github} class="hover:invert-0">
				<img src="/icons/github.webp" alt="github icon" width="32" height="32" />
			</a>
			<a href={links.linkedin}>
				<img src="/icons/linkedin.webp" alt="linkedin icon" width="32" height="32" />
			</a>
			<a href={links.resume}>
				<img src="/icons/resume.webp" alt="mail icon" width="32" height="32" />
			</a>
		</div>
	</nav>
	<div class="absolute bottom-50 right-20 flex md:hidden">
		<a href="#home" class="text-4xl font-semibold hover:text-white">&#8593;</a>
	</div>
</footer>
