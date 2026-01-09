<script lang="ts">
	import { links } from '$lib/utils/links.js';
</script>

<br id="about" />
<div id="about" class="w-11/12 lg:w-5/6 flex flex-col justify-center items-center">
	<h1 class="text-5xl font-bold underline underline-offset-4 mb-6 decoration-accent">About</h1>
	<div class="grid md:grid-cols-2 gap-4 max-w-5xl">
		<a href={links.linkedin}>
			<img
				src="/jai-temp.webp"
				alt="Jai Malhi"
				class="rounded-lg w-full shadow-lg hover:shadow-accent/50"
			/>
		</a>
		<div class="font-semibold text-lg">
			<p>
				I'm a full-stack developer passionate about inspiring change and innovation. As a Software
				Systems student at Simon Fraser University, I strive to merge my academic pursuits with my
				passion for technology.
			</p>
			<br />
			<p>
				My love for all things technology can be seen in my academic endeavors, personal projects,
				and work for different organizations. I focus on using my skills to positively impact all
				aspects of life.
			</p>
			<br />
			<p>
				When I'm not engaged in my academic or professional work, you can often find me exploring
				the outdoors, trying different cuisines, playing hockey, or jamming to some music. I am
				always open to new ventures and love getting hands-on experience!
			</p>
		</div>
	</div>
</div>
