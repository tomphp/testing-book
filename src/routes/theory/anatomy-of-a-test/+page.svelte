<script>
	import { gherkin, typescript } from 'svelte-highlight/languages';
	import Highlight from 'svelte-highlight';
	import github from 'svelte-highlight/styles/github';
	import MainTitle from '../../../components/document/MainTitle.svelte';
	import Section from '../../../components/document/Section.svelte';
	import Example from '../../../components/document/Example.svelte';
	import Todo from '../../../components/document/Todo.svelte';
</script>

<svelte:head>
	{@html github}
</svelte:head>

<MainTitle>Anatomy of a Test</MainTitle>

<p>
	Given the broad spectrum of types of tests and checks we discuss on this site, there is not a
	one-size-fits-all shape to tests. However, there is often a common lifecycle to a test. This
	lifecycle typically looks like this:
</p>

<ol class="list-decimal list-inside text-lg pt-5">
	<li>Setup an environment to run the test</li>
	<li>Perform the action to be tests</li>
	<li>Assert that desired outcome has occurred</li>
	<li>Clear up any test state if necessary</li>
</ol>

<p>
	The first three of these are embodied by the ideas of <strong>given-when-then</strong> and
	<strong>arrange-act-assert</strong>. These terms are often used in the terminology of software
	testing, and even are part of the syntax for some testing tools.
</p>

<Section title="Why is this important?">
	<p>
		Creating tests with explicit <em>arrange</em>, <em>act</em> and <em>assert</em> steps helps to make
		the tests simpler and easier to work with.
	</p>

	<Example>
		<Highlight
			language={typescript}
			code={`it('does a thing', () => {
	setupTheThing();
	const result = runTheThing();
	expect(result).toBe('correct');
});`}
		/>
	</Example>

	<Example>
		Acceptance test (gherkin)
		<Highlight
			language={gherkin}
			code="Scenario: Happiness
	Given nothing bad has happened
	When I reflect on my own emotions
	Then I am happy"
		/>
	</Example>

	<Example>
		Infrastructure (description)
		<Todo />
	</Example>
</Section>

<Section title="Tests which do not follow this pattern">
	<p>
		<Todo />
	</p>
</Section>
