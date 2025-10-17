<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'default' | 'disabled' | 'danger';
		size?: 'sm' | 'md' | 'lg';
		class?: string;
		onclick?: (event: MouseEvent) => void;
		disabled?: boolean;
		children: Snippet;
	}

	let {
		variant = 'default',
		size = 'md',
		class: className = '',
		onclick,
		disabled = false,
		children
	}: Props = $props();

	const sizeClasses = {
		sm: 'px-3 py-1 text-xs',
		md: 'px-4 py-2 text-sm',
		lg: 'px-6 py-3 text-base'
	};

	const buttonClass = $derived(
		variant === 'disabled' || disabled
			? 'terminal-button-disabled'
			: 'terminal-button'
	);
</script>

<button
	class="{buttonClass} {sizeClasses[size]} rounded-md font-bold {className}"
	onclick={onclick}
	disabled={disabled || variant === 'disabled'}
>
	{@render children()}
</button>
