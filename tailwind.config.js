const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: [],
	theme: {
		extend: {
			boxShadow: {
				"flat-r": "5px 5px 0 0 rgba(0, 0, 0, 0.1)",
				"flat-r-md": "7px 7px 0 0 rgba(0, 0, 0, 0.1)",
				"flat-r-l": "9px 9px 0 0 rgba(0, 0, 0, 0.1)",
				"flat-r-xl": "13px 13px 0 0 rgba(0, 0, 0, 0.1)",
				"flat-l": "-5px 5px 0 0 rgba(0, 0, 0, 0.1)",
				"flat-l-md": "-7px 7px 0 0 rgba(0, 0, 0, 0.1)",
				"flat-l-l": "-9px 9px 0 0 rgba(0, 0, 0, 0.1)",
				"flat-l-xl": "-13px 13px 0 0 rgba(0, 0, 0, 0.1)"
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
