<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		bordered?: boolean;
		portalBorder?: boolean;
		dark?: boolean;
		class?: string;
		children: Snippet;
	}

	let {
		bordered = false,
		portalBorder = false,
		dark = false,
		class: className = '',
		children
	}: Props = $props();

	const containerClass = $derived(() => {
		const classes = [];
		if (bordered) classes.push('terminal-border');
		if (portalBorder) classes.push('portal-border');
		if (dark) classes.push('bg-black/95');
		return classes.join(' ');
	});
</script>

<div class="{containerClass()} rounded-md p-4 {className}">
	{@render children()}
</div>
