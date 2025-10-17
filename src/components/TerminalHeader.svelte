<script lang="ts">
	interface Props {
		title: string;
		subtitle?: string;
		centered?: boolean;
		class?: string;
	}

	let {
		title,
		subtitle,
		centered = true,
		class: className = ''
	}: Props = $props();

	const alignClass = $derived(centered ? 'text-center' : 'text-left');
</script>

<div class="rounded-md border border-terminal-green/50 bg-black/20 px-4 py-3 terminal-font text-xs {className}">
	<div class="text-terminal-green font-bold {alignClass}">
		{title}
	</div>
	{#if subtitle}
		<div class="text-terminal-green font-bold {alignClass} mt-1">
			{subtitle}
		</div>
	{/if}
</div>
