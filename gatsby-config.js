module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: "./src/data/",
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
