<script lang="ts">
	import MainMenu from './MainMenu.svelte';
	import type { ItemProps } from './MainMenu.svelte';

	const mainMenuItems: ItemProps[] = [
		{ link: '/', title: 'Home' },
		{
			title: 'Theory',
			children: [
				{ link: '/theory/testing-layers', title: 'Testing Layers' },
				{ link: '/theory/anatomy-of-a-test', title: 'Anatomy of a Test' }
			]
		},
		{
			link: '/software-testing',
			title: 'Software Testing',
			children: [{ link: '/software-testing/unit-tests', title: 'Unit Tests' }]
		},
		{ link: '/infrastructure-testing', title: 'Infrastructure Testing' },
		{ link: '/security-testing', title: 'Security Testing' },
		{ link: '/glossary', title: 'Glossary' }
	];
</script>

<header class="bg-gradient-to-b	from-green-600 to-green-700 shadow-xl text-slate-200">
	<h1 class="text-4xl md:text-6xl font-bold p-5">Testing Strategies</h1>
	<MainMenu items={mainMenuItems} />
</header>
