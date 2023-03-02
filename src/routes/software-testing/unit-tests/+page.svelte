<script>
	import MainTitle from '../../../components/document/MainTitle.svelte';
	import Todo from '../../../components/document/Todo.svelte';
	import LeadParagraph from '../../../components/document/LeadParagraph.svelte';
	import Section from "../../../components/document/Section.svelte";
	import {base} from "$app/paths";
</script>

<MainTitle>Unit Tests</MainTitle>

<LeadParagraph>
	Unit tests are how we test the logic in our code. They test the code extensively in isolation to
	ensure that the local logic is correct.
</LeadParagraph>

<Section title="What are unit tests?">
	<p>
		Unit tests are simply code that tests other code and they restrict their scope to a single <em>unit</em> of code.
		They are written in the same language that that code being tested is written in and runs in the same process.
		They simply call the code being tested and assert that is does what it is supposed to do.
	</p>
	<p>
		Unit tests are usually the most targeted tests and happen at the <a href="{base}/theory/testing-layers">lowest
		layer</a> in your testing stack.
	</p>
</Section>

<Section title="What is a unit?">
	<p>
		A unit is a small piece of testable code testable code that can be tested in isolation. While it is not dictated
		exactly what a unit is, it is often a single <em>function</em>, <em>class</em> or <em>module</em>.
	</p>
</Section>

<Section title="Coverage">
	<p>
		Each unit of code will generally require multiple tests to test its complete functionality.
	</p>

	<Todo/>
</Section>

<Section title="Testing private functionality">
	<Todo/>
</Section>

<ul>
	<li>Speed: fast</li>
	<li>Isolation: high</li>
	<li>Audience: developers</li>
</ul>

<div>Pros:</div>

<div>Cons:</div>

<div>Alternatives:</div>
