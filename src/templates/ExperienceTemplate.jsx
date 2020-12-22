import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Page } from "../components/styled/Page";
import { LargeCard } from "../components/styled/Individual";
import { FullViewExperience } from "../components/business/Experience";
import { Experience as ExperienceShape } from "../components/shapes/Experience";

const ExperienceTemplate = ({ data }) => (
	<Page withBreadcrumbs>
		<LargeCard>
			<FullViewExperience experience={data.experiences} fullView />
		</LargeCard>
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
