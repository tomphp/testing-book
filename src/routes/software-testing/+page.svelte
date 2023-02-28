<script>
	import MainTitle from '../../components/document/MainTitle.svelte';
	import LeadParagraph from '../../components/document/LeadParagraph.svelte';
</script>

<MainTitle>Software Testing</MainTitle>

<LeadParagraph
	>This section is about testing the behaviour of the code in your system.</LeadParagraph
>

<ul class="list-disc list-inside text-lg">
	<li>
		Testing Pure Code
		<ul class="pl-5 list-disc list-inside">
			<li>Unit Tests</li>
			<li>Integration Tests</li>
		</ul>
	</li>
	<li>
		Testing Impure Code
		<ul class="pl-5 list-disc list-inside">
			<li>Code that mutates external/global state</li>
			<li>Testing persistence</li>
			<li>Testing external communication</li>
		</ul>
	</li>
</ul>
