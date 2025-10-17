import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import TerminalContainerTest from './TerminalContainer.test.svelte';

describe('TerminalContainer', () => {
	it('renders children content', () => {
		render(TerminalContainerTest, {
			props: {
				text: 'Test Content'
			}
		});

		expect(screen.getByText('Test Content')).toBeInTheDocument();
	});

	it('applies no special classes by default', () => {
		const { container } = render(TerminalContainerTest, {
			props: {
				text: 'Content'
			}
		});

		const div = container.querySelector('div');
		expect(div).toHaveClass('rounded-md', 'p-4');
		expect(div).not.toHaveClass('terminal-border');
		expect(div).not.toHaveClass('portal-border');
		expect(div).not.toHaveClass('bg-black/95');
	});

	it('applies terminal-border class when bordered is true', () => {
		const { container } = render(TerminalContainerTest, {
			props: {
				bordered: true,
				text: 'Content'
			}
		});

		const div = container.querySelector('div');
		expect(div).toHaveClass('terminal-border');
	});

	it('applies portal-border class when portalBorder is true', () => {
		const { container } = render(TerminalContainerTest, {
			props: {
				portalBorder: true,
				text: 'Content'
			}
		});

		const div = container.querySelector('div');
		expect(div).toHaveClass('portal-border');
	});

	it('applies dark background when dark is true', () => {
		const { container } = render(TerminalContainerTest, {
			props: {
				dark: true,
				text: 'Content'
			}
		});

		const div = container.querySelector('div');
		expect(div).toHaveClass('bg-black/95');
	});

	it('applies custom className', () => {
		const { container } = render(TerminalContainerTest, {
			props: {
				class: 'my-custom-class',
				text: 'Content'
			}
		});

		const div = container.querySelector('div');
		expect(div).toHaveClass('my-custom-class');
	});

	it('applies multiple props together', () => {
		const { container } = render(TerminalContainerTest, {
			props: {
				bordered: true,
				dark: true,
				class: 'custom-styling',
				text: 'Content'
			}
		});

		const div = container.querySelector('div');
		expect(div).toHaveClass('terminal-border');
		expect(div).toHaveClass('bg-black/95');
		expect(div).toHaveClass('custom-styling');
		expect(div).toHaveClass('rounded-md', 'p-4');
	});

	it('can combine bordered and portalBorder', () => {
		const { container } = render(TerminalContainerTest, {
			props: {
				bordered: true,
				portalBorder: true,
				text: 'Content'
			}
		});

		const div = container.querySelector('div');
		expect(div).toHaveClass('terminal-border');
		expect(div).toHaveClass('portal-border');
	});

	it('renders text content properly', () => {
		render(TerminalContainerTest, {
			props: {
				text: 'Complex Content'
			}
		});

		expect(screen.getByText('Complex Content')).toBeInTheDocument();
	});
});
