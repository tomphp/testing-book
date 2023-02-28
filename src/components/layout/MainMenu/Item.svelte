<script lang="ts" context="module">
	export interface SubItemProps {
		title: string;
		link: string;
	}
</script>

<script lang="ts">
	import ArrowDown from './ArrowDown.svelte';
	import SubItem from './SubItem.svelte';

	export let link: string | undefined = undefined;
	export let title: string;
	export let children: SubItemProps[] | undefined = undefined;

	let open = false;

	function openSubmenu(): void {
		open = true;
	}

	function closeSubmenu(): void {
		open = false;
	}

	$: href = link;
</script>

<li class="font-bold text-center p-2">
	<div class="justify-center">
		<div on:mouseenter={() => openSubmenu()} on:mouseleave={() => closeSubmenu()}>
			<div class="relative" data-te-dropdown-ref>
				<a
					class="
              flex
              text-sm
              items-center
              whitespace-nowrap
              rounded
              bg-primary
              lg:px-6
              pt-2.5
              pb-2
              font-medium
              uppercase
              leading-normal
              text-white
              shadow-[0_4px_9px_-4px_#3b71ca]
              transition
              duration-150
              ease-in-out
              hover:bg-white
              hover:text-emerald-500
              hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
              focus:bg-primary-600
              focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
              focus:outline-none
              focus:ring-0
              active:bg-primary-700
              active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
              motion-reduce:transition-none"
					{href}
					type="button"
					id="dropdownMenuButton2"
					data-te-dropdown-toggle-ref
					aria-expanded="false"
					data-te-ripple-init
					data-te-ripple-color="light"
				>
					{title}
					{#if children}
						<span class="ml-2 w-2"><ArrowDown /></span>
					{/if}
				</a>
				{#if children}
					<ul
						class:hidden={!open}
						class="
                absolute
                z-[1000]
                float-left
                m-0
                min-w-max
                list-none
                overflow-hidden
                rounded-lg
                border-none
                bg-white
                bg-clip-padding
                text-left
                text-base
                shadow-lg
                [&[data-te-dropdown-show]]:block"
						aria-labelledby="dropdownMenuButton2"
						data-te-dropdown-menu-ref
					>
						{#each children as { link, title }}
							<SubItem {link} {title} />
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	</div>
</li>
