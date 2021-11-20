<script lang="ts">
	import Skill from './component/Skill.svelte';
	import skills from './data/skills.json';

	import Achievement from './component/Achievement.svelte';
	import achievements from './data/achievements.json';

	import Project from './component/Project.svelte';
	import projects from './data/projects.json';
</script>

<main class="bg-primary text-gray-300 py-16">
	<div class="flex flex-row justify-center gap-12">
		<div class="flex flex-col gap-5">
			<img src="https://via.placeholder.com/500x700" alt="" />
			<p class="text-center">Likes cats. Enjoys learning about new development tools that make life easier.</p>
			<hr>
			<h2 class="text-3xl text-center">Portfolio</h2>
			<div class="grid grid-cols-1 gap-5">
				{#each projects as project}
					<Project title={project.title} description={project.description} image={project.image} link={project.link}/>
				{/each}
			</div>
		</div>
		<div class="flex flex-col gap-5">
			<h1 class="text-4xl">Bismani Rafi Lusadi Soemarno</h1>
			<hr>
			<div class="flex items-center gap-2 text-2xl">
				<span class="material-icons-round select-none">work</span>
				<span>Student at Binus International</span>
			</div>
			<div class="flex items-center gap-2 text-2xl">
				<span class="material-icons-round select-none">biotech</span>
				<span>Business Information Systems</span>
			</div>
			<div class="flex items-center gap-2 text-2xl">
				<span class="material-icons-round select-none">location_on</span>
				<span>Bogor, Indonesia</span>
			</div>
			<div class="flex items-center gap-2 text-2xl">
				<span class="material-icons-round select-none">language</span>
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
			<div class="grid grid-cols-1 gap-5">
				{#each achievements as achievement}
					<Achievement icon={achievement.icon} name={achievement.name} date={achievement.date}/>
				{/each}
			</div>
		</div>
	</div>
	<div class="flex flex-row justify-center mt-16">
		<div class="flex flex-row items-center gap-10 p-4 px-7 bg-white bg-opacity-10 rounded-3xl">
			<a href="mailto:soemarnorafi@gmail.com" target="_blank"><span class="material-icons-round align-middle contact">mail</span> soemarnorafi@gmail.com</a>
			<a href="https://github.com/RafiSoemarno" target="_blank"><span class="fab fa-github contact align-middle"/> RafiSoemarno</a>
			<a href="https://www.linkedin.com/in/rafi-soemarno/" target="_blank"><span class="fab fa-linkedin contact align-middle"/> Rafi Soemarno</a>
		</div>
	</div>
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.material-icons-round.contact {
		font-size: 36px;
	}

	.fab.contact {
		font-size: 28px;
	}
</style>
