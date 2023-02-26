<script>
  import "../app.css";
  import HeaderBanner from "../components/layout/HeaderBanner.svelte";
</script>

<div class="flex flex-col h-screen">
  <HeaderBanner />

  <main role="main" class="p-5 mb-auto">
    <slot />
  </main>

  <footer class="h-20 bg-stone-700 text-stone-200 p-5">
    <p>Footer goes here</p>
  </footer>
</div>
