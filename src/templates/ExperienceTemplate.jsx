import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Page, PageHeader, PageTitle } from "../components/styled/Page";
import { Individual } from "../components/styled/Individual";
import { Experience } from "../components/business/Experience";
import { Experience as ExperienceShape } from "../components/shapes/Experience";

const ExperienceTemplate = ({ data }) => (
	<Page>
		<PageHeader withBackButton>
			<PageTitle>{data.experiences.name}</PageTitle>
		</PageHeader>
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
