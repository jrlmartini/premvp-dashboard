import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-main': '#03131e',
        'bg-card': '#071724',
        'bg-modal': '#214058',
        'bg-button': '#275fc1',
        'bg-destructive': '#e45757',
        'str-default': '#214059',
        'str-hover': '#275fc1',
        'str-disabled': '#8f9da7',
        'str-destructive': '#d32f2f',
        'txt-main': '#f2f2f2',
        'txt-secondary': '#c1cdd9',
        'txt-muted': '#8f9da7',
        'txt-modal': '#03131e',
        'chart-1': '#275fc1',
        'chart-2': '#19c2b8',
        'chart-3': '#2aa9e0',
        'chart-4': '#22A87e',
        'chart-5': '#7ad74a',
        'chart-6': '#f2c14e',
        'chart-7': '#e45757',
        'chart-other': '#B6c2D1',
        'st-success': '#34d399',
        'st-warning': '#fbbf24',
        'st-danger': '#fb7185'
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px'
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config
