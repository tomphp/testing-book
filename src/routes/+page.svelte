<script>
	import {base} from '$app/paths';
	import LeadParagraph from '../components/document/LeadParagraph.svelte';
	import Section from '../components/document/Section.svelte';
	import Todo from '../components/document/Todo.svelte';
</script>

<LeadParagraph>
	<strong>Testing Strategies</strong> gives you quick guidance on approaches for automating the testing
	of different aspects of your system.
</LeadParagraph>

<Section title="Why Test">
	<p>
		When building <em>software systems</em>, we want enough tests to give us the
		<strong>confidence</strong>
		to deploy to production. While
		<a href="{base}/glossary#continuous-deployment">Continuous Deployment</a> might not be your end goal, testing
		to a level where you have enough confidence to do so is a worthy aspiration.
	</p>
</Section>

<Section title="Approach">
	<p>
		This resource serves as a strategy cookbook that gives you options for automating the testing of
		different aspects of your system. These aspects include:
	</p>

	<ul class="list-disc list-inside p-5 text-lg">
		<li><a href="{base}/software-testing">Software Testing</a></li>
		<li>User Interface Testing <Todo /></li>
		<li>Integration Testing <Todo /></li>
		<li>Security Testing <Todo /></li>
		<li>Performance Testing <Todo /></li>
		<li>Infrastructure Testing <Todo /></li>
		<li>Specialist Testing (e.g. AI, data processing) <Todo /></li>
	</ul>

	<p>
		Depending on your circumstance, different approaches to testing might be viable. Rather than
		presenting you with the <em>one true way</em> to test a specific thing, we present the options and
		the pros and cons of each. Often, a better approach to testing will be to change your system architecture;
		we will advocate for these techniques but will also present alternatives for when it is not possible.
	</p>
</Section>
