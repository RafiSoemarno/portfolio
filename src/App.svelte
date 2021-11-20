<script lang="ts">
	import Skill from './component/Skill.svelte';
	import skills from './data/skills.json';
</script>

<main class="bg-primary text-gray-300 py-16">
	<div class="flex flex-row justify-center gap-12">
		<div class="flex flex-col gap-5">
			<img src="https://via.placeholder.com/500x700" alt="" />
			<p class="text-center">Likes cats. Enjoys learning about new development tools that make life easier.</p>
			<hr>
			<h2 class="text-3xl text-center">Portfolio</h2>
			<div class="grid grid-cols-2 gap-5">

			</div>
		</div>
		<div class="flex flex-col gap-5">
			<h1 class="text-4xl">Bismani Rafi Lusadi Soemarno</h1>
			<hr>
			<div class="flex items-center gap-2 text-2xl">
				<span class="material-icons-round">work</span>
				<span>Student at Binus International</span>
			</div>
			<div class="flex items-center gap-2 text-2xl">
				<span class="material-icons-round">biotech</span>
				<span>Business Information Systems</span>
			</div>
			<div class="flex items-center gap-2 text-2xl">
				<span class="material-icons-round">location_on</span>
				<span>Bogor, Indonesia</span>
			</div>
			<div class="flex items-center gap-2 text-2xl">
				<span class="material-icons-round">language</span>
				<span>English & Bahasa Indonesia</span>
			</div>
			<hr>
			<h2 class="text-3xl text-center">Skills</h2>
			<div class="grid grid-cols-2 gap-5">
				{#each skills as skill}
					<Skill icon={skill.icon} name={skill.name} level={skill.level}/>
				{/each}
			</div>
			<hr>
			<h2 class="text-3xl text-center">Achievements</h2>
			<div class="grid grid-cols-2 gap-5">

			</div>
		</div>
	</div>
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
