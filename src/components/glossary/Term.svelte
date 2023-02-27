<script lang="ts">
  export let anchor: string;
  export let term: string;
</script>

<section id="{anchor}" class="mt-5 bg-stone-200 rounded-lg p-5">
  <h2 class="text-2xl pb-2">{term}</h2>
  <slot/>
</section>
