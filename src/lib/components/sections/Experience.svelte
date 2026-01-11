<script lang="ts">
	import ExperienceBlock from '$lib/utils/ExperienceBlock.svelte';
	import {
		axis_consulting,
		blueprint,
		fispan,
		zebra_robotics,
		camino_soft
	} from '$lib/utils/constants/experiences.ts';
</script>

<br id="experience" />
<div id="experience" class="w-11/12 lg:w-5/6 flex flex-col justify-center items-center">
	<h1 class="text-5xl font-bold underline underline-offset-4 mb-6 decoration-accent">Experience</h1>
	<ul class="timeline timeline-snap-icon timeline-compact timeline-vertical">
		<ExperienceBlock
			src={axis_consulting.src}
			companyLinkedIn={axis_consulting.companyLinkedIn}
			alt={axis_consulting.srcAlt}
			duration={axis_consulting.duration}
			title={axis_consulting.title}
			description={axis_consulting.description}
		/>
		<ExperienceBlock
			src={blueprint.src}
			companyLinkedIn={blueprint.companyLinkedIn}
			alt={blueprint.srcAlt}
			duration={blueprint.duration}
			title={blueprint.title}
			description={blueprint.description}
		/>
		<ExperienceBlock
			src={fispan.src}
			companyLinkedIn={fispan.companyLinkedIn}
			alt={fispan.srcAlt}
			duration={fispan.duration}
			title={fispan.title}
			description={fispan.description}
		/>
		<ExperienceBlock
			src={zebra_robotics.src}
			companyLinkedIn={zebra_robotics.companyLinkedIn}
			alt={zebra_robotics.srcAlt}
			duration={zebra_robotics.duration}
			title={zebra_robotics.title}
			description={zebra_robotics.description}
		/>
		<ExperienceBlock
			src={camino_soft.src}
			companyLinkedIn={camino_soft.companyLinkedIn}
			alt={camino_soft.srcAlt}
			duration={camino_soft.duration}
			title={camino_soft.title}
			description={camino_soft.description}
		/>
	</ul>
</div>
