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
				'Rebuilding the Axis Consulting website with a cleaner UX and modern developer workflows, improving load times and increasing visitor engagement.',
				'Implemented CDN image delivery and caching, significantly enhancing site performance and scalability under high-traffic conditions and changing internet connections.',
				'Established developer guidelines and feature flag framework, enabling other admins to easily add and toggle features, reducing update turnaround time from weeks to days.'
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
				'Built a multi-tenant dashboard (React, TypeScript, Playwright), used daily by 5,000+ users, improving onboarding experience and data accessibility through improved UI workflows.',
				'Modernized ERP-embedded applications (React + Svelte), cutting bugs through test driven development and enabling faster adoption of new financial service features.',
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
