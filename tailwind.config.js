import { addDynamicIconSelectors } from '@iconify/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './src/**/*.{js,jsx,ts,tsx}',
  './public/index.html'
],
  theme: {
    extend: {
      gridTemplateRows: {
        'sidebar': '64px 1fr',
      },
      textColor: {
        'muted-foreground': 'hsl(240 3.8% 46.1%)',
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
}
