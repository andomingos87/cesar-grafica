import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5722',
        secondary: '#F8F9FA',
        text: {
          primary: '#1A1A1A',    // Texto principal mais escuro
          secondary: '#4B5563',  // Texto secundário mais escuro
          muted: '#6B7280',      // Texto auxiliar ainda legível
        },
        success: '#28A745',
        background: '#FFFFFF',
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        sidebar: '240px',
      },
    },
  },
  plugins: [],
}

export default config;
