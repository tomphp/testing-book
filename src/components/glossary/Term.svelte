<script>
  export let anchor;
  export let term;
</script>

<section class="pb-5 bg-stone-200 rounded-lg p-2">
  <a id="{anchor}"></a>
  <h2 class="text-2xl pb-2">{term}</h2>
  <slot/>
</section>
