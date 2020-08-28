import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Page } from "../components/styled/Page";
import { ExperiencesList } from "../components/business/ExperiencesList";

const Experiences = ({ data }) => (
	<Page withBreadcrumbs>
		<ExperiencesList
			experiences={data.allExperiences.nodes}
			withHeader={false}
		/>
	</Page>
);

Experiences.propTypes = {
	data: PropTypes.shape({
		allExperiences: PropTypes.shape({
			nodes: PropTypes.array.isRequired
		}).isRequired
	}).isRequired
};

export const query = graphql`
	query {
		allExperiences {
			nodes {
				slug
				endDate
				link
				name
				shortDescription
				startDate
				type
			}
		}
	}
`;

export default Experiences;
