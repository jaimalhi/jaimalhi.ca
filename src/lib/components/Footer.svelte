<script lang="ts">
	import { icons } from '$lib/utils/constants/images.ts';
	import { links } from '$lib/utils/constants/links.ts';
</script>

<footer
	id="contact"
	class="footer bg-neutral text-neutral-content p-10 justify-between items-center"
>
	<aside>
		<a href="/" class="text-2xl"><span class="font-bold">J</span><span>M.</span></a>
		<a href={`mailto:${links.email}`} class="hover:text-white">{links.email}</a>
	</aside>
	<div class="hidden md:flex">
		<a href="#home" class="text-base font-semibold hover:text-white">&#8593; Back to Top &#8593;</a>
	</div>
	<nav>
		<h6 class="footer-title">Contact</h6>
		<div class="grid grid-flow-col gap-4 invert">
			<a href={links.github} class="hover:invert-0">
				<img src={icons.github} alt="github icon" width="32" height="32" />
			</a>
			<a href={links.linkedin}>
				<img src={icons.linkedin} alt="linkedin icon" width="32" height="32" />
			</a>
			<a href={links.resume}>
				<img src={icons.resume} alt="mail icon" width="32" height="32" />
			</a>
		</div>
	</nav>
	<div class="absolute bottom-50 right-20 flex md:hidden">
		<a href="#home" class="text-4xl font-semibold hover:text-white">&#8593;</a>
	</div>
</footer>
