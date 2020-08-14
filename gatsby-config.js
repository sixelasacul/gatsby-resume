module.exports = {
	plugins: [
		"gatsby-plugin-styled-components",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: "./src/data/"
			}
		},
		{
			resolve: "gatsby-transformer-json",
			options: {
				typeName: ({ node }) => node.name
			}
		}
	]
};
