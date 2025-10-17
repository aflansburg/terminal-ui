<script>
	import TerminalButton from '../src/components/TerminalButton.svelte';

	let { text = '> EXECUTE', ...props } = $props();
</script>

<TerminalButton {...props}>
	{text}
</TerminalButton>
