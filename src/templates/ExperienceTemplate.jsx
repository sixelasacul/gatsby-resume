import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Page } from "../components/styled/Page";
import { Individual } from "../components/styled/Individual";
import { Experience } from "../components/business/Experience";
import { Experience as ExperienceShape } from "../components/shapes/Experience";

const ExperienceTemplate = ({ data }) => (
	<Page withBreadcrumbs>
		<Individual>
			<Experience experience={data.experiences} fullView />
		</Individual>
	</Page>
);

ExperienceTemplate.propTypes = {
	data: PropTypes.shape({
		experiences: ExperienceShape.isRequired
	}).isRequired
};

export const query = graphql`
	query($id: String!) {
		experiences(id: { eq: $id }) {
			slug
			name
			type
			startDate
			endDate
			link
			description
		}
	}
`;

export default ExperienceTemplate;
