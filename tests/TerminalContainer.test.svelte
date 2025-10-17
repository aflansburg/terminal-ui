<script>
	import TerminalContainer from '../src/components/TerminalContainer.svelte';

	let { text = 'Test Content', ...props } = $props();
</script>

<TerminalContainer {...props}>
	{text}
</TerminalContainer>
