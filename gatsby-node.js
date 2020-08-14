const path = require("path");

const templates = {
	educations: "./src/templates/EducationTemplate.jsx",
	experiences: "./src/templates/ExperienceTemplate.jsx"
};

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

	const { data } = result;
	for (const source in data) {
		if (Object.prototype.hasOwnProperty.call(data, source)) {
			data[source].nodes.forEach((node) => {
				const { id, slug, internal } = node;
				const { type } = internal;
				createPage({
					path: `${type}/${slug}`,
					component: path.resolve(templates[type]),
					context: {
						id
					}
				});
			});
		}
	}
};
