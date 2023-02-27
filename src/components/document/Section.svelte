<script lang="ts">
  export let title: string;
</script>

<section class="mt-5">
  <h2 class="text-3xl text-bold pb-2">{title}</h2>

  <slot/>
</section>
