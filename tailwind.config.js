/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
 "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
        container: {
            center: true,
        },
    extend: {
      keyframes: {
        custom_ping: {
          "75%, 100%": { transform: 'scale(1.3)', opacity: '0' },
        },
        custom_bounce: {
          "0%, 100%": { transform: 'translateY(-10%)', 'animation-timing-function': "cubic-bezier(0.8,0,1,1)" },
          '50%': {transform: 'none', 'animation-timing-function': "cubic-bezier(0,0,0.2,1)"}
        }
      },
      animation: {
        'custom-ping': 'custom_ping 2s ease-in infinite',
        'custom-bounce': 'custom_bounce 1s infinite'
      },
        },
  },
  plugins: [],
}
