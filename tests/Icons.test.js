import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import SkullIcon from '../src/icons/SkullIcon.svelte';
import RickAndMortyIcon from '../src/icons/RickAndMortyIcon.svelte';

describe('Icon Components with Local Assets', () => {
	it('SkullIcon renders with local asset', () => {
		const { container } = render(SkullIcon);
		const img = container.querySelector('img');

		expect(img).toBeTruthy();
		expect(img.src).toBeTruthy();
		expect(img.alt).toBe('Aenima album cover');
		// Vite transforms the import, so we just check it has a src
		expect(img.src.length).toBeGreaterThan(0);
	});

	it('RickAndMortyIcon renders with local asset', () => {
		const { container } = render(RickAndMortyIcon);
		const img = container.querySelector('img');

		expect(img).toBeTruthy();
		expect(img.src).toBeTruthy();
		expect(img.alt).toBe('Rick and Morty');
		expect(img.src.length).toBeGreaterThan(0);
	});

	it('SkullIcon accepts className prop', () => {
		const { container } = render(SkullIcon, { props: { className: 'custom-class' } });
		const img = container.querySelector('img');

		expect(img.className).toContain('custom-class');
	});

	it('RickAndMortyIcon accepts className prop', () => {
		const { container } = render(RickAndMortyIcon, { props: { className: 'test-class' } });
		const img = container.querySelector('img');

		expect(img.className).toContain('test-class');
	});
});
