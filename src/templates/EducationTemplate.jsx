import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Education } from "../components/business/Education";

const EducationTemplate = ({ data }) => (
	<Education education={data.educations} fullView />
);

EducationTemplate.propTypes = {
	data: PropTypes.shape({
		educations: PropTypes.object.isRequired
	}).isRequired
};

export const query = graphql`
	query($id: String!) {
		educations(id: { eq: $id }) {
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
