/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
  ],
	theme: {
		extend: {
			screens: {
        'max-1480': { max: '1480px' },
      },
			colors: {
				customBlack: '#1c1d1c',
				customGray: '#424242'
			},
			lineHeight: {
        '1.25': '1.25',
        '1.5': '1.5',
      },
		},
	},
  plugins: [],
}

