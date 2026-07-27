/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lavender: {
          DEFAULT: '#CDB4FF',
          light: '#E4D6FF',
          dark: '#9E7FE0',
        },
        purple: {
          soft: '#B8A1E8',
        },
        pink: {
          pastel: '#FFC1E3',
          deep: '#F98FC4',
        },
        peach: {
          DEFAULT: '#FFD8B8',
          deep: '#FFBE93',
        },
        cream: '#FFF9F2',
        paper: '#FBF6FF',
        ink: '#4A3F6B',
        muted: '#8A7FA3',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        accent: ['"Dancing Script"', 'cursive'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'dreamy-gradient': 'linear-gradient(135deg, #CDB4FF 0%, #FFC1E3 55%, #FFD8B8 100%)',
        'dreamy-gradient-soft': 'linear-gradient(135deg, #E4D6FF 0%, #FFE3F1 55%, #FFEBD9 100%)',
      },
      boxShadow: {
        soft: '0 8px 30px -8px rgba(157, 127, 224, 0.35)',
        glow: '0 0 40px -8px rgba(205, 180, 255, 0.55)',
      },
      borderRadius: {
        blob: '42% 58% 65% 35% / 45% 40% 60% 55%',
        '4xl': '2.5rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(4deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blobMove: {
          '0%, 100%': { borderRadius: '42% 58% 65% 35% / 45% 40% 60% 55%', transform: 'rotate(0deg) scale(1)' },
          '50%': { borderRadius: '58% 42% 38% 62% / 55% 62% 38% 45%', transform: 'rotate(8deg) scale(1.04)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.25, transform: 'scale(0.85)' },
          '50%': { opacity: 1, transform: 'scale(1.15)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        blobMove: 'blobMove 12s ease-in-out infinite',
        twinkle: 'twinkle 3.2s ease-in-out infinite',
        spinSlow: 'spinSlow 22s linear infinite',
      },
    },
  },
  plugins: [],
};
