const path = require("path");

const templates = {
    "educations": {
        single: "Education",
        list: "EducationsList"
    },
    "experiences": {
        single: "Experience",
        list: "ExperiencesList"
    }
};
const getTemplatePath = template => `./src/templates/${template}.jsx`

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allEducations {
                nodes {
                    id
                    slug
                    internal {
                        type
                    }
                }
            }
            allExperiences {
                nodes {
                    id
                    slug
                    internal {
                        type
                    }
                }
            }
        }
    `);

    Object.keys(templates).map(type => {
        createPage({
            path: type,
            component: path.resolve(getTemplatePath(templates[type].list))
        });
    });

    const { data } = result;
    for(const source in data) {
        if(Object.prototype.hasOwnProperty.call(data, source)) {
            data[source].nodes.forEach(node => {
                const { id, slug, internal } = node;
                const { type } = internal;
                const fullSlug = `${type}/${slug}`;
                const template = getTemplatePath(templates[type].single)
                createPage({
                    path: fullSlug,
                    component: path.resolve(template),
                    context: {
                        id
                    }
                })
            });
        }
    }
};
