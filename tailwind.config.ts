import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#484dff',
        'primary-dark': '#3a3ecc',
        'primary-light': '#6a6eff',
        secondary: '#00c4ff',
        'secondary-dark': '#00a3cc',
        'secondary-light': '#33d1ff',
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        navbar: '#2f3642',
        slateGrey: '#D3D3D3'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'hover': '0 4px 6px rgba(72, 77, 255, 0.2)',
        'button': '0 2px 4px rgba(72, 77, 255, 0.1)',
      },
      animation: {
        'dropdown-in': 'dropdownEnter 0.2s ease-out forwards',
        'dropdown-out': 'dropdownExit 0.2s ease-in forwards',
      },
      keyframes: {
        dropdownEnter: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, -12px, 0) scale3d(0.9, 0.9, 1)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
          },
        },
        dropdownExit: {
          '0%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
          },
          '100%': {
            opacity: '0',
            transform: 'translate3d(0, -12px, 0) scale3d(0.9, 0.9, 1)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

export default config 