<script lang="ts">
	import ProjectBlock from '$lib/utils/ProjectBlock.svelte';
</script>

<br id="projects" />
<div id="projects" class="w-11/12 lg:w-5/6 flex flex-col justify-center items-center">
	<h1 class="text-5xl font-bold underline underline-offset-4 mb-6 decoration-accent">Projects</h1>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
		<ProjectBlock
			src="/projects/avio-tutor.png"
			alt="Avio Tutor"
			href="https://aviotutor.com/"
			utilizes={['svelte', 'tailwind', 'supabase', 'typescript']}
		/>
		<ProjectBlock
			src="/projects/incident-report.png"
			alt="Incident Reporter"
			href="https://github.com/jaimalhi/Incident-Reporter"
			utilizes={['angular', 'bootstrap', 'mongodb', 'typescript']}
		/>
		<ProjectBlock
			src="/projects/trade-trove.png"
			alt="Trade Trove"
			href="https://github.com/jaimalhi/TradeTrove"
			utilizes={['react', 'tailwind', 'expressjs', 'javascript', 'postgresql', 'firebase']}
		/>
		<ProjectBlock
			src="/projects/replicake.png"
			alt="Replicake"
			href="https://github.com/HPhilipN/C276-Project"
			utilizes={['react', 'bootstrap', 'spring', 'java', 'postgresql', 'javascript']}
		/>
	</div>
</div>
