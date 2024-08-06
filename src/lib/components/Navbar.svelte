<nav class="navbar z-10 fixed bg-base-100 text-neutral-content">
	<div class="navbar-start ml-2">
		<a href="/" class="flex justify-end">
			<h1 class="text-3xl">
				<span class="font-bold">J</span><span>M.</span>
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
				class="menu menu-sm dropdown-content mt-3 z-[11] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-base"
				id="nav-dropdown"
			>
				<li><a href="#about" tabindex="0">About</a></li>
				<li><a href="#skills" tabindex="0">Skills</a></li>
				<li><a href="#projects" tabindex="0">Projects</a></li>
				<li><a href="#experience" tabindex="0">Experience</a></li>
				<li><a href="#contact" tabindex="0">Contact</a></li>
			</ul>
		</div>
		<div class="hidden lg:flex">
			<ul class="menu menu-horizontal px-1 font-semibold space-x-2 text-base">
				<li><a href="#about" tabindex="0">About</a></li>
				<li><a href="#skills" tabindex="0">Skills</a></li>
				<li><a href="#projects" tabindex="0">Projects</a></li>
				<li><a href="#experience" tabindex="0">Experience</a></li>
				<li><a href="#contact" tabindex="0">Contact</a></li>
			</ul>
		</div>
	</div>
</nav>

<style>
	/* Handle touch events explicitly */
	#nav-dropdown li a {
		touch-action: manipulation;
	}
</style>
