const path = require("path");

const template = type => `./src/templates/${type}.js`;

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allEducations {
                edges {
                    node {
                        id
                        slug
                        internal {
                            type
                        }
                    }
                }
            }
            allExperiences {
                edges {
                    node {
                        id
                        slug
                        internal {
                            type
                        }
                    }
                }
            }
        }
    `);

    const { data } = result;
    for(const source in data) {
        if(Object.prototype.hasOwnProperty.call(data, source)) {
            data[source].edges.forEach(edge => {
                const { id, slug, internal } = edge.node;
                const { type } = internal;
                const fullSlug = `${type}/${slug}`;
                createPage({
                    path: fullSlug,
                    component: path.resolve(template(type)),
                    context: {
                        id
                    }
                })
            });
        }
    }
};
