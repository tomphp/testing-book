<script>
	import { base } from '$app/paths';
	import MainTitle from '../../../components/document/MainTitle.svelte';
	import Example from '../../../components/document/Example.svelte';
	import Important from '../../../components/document/Important.svelte';
</script>

<MainTitle>Testing Layers</MainTitle>

<p>
	To gain complete confidence in our automated tests, they must cover <every>every</every> piece of the
	system. However, achieving this can appear to be an impossible task.
</p>

<Example>
	<p>Let us take just three example components of a system; they are simple functions.</p>

	<p>
		The logic in the first component has two branches, and the logic in the second and third
		components has three branches each.
	</p>

	<p>
		When testing each component individually, you need at least as many tests as there are branches
		to test them completely.
	</p>

	<p>
		Now let us consider the system as a whole, where we feed the output of each component into the
		next. Each unique combination of paths through the components is a unique path through the
		system. In this case,
		<strong>2 x 3 x 3</strong> paths need to be tested, giving us a minimum of <strong>18</strong> tests
		we need to create.
	</p>
</Example>

<p>
	Now consider a system with hundreds of components, each with many paths. Writing and maintaining
	so many tests would be impossible; this is where <em>testing layers</em> come in.
</p>

<p>
	Instead of writing many tests that test all the <em>integrated</em> components, we can test the
	individual components in isolation. Knowing that we have thoroughly tested the components
	individually, we can test that they work together with minimal <em>integration tests</em>. We no
	longer need to test every possible combination of paths at this level because we already have
	confidence in the individual components.
</p>

<Example>
	<p>
		Continuing with the example above, we can instead have <strong>2 + 3 + 3</strong> tests for the
		individual components and <strong>3</strong> integration tests to test the system as a whole.
		Now we have halved the number of tests to <strong>9</strong>.
	</p>
</Example>

<Important>
	<p>
		We can only use a few integration tests because we are building on the confidence that
		everything has been tested at the lower layers!
	</p>
</Important>

<p>
	We need to take this approach with all our testing. We want to test the individual parts at a
	granular level and then fill the gaps with tests at the higher levels.
</p>

<h3>Legacy Systems</h3>

<p>
	When building <a href="{base}/glossary#green-field">green-field</a> systems, you have the privilege
	of being able to create the layers of testing from the ground up while also designing the system to
	be testable. However, we often work with legacy systems instead, where creating automated tests takes
	a lot of work.
</p>

<p>
	In these situations, you must approach adding automated testing as a journey. You might initially
	get much value from adding a few complicated tests at a higher level. Later, you may remove these
	initial tests as your lower-level tests become more comprehensive.
</p>

<Important>
	<p>
		One common trap is that once a few of these higher-level tests are in place, people keep adding
		them instead of focusing on testing at the appropriate levels. Having too many of these types of
		tests can lead to a situation where the tests are slow, brittle and hard to maintain, which in
		turn, slows the team down and can reduce confidence in the tests.
	</p>
</Important>

<p>
	One final point to note about adding tests to legacy systems is that you should be bold in
	changing the system to make it more testable. By doing this, you will not only be able to test the
	system easily, but you will also be improving the design and ability to make changes in the
	future.
</p>
