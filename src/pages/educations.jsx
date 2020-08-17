import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { EducationsList } from "../components/business/EducationsList";

const Educations = ({ data }) => (
	<>
		<h1>Educations</h1>
		<EducationsList
			educations={data.allEducations.nodes}
			withHeader={false}
		/>
	</>
);

Educations.propTypes = {
	data: PropTypes.shape({
		allEducations: PropTypes.shape({
			nodes: PropTypes.array.isRequired
		}).isRequired
	}).isRequired
};

export const query = graphql`
	query {
		allEducations {
			nodes {
				slug
				endDate
				link
				name
				shortDescription
				startDate
				type
				qualification
			}
		}
	}
`;

export default Educations;
