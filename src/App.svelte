<script>
	import Skill from './component/Skill.svelte';
	const skillList = require('./skills.json');

	//let skills = JSON.parse(skillList);
</script>

<main class="bg-primary h-screen pt-16">
	<div class="flex flex-row justify-center gap-12">
		<div class="flex flex-col">
			<img src="https://via.placeholder.com/500x700" alt="" />
		</div>
		<div class="flex flex-col text-gray-300 gap-5">
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
			<hr>
			<h2 class="text-3xl text-center">Skills</h2>
			<div class="grid grid-cols-2 gap-5">
				<!--{#each skills as skill}
					<Skill icon={skill.icon} name={skill.name} level={skill.level}/>
				{/each}-->
			</div>
		</div>
	</div>
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
