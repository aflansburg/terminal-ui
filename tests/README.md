# Tests

This directory contains the test suite for @aflansburg/terminal-ui.

## Running Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

# Run tests with coverage report
npm run test:coverage
```

## Test Structure

- `*.test.js` - Test files using Vitest and @testing-library/svelte
- `*.test.svelte` - Helper wrapper components for testing Svelte 5 components with snippets
- `setup.js` - Global test setup and mocks

## Writing Tests

When testing components that use Svelte 5's snippet feature, create a wrapper component:

```svelte
<!-- MyComponent.test.svelte -->
<script>
	import MyComponent from '../src/components/MyComponent.svelte';
	let { text = 'Default', ...props } = $props();
</script>

<MyComponent {...props}>
	{text}
</MyComponent>
```

Then use it in your tests:

```javascript
import { render } from '@testing-library/svelte';
import MyComponentTest from './MyComponent.test.svelte';

it('renders text', () => {
	render(MyComponentTest, { props: { text: 'Hello' } });
	// assertions...
});
```

## Coverage

Coverage reports are generated in the `coverage` directory when running `npm run test:coverage`.
