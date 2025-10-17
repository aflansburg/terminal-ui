# @aflansburg/terminal-ui

[![Test](https://github.com/aflansburg/terminal-ui/actions/workflows/test.yml/badge.svg)](https://github.com/aflansburg/terminal-ui/actions/workflows/test.yml)
[![npm version](https://badge.fury.io/js/@aflansburg%2Fterminal-ui.svg)](https://www.npmjs.com/package/@aflansburg/terminal-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A terminal-themed, sci-fi styled UI component library for Svelte 5. Features CRT screen effects, matrix-style animations, and cyberpunk aesthetics.

## See it in action

https://engabe.com

![Terminal UI Demo](./demo.gif)

## Features

- **Terminal-themed components** - Buttons, containers, modals, and headers with authentic CRT/terminal styling
- **Rich animations** - Scanlines, glitches, VHS effects, portal pulses, and matrix rain
- **Icon library** - 12 pre-styled SVG icons
- **Design tokens** - Consistent color palette and styling variables
- **TypeScript support** - Full type definitions included
- **Responsive** - Mobile-first design with responsive breakpoints
- **Svelte 5 ready** - Built with latest Svelte features (runes, snippets)

## Installation

```bash
npm install @aflansburg/terminal-ui
```

Or with pnpm:

```bash
pnpm add @aflansburg/terminal-ui
```

## Usage

### Import Styles

First, import the terminal theme CSS in your main app file:

```css
/* In your app.css or main CSS file */
@import '@aflansburg/terminal-ui/styles';
```

Or import it in your Svelte layout:

```svelte
<script>
  import '@aflansburg/terminal-ui/styles';
</script>
```

### Components

#### TerminalButton

```svelte
<script>
  import { TerminalButton } from '@aflansburg/terminal-ui';
</script>

<TerminalButton onclick={() => console.log('clicked')}>
  > EXECUTE_COMMAND
</TerminalButton>

<TerminalButton variant="disabled" size="lg">
  > SYSTEM_OFFLINE
</TerminalButton>
```

**Props:**
- `variant?: 'default' | 'disabled' | 'danger'` - Button style variant
- `size?: 'sm' | 'md' | 'lg'` - Button size
- `class?: string` - Additional CSS classes
- `onclick?: (event: MouseEvent) => void` - Click handler
- `disabled?: boolean` - Disable button

#### TerminalContainer

```svelte
<script>
  import { TerminalContainer } from '@aflansburg/terminal-ui';
</script>

<TerminalContainer bordered dark>
  <p class="terminal-font text-terminal-green">Content goes here</p>
</TerminalContainer>

<TerminalContainer portalBorder>
  <p>Portal-themed container with pulsing animation</p>
</TerminalContainer>
```

**Props:**
- `bordered?: boolean` - Add terminal-green glowing border
- `portalBorder?: boolean` - Add portal-themed pulsing border
- `dark?: boolean` - Add dark background
- `class?: string` - Additional CSS classes

#### TerminalHeader

```svelte
<script>
  import { TerminalHeader } from '@aflansburg/terminal-ui';
</script>

<TerminalHeader
  title="C-137-INFO TERMINAL"
  subtitle="INTERDIMENSIONAL DATABASE"
/>

<TerminalHeader title="STATUS" centered={false} />
```

**Props:**
- `title: string` - Header title text
- `subtitle?: string` - Optional subtitle text
- `centered?: boolean` - Center align text (default: true)
- `class?: string` - Additional CSS classes

#### TerminalModal

```svelte
<script>
  import { TerminalModal } from '@aflansburg/terminal-ui';

  let isOpen = $state(false);
</script>

<TerminalButton onclick={() => isOpen = true}>
  Open Modal
</TerminalButton>

<TerminalModal
  isOpen={isOpen}
  onClose={() => isOpen = false}
  title="SYSTEM MESSAGE"
  subtitle="ATTENTION REQUIRED"
>
  <p class="terminal-font text-terminal-green">
    Modal content goes here
  </p>
</TerminalModal>
```

**Props:**
- `isOpen: boolean` - Control modal visibility
- `onClose: () => void` - Close handler
- `title?: string` - Modal title
- `subtitle?: string` - Modal subtitle
- `showDataStream?: boolean` - Show animated data stream background (default: true)

#### TerminalBootSequence

```svelte
<script>
  import { TerminalBootSequence } from '@aflansburg/terminal-ui';

  let showBoot = $state(true);
</script>

<TerminalBootSequence
  visible={showBoot}
  onComplete={() => showBoot = false}
/>
```

#### MatrixLyrics

```svelte
<script>
  import { MatrixLyrics } from '@aflansburg/terminal-ui';
</script>

<MatrixLyrics />
```

### Icons

All icons are exported and can be used directly:

```svelte
<script>
  import {
    GitHubIcon,
    LinkedInIcon,
    YouTubeIcon,
    MenuIcon,
    CloseIcon,
    SunIcon,
    MoonIcon
  } from '@aflansburg/terminal-ui';
</script>

<GitHubIcon />
<MenuIcon />
```

**Available Sample Icons:**
- `MenuIcon` - Hamburger menu
- `CloseIcon` - Close/X icon
- `GitHubIcon` - GitHub logo
- `LinkedInIcon` - LinkedIn logo
- `YouTubeIcon` - YouTube logo
- `SunIcon` - Sun/light mode
- `MoonIcon` - Moon/dark mode
- `SkullIcon` - Skull icon
- `RickAndMortyIcon` - Rick and Morty themed
- `GreenCheckIcon` - Checkmark
- `QuestionMarkIcon` - Question mark
- `ClickMeIcon` - Pointing hand

### Theme & Design Tokens

Import and use design tokens in your components:

```svelte
<script>
  import { colors, fonts, animations } from '@aflansburg/terminal-ui/theme';
</script>

<style>
  .my-element {
    color: {colors.terminalGreen};
    font-family: {fonts.terminal};
    animation: {animations.glitch};
  }
</style>
```

**Available Tokens:**

**Colors:**
```typescript
colors.terminalGreen    // #00ff41
colors.terminalRed      // #d01b1b
colors.terminalBlue     // #4dabf7
colors.portalOrange     // #fd7e14
colors.neonPurple       // #be4bdb
colors.rickCyan         // #67e8f9
colors.citadelGray      // #1a1a1a
```

**Fonts:**
```typescript
fonts.terminal  // 'JetBrains Mono', monospace
fonts.header    // 'Orbitron', sans-serif
```

**Animations:**
```typescript
animations.scanlines
animations.terminalFlicker
animations.portalPulse
animations.glitch
animations.screenGlitch
// ... and more
```

### CSS Utility Classes

The library includes many utility classes you can use directly:

**Typography:**
- `.terminal-font` - Apply JetBrains Mono font
- `.sci-fi-header` - Apply Orbitron font with uppercase styling
- `.ascii-art` - Styled for ASCII art with glow effect

**Effects:**
- `.crt-screen` - Full CRT screen effect with scanlines
- `.terminal-border` - Green glowing border with flicker
- `.portal-border` - Blue/orange pulsing border
- `.glitch-text` - Subtle glitch animation
- `.glitch-text-strong` - Strong glitch effect
- `.screen-glitch` - Full screen distortion
- `.data-stream` - Falling matrix-style text

**Buttons:**
- `.terminal-button` - Green terminal button
- `.terminal-button-disabled` - Red disabled button

**Colors:**
- `.text-terminal-green` - Terminal green text
- `.text-terminal-red` - Terminal red text
- `.text-portal-orange` - Portal orange text
- `.text-neon-purple` - Neon purple text

**Overlays:**
- `.vhs-glitch-overlay` - VHS scan line effect
- `.matrix-runes-overlay` - Matrix rune animation container
- `.matrix-bg` - Subtle binary pattern background

## Example: Complete Page

```svelte
<script>
  import {
    TerminalButton,
    TerminalContainer,
    TerminalHeader,
    TerminalModal
  } from '@aflansburg/terminal-ui';
  import '@aflansburg/terminal-ui/styles';

  let modalOpen = $state(false);
</script>

<div class="crt-screen min-h-screen bg-black p-8">
  <div class="max-w-4xl mx-auto space-y-6">
    <TerminalHeader
      title="SYSTEM CONTROL PANEL"
      subtitle="C-137 TERMINAL INTERFACE"
    />

    <TerminalContainer bordered dark>
      <h2 class="sci-fi-header text-terminal-green text-2xl mb-4">
        Welcome to the Terminal
      </h2>
      <p class="terminal-font text-terminal-green">
        > System online and ready for commands
      </p>

      <TerminalButton
        onclick={() => modalOpen = true}
        class="mt-4"
      >
        > Open_System_Modal
      </TerminalButton>
    </TerminalContainer>
  </div>

  <TerminalModal
    isOpen={modalOpen}
    onClose={() => modalOpen = false}
    title="SYSTEM MESSAGE"
  >
    <p class="terminal-font text-terminal-green">
      This is a terminal-styled modal
    </p>
  </TerminalModal>
</div>
```

## Responsive Design

All components are mobile-first and responsive:

- ASCII art and headers scale appropriately
- Modals adapt to screen size
- Touch-friendly button sizes on mobile
- Breakpoints: 480px (mobile), 640px (tablet), 768px (desktop)

## Browser Support

- Modern browsers with CSS Grid and Custom Properties support
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+

## License

MIT

## Author

Abram Flansburg
