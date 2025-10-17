/**
 * Terminal UI Design Tokens
 * Sci-fi themed color palette and design system constants
 */

export const colors = {
	terminalGreen: '#00ff41',
	terminalRed: '#d01b1b',
	terminalDarkRed: '#8d0000',
	terminalBlue: '#4dabf7',
	portalOrange: '#fd7e14',
	neonPurple: '#be4bdb',
	citadelGray: '#1a1a1a',
	rickCyan: '#67e8f9',
	scanLine: 'rgba(0, 255, 65, 0.08)'
} as const;

export const fonts = {
	terminal: "'JetBrains Mono', 'Courier New', monospace",
	header: "'Orbitron', sans-serif"
} as const;

export const effects = {
	glowGreen: '0 0 10px var(--terminal-green)',
	glowBlue: '0 0 5px var(--terminal-blue)',
	glowOrange: '0 0 10px var(--portal-orange)',
	terminalBorder: '2px solid var(--terminal-green)',
	terminalShadow: '0 0 10px var(--terminal-green), inset 0 0 10px rgba(0, 255, 65, 0.1)'
} as const;

export const animations = {
	scanlines: 'scanlines 0.08s linear infinite',
	terminalFlicker: 'terminal-flicker 3s infinite',
	portalPulse: 'portal-pulse 2s ease-in-out infinite',
	dataStream: 'data-stream 6s linear infinite',
	glitch: 'glitch 0.3s ease-in-out infinite',
	subtleGlitch: 'subtle-glitch 0.8s ease-in-out infinite',
	screenGlitch: 'screen-glitch 0.6s ease-in-out',
	vhsLineSlide: 'vhs-line-slide 1.2s ease-out',
	matrixRuneAppear: 'matrix-rune-appear 3s ease-out forwards',
	fadeIn: 'fadeIn 0.3s ease-in',
	slideUp: 'slideUp 0.5s ease-out',
	slideInRight: 'slideInRight 0.5s ease-out',
	slideInLeft: 'slideInLeft 0.5s ease-out'
} as const;

export const spacing = {
	xs: '0.25rem',
	sm: '0.5rem',
	md: '1rem',
	lg: '1.5rem',
	xl: '2rem'
} as const;

export const breakpoints = {
	mobile: '480px',
	tablet: '640px',
	desktop: '768px',
	wide: '1024px'
} as const;
