<script lang="ts">
	import TypingEffect from '$lib/utils/TypingEffect.svelte';
	import { links } from '$lib/utils/links.js';
</script>

<div id="home" class="w-11/12 lg:w-4/6 min-h-screen flex flex-col justify-center items-start">
	<p class="text-5xl md:text-7xl font-bold mb-4 md:mb-6 w-full">
		Hi <span class="rotating-element">👋</span>, I'm Jai Malhi <TypingEffect />
	</p>
	<p class="text-base md:text-lg font-semibold w-9/12 mb-6">
		Currently a senior at Simon Fraser University, pursuing a Bachelor's degree in Computer Science
		as a Software Systems major and with a minor in Business Administration. Above all, I'm an avid
		learner and thrive in environments where I can grow my knowledge and skillset while best
		supporting a team.
	</p>
	<a class="btn btn-primary rounded-md text-lg" href={links.resume}>View Resume &#10142;</a>
</div>

<style>
	@keyframes rotateBackAndForth {
		0%,
		100% {
			transform: rotate(0deg);
		}
		20% {
			transform: rotate(10deg);
		}
		40% {
			transform: rotate(-5deg);
		}
		60% {
			transform: rotate(10deg);
		}
		80% {
			transform: rotate(-5deg);
		}
	}

	.rotating-element {
		display: inline-block;
		animation: rotateBackAndForth 4s ease-in-out infinite;
		transform-origin: bottom right;
	}
</style>
