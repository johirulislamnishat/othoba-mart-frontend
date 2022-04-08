module.exports = {
	content: ["./pages/**/*.{js,jsx,html}", "./components/**/*.{js,jsx,html}"],
	theme: {
		extend: {
			colors: {
				'blue' : '#524EB7'
			}
		},

		screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
		},
		
	},
	plugins: [],
};
