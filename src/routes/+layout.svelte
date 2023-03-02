<script>
	import '../app.css';
	import HeaderBanner from '../components/layout/HeaderBanner.svelte';
</script>

<div class="flex flex-col h-screen bg-gradient-to-tr from-white via-white to-gray-100">
	<HeaderBanner />

	<main class="p-5 mb-auto max-w-6xl mx-auto">
		<slot />
	</main>

	<footer class="h-20 bg-stone-700 text-stone-200 p-5">
		<div class="max-w-6xl mx-auto">
			<p>Footer goes here</p>
		</div>
	</footer>
</div>
