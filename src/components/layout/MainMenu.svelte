<script context="module" lang="ts">
	import type { SubItemProps } from './MainMenu/Item.svelte';

	export interface ItemProps {
		title: string;
		link?: string;
		children?: SubItemProps[];
	}
</script>

<script lang="ts">
	import MainMenuItem from './MainMenu/Item.svelte';

	export let items: ItemProps[];
</script>

<nav role="menu" class="pl-5">
	<ul class="lg:flex">
		{#each items as { title, link, children }}
			<MainMenuItem {title} {link} {children} />
		{/each}
	</ul>
</nav>
