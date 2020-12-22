import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Page } from "../components/styled/Page";
import { LargeCard } from "../components/styled/Individual";
import { FullViewEducation } from "../components/business/Education";
import { Education as EducationShape } from "../components/shapes/Education";

const EducationTemplate = ({ data }) => (
	<Page withBreadcrumbs>
		<LargeCard>
			<FullViewEducation education={data.educations} />
		</LargeCard>
	</Page>
);

EducationTemplate.propTypes = {
	data: PropTypes.shape({
		educations: EducationShape.isRequired
	}).isRequired
};

export const query = graphql`
	query($id: String!) {
		educations(id: { eq: $id }) {
			slug
			name
			type
			qualification
			startDate
			endDate
			link
			description
		}
	}
`;

export default EducationTemplate;
