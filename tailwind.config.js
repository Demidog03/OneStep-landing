/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animatedSettings: {
      animatedSpeed: 1000,
      heartBeatSpeed: 500,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 500,
      classes: ['bounce', 'heartBeat', 'fadeInDown', 'delay-1s', 'delay-0.5s', 'fadeInUp', 'delay-2s', 'slow', 'slower', 'fadeIn']
    },
    extend: {
      saturate: {
        25: '.25',
        75: '.75',
        100: '1',
        120: '1.2',
      },
      dropShadow: {
        'textBlue': [
          '0px 0px 7px rgba(16,40,68,0.8)'
        ],
        'textWhite': [
          '0px 0px 5px rgba(255,255,255,1)'
        ]
      },
      keyframes: {
        blurImageOut: {
          '0%': { filter: 'blur(50px) saturate(50%)' },
          '50%': { filter: 'blur(10px) saturate(50%)' },
          '100%': { filter: 'blur(0) saturate(120%)' },
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animatecss'),
  ],
}
