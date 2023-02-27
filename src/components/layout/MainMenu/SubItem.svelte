<script lang="ts">
  export let link: string;
  export let title: string;
</script>

<li>
  <a
    class="
      block
      w-full
      whitespace-nowrap
      bg-transparent
      py-2
      px-4
      text-sm
      font-normal
      text-neutral-700
      hover:bg-neutral-100
      active:text-neutral-800
      active:no-underline
      disabled:pointer-events-none
      disabled:bg-transparent
      disabled:text-neutral-400"
    href="{link}"
    data-te-dropdown-item-ref>{title}</a>
</li>
