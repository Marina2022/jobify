/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',// общие компоненты
    './app/**/*.{js,ts,jsx,tsx}',       // если используешь папку app (Next.js 13+)
  ],
  theme: {
    extend: {
      colors: {
        //primary: '#4F46E5', // добавим свою палитру
        // primary: '#aca9d4', // добавим свою палитру
        // secondary: '#9333EA',
      },
      fontFamily: {
        // sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),     // полезный плагин для стилей форм
    require('@tailwindcss/typography') // для красивого форматирования текста
  ],
}
