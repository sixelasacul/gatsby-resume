import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Page, PageTitle, PageHeader } from "../components/styled/Page";
import { SkillsCategoriesList } from "../components/business/SkillsCategoriesList";

const Skills = ({ data }) => (
	<Page>
		<PageHeader withBackButton>
			<PageTitle>Skills</PageTitle>
		</PageHeader>
		<SkillsCategoriesList skillsCategories={data.allSkills.nodes} />
	</Page>
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
