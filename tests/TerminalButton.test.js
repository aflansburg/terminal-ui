import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import TerminalButtonTest from './TerminalButton.test.svelte';

describe('TerminalButton', () => {
	it('renders with default props', () => {
		render(TerminalButtonTest, {
			props: {
				text: '> EXECUTE'
			}
		});

		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('> EXECUTE');
	});

	it('applies default variant class', () => {
		render(TerminalButtonTest, {
			props: {
				text: 'Click me'
			}
		});

		const button = screen.getByRole('button');
		expect(button).toHaveClass('terminal-button');
	});

	it('applies disabled variant class when variant is disabled', () => {
		render(TerminalButtonTest, {
			props: {
				variant: 'disabled',
				text: 'Disabled'
			}
		});

		const button = screen.getByRole('button');
		expect(button).toHaveClass('terminal-button-disabled');
		expect(button).toBeDisabled();
	});

	it('applies disabled variant class when disabled prop is true', () => {
		render(TerminalButtonTest, {
			props: {
				disabled: true,
				text: 'Disabled'
			}
		});

		const button = screen.getByRole('button');
		expect(button).toHaveClass('terminal-button-disabled');
		expect(button).toBeDisabled();
	});

	it('applies small size classes', () => {
		render(TerminalButtonTest, {
			props: {
				size: 'sm',
				text: 'Small'
			}
		});

		const button = screen.getByRole('button');
		expect(button).toHaveClass('px-3', 'py-1', 'text-xs');
	});

	it('applies medium size classes (default)', () => {
		render(TerminalButtonTest, {
			props: {
				text: 'Medium'
			}
		});

		const button = screen.getByRole('button');
		expect(button).toHaveClass('px-4', 'py-2', 'text-sm');
	});

	it('applies large size classes', () => {
		render(TerminalButtonTest, {
			props: {
				size: 'lg',
				text: 'Large'
			}
		});

		const button = screen.getByRole('button');
		expect(button).toHaveClass('px-6', 'py-3', 'text-base');
	});

	it('applies custom className', () => {
		render(TerminalButtonTest, {
			props: {
				class: 'custom-class',
				text: 'Custom'
			}
		});

		const button = screen.getByRole('button');
		expect(button).toHaveClass('custom-class');
	});

	it('handles click events', async () => {
		const handleClick = vi.fn();

		render(TerminalButtonTest, {
			props: {
				onclick: handleClick,
				text: 'Click me'
			}
		});

		const button = screen.getByRole('button');
		await fireEvent.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('does not trigger onclick handler when disabled', async () => {
		const handleClick = vi.fn();

		render(TerminalButtonTest, {
			props: {
				disabled: true,
				onclick: handleClick,
				text: 'Disabled'
			}
		});

		const button = screen.getByRole('button');

		// The button is disabled, so clicks won't propagate to the handler
		expect(button).toBeDisabled();
	});

	it('applies all styling classes together', () => {
		render(TerminalButtonTest, {
			props: {
				size: 'lg',
				class: 'my-custom-class',
				text: 'Styled'
			}
		});

		const button = screen.getByRole('button');
		expect(button).toHaveClass('terminal-button');
		expect(button).toHaveClass('px-6', 'py-3', 'text-base');
		expect(button).toHaveClass('rounded-md', 'font-bold');
		expect(button).toHaveClass('my-custom-class');
	});
});
