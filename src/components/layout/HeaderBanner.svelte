<script lang="ts">
	import { base } from '$app/paths';
	import MainMenu from './MainMenu.svelte';
	import type { ItemProps } from './MainMenu.svelte';

	const mainMenuItems: ItemProps[] = [
		{ link: `${base}/`, title: 'Home' },
		{
			title: 'Theory',
			children: [
				{ link: `${base}/theory/testing-layers`, title: 'Testing Layers' },
				{ link: `${base}/theory/anatomy-of-a-test`, title: 'Anatomy of a Test' }
			]
		},
		{
			link: `${base}/software-testing`,
			title: `Software`,
			children: [
				{ link: `${base}/software-testing/static-analysis`, title: 'Static Analysis' },
				{ link: `${base}/software-testing/unit-tests`, title: 'Unit Tests' },
				{ link: `${base}/software-testing/testing-dependencies`, title: 'Testing Dependencies' },
				{ link: `${base}/software-testing/testing-integrations`, title: 'Testing Integrations' }
			]
		},
		{ link: `${base}/infrastructure-testing`, title: 'Infrastructure' },
		{ link: `${base}/security-testing`, title: 'Security' },
		{ link: `${base}/glossary`, title: 'Glossary' }
	];
</script>

<header class="bg-gradient-to-b	from-green-600 to-green-700 shadow-xl text-slate-200">
	<div class="max-w-6xl mx-auto">
		<h1 class="text-4xl md:text-6xl font-bold p-5">Testing Strategies</h1>
		<MainMenu items={mainMenuItems} />
	</div>
</header>
