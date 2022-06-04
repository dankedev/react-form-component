module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'button-blue':'#3d5afe',
        'button-light-blue':'#2979ff',
        'button-green':'#4caf50',
        'button-light-green':'#8bc34a',
        'button-lime':'#cddc39',
        'button-red':'#f44336',
        'button-pink':'#e91e63',
        'button-purple':'#9c27b0',
        'button-deep-purple':'#673ab7',
        'button-teal':'#009688',
        'button-yellow':'#ffeb3b',
        'button-amber':'#ffc107',
        'button-orange':'#ff9800',
        'button-deep-orange':'#ff5722',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
