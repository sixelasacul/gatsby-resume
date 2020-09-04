// const defaultConfig = require("tailwindcss/defaultConfig");
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const replaceColorsWithoutOpacity = (prefix, cssRule, colors) => {
	const colorsWithoutOpacity = {};
	for (const [colorGroupKey, colorGroupValue] of Object.entries(colors)) {
		if (typeof colorGroupValue !== "object") {
			const value = {};
			value[cssRule] = colorGroupValue;
			colorsWithoutOpacity[`.${prefix}-no-op-${colorGroupKey}`] = value;
			continue;
		}
		for (const [colorKey, colorValue] of Object.entries(colorGroupValue)) {
			const value = {};
			value[cssRule] = colorValue;
			colorsWithoutOpacity[
				`.${prefix}-no-op-${colorGroupKey}-${colorKey}`
			] = value;
		}
	}
	return colorsWithoutOpacity;
};

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
	variants: {
		// backgroundColor: [
		// 	...defaultConfig.variants.backgroundColor,
		// 	"supports-var-opacity"
		// ],
		// borderColor: [
		// 	...defaultConfig.variants.borderColor,
		// 	"supports-var-opacity"
		// ]
	},
	plugins: [
		plugin(({ addUtilities, theme }) => {
			/**
			 * Utility replacement for background-color without using
			 * variable for opacity.
			 */
			addUtilities(
				replaceColorsWithoutOpacity(
					"bg",
					"background-color",
					theme("colors")
				)
			);
		}),
		plugin(({ addUtilities, theme }) => {
			/**
			 * Utility replacement for border-color without using
			 * variable for opacity.
			 */
			addUtilities(
				replaceColorsWithoutOpacity(
					"border",
					"border-color",
					theme("colors")
				)
			);
		})
		// plugin(({ addVariant, postcss, e }) => {
		// 	addVariant("supports-var-opacity", ({ container, separator }) => {
		// 		const supportsRule = postcss.atRule({
		// 			name: "supports",
		// 			param: "(background-color: rgba(0,0,0,var(--bg-opacity)))"
		// 		});
		// 		supportsRule.append(container.nodes);
		// 		container.append(supportsRule);
		// 		supportsRule.walkRules((rule) => {
		// 			rule.selector = `.${e(
		// 				`supports-var-opacity${separator}${rule.selector.slice(
		// 					1
		// 				)}`
		// 			)}`;
		// 		});
		// 	});
		// })
	]
};
