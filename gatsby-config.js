module.exports = {
	plugins: [
		"gatsby-plugin-percy",
		"gatsby-plugin-styled-components",
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
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
