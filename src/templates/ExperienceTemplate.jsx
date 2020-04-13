import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Experience from "../components/Experience";

const ExperienceTemplate = ({ data }) => (
	<Experience experience={data.experiences} fullView />
);

ExperienceTemplate.propTypes = {
	data: PropTypes.shape({
		experiences: PropTypes.object.isRequired
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
