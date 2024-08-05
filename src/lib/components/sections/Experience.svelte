<script lang="ts">
	import ExperienceBlock from '$lib/utils/ExperienceBlock.svelte';
</script>

<div id="experience" class="w-11/12 lg:w-5/6 flex flex-col justify-center items-center">
	<h1 class="text-5xl font-bold underline underline-offset-4 mb-6 decoration-accent">Experience</h1>
	<ul class="timeline timeline-snap-icon timeline-compact timeline-vertical">
		<ExperienceBlock
			src="/logos/blueprint-logo.png"
			alt="Blueprint Logo"
			duration="SEPT 2023 - PRESENT"
			title="Project Developer | SFU Blueprint"
			description={[
				'Developed responsive web applications utilizing React and NextJS.',
				'Led front-end development efforts, ensuring high-quality user experiences and seamless interactions.',
				'Conducted thoroughcode reviews, enhancing code quality and performance, and collaborated through Agile sprintsusing GitHub'
			]}
		/>
		<ExperienceBlock
			src="/logos/zebrarobotics-logo.png"
			alt="Zebra Robotics Logo"
			duration="AUG 2023 - SEPT 2024"
			title="Coding & Robotics Instructor | Zebra Robotics"
			description={[
				'Responsible for instructing children ages 6-17 about programming and providing guidance as required.',
				'Teaching HTML/CSS, JavaScript, and Python ranging from beginner to advanced levels.',
				'Training incoming instructors in company software & teaching etiquette.',
				'Assisting with admin responsibilities including management & local school engagement.'
			]}
		/>
		<ExperienceBlock
			src="/logos/caminosoft-logo.png"
			alt="CaminoSoft Logo"
			duration="JAN 2022 - AUG 2022"
			title="Software Developer Intern | CaminoSoft"
			description={[
				'Developed Data Science applications in Python using libraries like Pandas and NumPy.',
				'Improved data parser (csv inputs) runtime by ~20% by utilizing the Pandas library’s chunking capabilities while maintaining low memory usage.',
				'Assisted in maintaining code style and efficiency of programs by refactoring code.',
				'Designed infrastructure automation process to deploy updates on client machines using Ansible and YAML.'
			]}
		/>
	</ul>
</div>
