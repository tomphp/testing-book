<script>
	import MainTitle from '../../../components/document/MainTitle.svelte';
	import Todo from '../../../components/document/Todo.svelte';
	import LeadParagraph from '../../../components/document/LeadParagraph.svelte';
</script>

<MainTitle>Testing Dependencies</MainTitle>

<LeadParagraph>
	We often utilise third-party libraries in our code to perform common tasks that we don't want to
	re-invent for ourselves. Here we will discuss how to test code which utilises such libraries.
</LeadParagraph>

<Todo />
