/** @type {import('tailwindcss').Config} */

import { ThemeColor } from './utils/styleVariables';
module.exports = {
  content: [
    // Ensure this points to your source code
    // Do the same with `components`, `hooks`, `styles`, or any other top-level directories
    './app/**/*.{js,tsx,ts,jsx}',
    './components/**/*.{js,tsx,ts,jsx}',
    './hooks/**/*.{js,tsx,ts,jsx}',
    './styles/**/*.{js,tsx,ts,jsx}',
    // If you use a `src` directory, add: './src/**/*.{js,tsx,ts,jsx}'
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: ThemeColor.primary,
        secondary: ThemeColor.secondary,
      },
    },
  },
  plugins: [],
};
