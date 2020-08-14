import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { SkillsCategoriesList } from "../components/business/SkillsCategoriesList";

const Skills = ({ data }) => (
	<SkillsCategoriesList skillsCategories={data.allSkills.nodes} />
);

Skills.propTypes = {
	data: PropTypes.shape({
		allSkills: PropTypes.shape({
			nodes: PropTypes.array.isRequired
		}).isRequired
	}).isRequired
};

export const query = graphql`
	query {
		allSkills {
			nodes {
				category
				skills {
					name
					order
				}
			}
		}
	}
`;

export default Skills;
