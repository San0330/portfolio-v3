import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      display: ["group-hover"],
      keyframes: {
        custom_ping: {
          "75%, 100%": { transform: 'scale(1.3)', opacity: '0' },
        },
        custom_bounce: {
          "0%, 100%": { transform: 'translateY(-10%)', 'animation-timing-function': "cubic-bezier(0.8,0,1,1)" },
          '50%': { transform: 'none', 'animation-timing-function': "cubic-bezier(0,0,0.2,1)" }
        }
      },
      animation: {
        'custom-ping': 'custom_ping 2s ease-in infinite',
        'custom-bounce': 'custom_bounce 1s infinite'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
export default config;
