<script lang="ts">
	import ExperienceBlock from '$lib/utils/ExperienceBlock.svelte';
</script>

<br id="experience" />
<div id="experience" class="w-11/12 lg:w-5/6 flex flex-col justify-center items-center">
	<h1 class="text-5xl font-bold underline underline-offset-4 mb-6 decoration-accent">Experience</h1>
	<ul class="timeline timeline-snap-icon timeline-compact timeline-vertical">
		<ExperienceBlock
			src="/logos/sfuaxisconsulting.png"
			companyLinkedIn="https://www.linkedin.com/company/sfuaxisconsulting/"
			alt="SFU Axis Consulting Logo"
			duration="MAY 2025 - PRESENT"
			title="Director of Web Development | Axis Consulting"
			description={[
				'Directed development and maintenance of organizational applications, improving reliability and user engagement.',
				'Managed full project lifecycle including planning, development, and deployment using Agile methodologies.',
				'Mentored and supported junior developers, established coding standards, and conducted peer code reviews to ensure maintainable and scalable codebases.',
				'Utilized technologies including React, Tailwind CSS, JavaScript, and Git-based version control.'
			]}
		/>
		<ExperienceBlock
			src="/logos/blueprint-logo.png"
			companyLinkedIn="https://www.linkedin.com/company/sfu-blueprint/"
			alt="Blueprint Logo"
			duration="SEPT 2023 - SEPT 2025"
			title="Project Developer | SFU Blueprint"
			description={[
				'Developed responsive web applications utilizing React and NextJS.',
				'Led front-end development efforts, ensuring high-quality user experiences and seamless interactions.',
				'Conducted thorough code reviews, enhancing code quality and performance, and collaborated through Agile sprints using GitHub.'
			]}
		/>
		<ExperienceBlock
			src="/logos/fispan-logo.png"
			companyLinkedIn="https://www.linkedin.com/company/fispan/"
			alt="FISPAN Logo"
			duration="SEPT 2024 - APRIL 2025"
			title="Software Engineer Coop | FISPAN"
			description={[
				'Developed and implemented dynamic front-end web applications using React and Svelte, enhancing user experience.',
				'Enhanced the automated testing suite, improving code quality and reduced time spent on manual testing.',
				'Collaborated in design reviews, providing detailed technical feedback and delivering accurate time estimates for assigned development tasks.'
			]}
		/>
		<ExperienceBlock
			src="/logos/zebrarobotics-logo.png"
			companyLinkedIn="https://www.linkedin.com/company/zebra-robotics-inc./"
			alt="Zebra Robotics Logo"
			duration="AUG 2023 - AUG 2024"
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
			companyLinkedIn="https://www.linkedin.com/company/caminosoft-corporation/posts/"
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
