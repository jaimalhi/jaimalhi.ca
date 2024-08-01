<script lang="ts">
	import { links } from '$lib/utils/links.js';
</script>

<div class="navbar z-10">
	<div class="navbar-start">
		<a href="#home" class="flex justify-end">
			<h1 class="text-3xl">
				<span>Jai</span><span class="font-bold">Malhi</span>
			</h1>
		</a>
	</div>
	<div class="navbar-end">
		<div class="dropdown dropdown-left">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
			<ul
				class="menu menu-sm dropdown-content mt-3 z-[11] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
				id="nav-dropdown"
			>
				<li><a href="#home" tabindex="0">Home</a></li>
				<li><a href="#about" tabindex="0">About</a></li>
				<li><a href="#skills" tabindex="0">Skills</a></li>
				<li><a href="#projects" tabindex="0">Projects</a></li>
				<li><a href="#experience" tabindex="0">Experience</a></li>
				<li><a href="#contact" tabindex="0">Contact</a></li>
			</ul>
			<div class="hidden lg:flex">
				<ul class="menu menu-horizontal px-1 font-semibold space-x-2">
					<li><a href="#home" tabindex="0">Home</a></li>
					<li><a href="#about" tabindex="0">About</a></li>
					<li><a href="#skills" tabindex="0">Skills</a></li>
					<li><a href="#projects" tabindex="0">Projects</a></li>
					<li><a href="#experience" tabindex="0">Experience</a></li>
					<li><a href="#contact" tabindex="0">Contact</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	/* Handle touch events explicitly */
	#nav-dropdown li a {
		touch-action: manipulation;
	}
</style>
