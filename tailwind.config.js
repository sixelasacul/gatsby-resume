const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: [],
	theme: {
		extend: {
			boxShadow: {
				"flat-r": "5px 5px 0 0 rgba(0, 0, 0, 0.1)",
				"flat-l": "-5px 5px 0 0 rgba(0, 0, 0, 0.1)"
			},
			inset: {
				"1/2": "50%"
			},
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
				serif: ["Roboto Slab", ...defaultTheme.fontFamily.serif],
				mono: ["Fira Code", ...defaultTheme.fontFamily.mono]
			}
		}
	},
	variants: {},
	plugins: []
};
