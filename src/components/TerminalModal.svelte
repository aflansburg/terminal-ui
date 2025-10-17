<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		isOpen: boolean;
		onClose: () => void;
		title?: string;
		subtitle?: string;
		showDataStream?: boolean;
		children: Snippet;
	}

	let {
		isOpen,
		onClose,
		title,
		subtitle,
		showDataStream = true,
		children
	}: Props = $props();

	// Handle keyboard events
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isOpen) {
			onClose();
		}
	}

	// Handle backdrop click
	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			onClose();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
	<div
		class="terminal-modal-overlay fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
		onclick={handleBackdropClick}
		onkeydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
	>
		{#if showDataStream}
			<!-- Terminal-style data streams for ambiance -->
			<div class="data-stream" style="left: 2%; animation-delay: 0s;">SYSTEM_LOADING...</div>
			<div class="data-stream" style="left: 8%; animation-delay: 0.5s;">01011001 01010100</div>
			<div class="data-stream" style="left: 15%; animation-delay: 1s;">TERMINAL_ACTIVE</div>
			<div class="data-stream" style="left: 25%; animation-delay: 1.5s;">CONNECTION_OK</div>
			<div class="data-stream" style="left: 35%; animation-delay: 2s;">DATA_STREAM_ON</div>
			<div class="data-stream" style="left: 45%; animation-delay: 2.5s;">BUFFER_READY</div>
			<div class="data-stream" style="left: 55%; animation-delay: 3s;">SYNC_COMPLETE</div>
			<div class="data-stream" style="left: 65%; animation-delay: 0.8s;">CHANNEL_OPEN</div>
			<div class="data-stream" style="left: 75%; animation-delay: 1.3s;">SIGNAL_STRONG</div>
			<div class="data-stream" style="left: 85%; animation-delay: 1.8s;">STATUS_ONLINE</div>
			<div class="data-stream" style="left: 92%; animation-delay: 2.3s;">READY</div>
		{/if}

		<!-- Modal Container -->
		<div
			class="terminal-modal-container relative w-full max-w-4xl mx-auto animate-slide-up"
			role="document"
		>
			{#if title}
				<!-- Terminal-style header -->
				<div class="terminal-modal-header mb-4 text-center">
					<div class="rounded-md border border-terminal-green/50 bg-black/20 px-4 py-3 mb-2 terminal-font text-xs sm:text-sm">
						<div class="text-terminal-green font-bold text-center">{title}</div>
						{#if subtitle}
							<div class="text-terminal-green font-bold text-center mt-1">{subtitle}</div>
						{/if}
					</div>
				</div>
			{/if}

			<!-- Close button -->
			<button
				onclick={onClose}
				class="absolute -top-6 right-0 z-10 terminal-button-close w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
				aria-label="Close modal"
				title="Close (ESC)"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="text-terminal-green"
				>
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</button>

			<!-- Content Container -->
			<div class="terminal-modal-content terminal-border bg-black/95 rounded-lg p-6">
				{@render children()}
			</div>
		</div>
	</div>
{/if}

<style>
	.terminal-modal-overlay {
		animation: fadeIn 0.3s ease-out forwards;
	}

	.animate-slide-up {
		animation: slideUp 0.4s ease-out forwards;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slideUp {
		from {
			transform: translateY(30px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.terminal-button-close {
		background: linear-gradient(135deg, rgba(0, 255, 65, 0.1), rgba(0, 255, 65, 0.2));
		border: 1px solid rgba(0, 255, 65, 0.3);
		backdrop-filter: blur(8px);
	}

	.terminal-button-close:hover {
		background: linear-gradient(135deg, rgba(0, 255, 65, 0.2), rgba(0, 255, 65, 0.3));
		border-color: rgba(0, 255, 65, 0.6);
		box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
	}

	.terminal-modal-content {
		box-shadow:
			0 0 20px rgba(0, 255, 65, 0.2),
			inset 0 0 20px rgba(0, 0, 0, 0.5);
	}

	/* Mobile responsiveness */
	@media (max-width: 640px) {
		.terminal-button-close {
			width: 2.5rem;
			height: 2.5rem;
		}

		.terminal-button-close svg {
			width: 16px;
			height: 16px;
		}
	}
</style>
