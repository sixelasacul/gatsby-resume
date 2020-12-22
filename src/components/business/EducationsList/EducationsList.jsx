import React from "react";
import PropTypes from "prop-types";

import { Education } from "../Education";
import { sortByStartDate } from "../../../utils/sorts";
import { ItemSeparator } from "../../styled/Separators";
import { Section } from "../../styled/Section";
import { Card } from "../../styled/Card";

export const EducationsList = ({ educations, withHeader = false }) => (
	<Section
		withHeader={withHeader}
		sectionTitle="Educations"
		sectionLink="/educations"
	>
		{educations.sort(sortByStartDate).map((education, index) => (
			<div key={education.slug}>
				<Card>
					<Education education={education} />
				</Card>
				{index < educations.length - 1 && <ItemSeparator />}
			</div>
		))}
	</Section>
);

EducationsList.propTypes = {
	educations: PropTypes.arrayOf(
		PropTypes.shape({
			slug: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			qualification: PropTypes.string.isRequired,
			link: PropTypes.string.isRequired,
			startDate: PropTypes.string.isRequired,
			endDate: PropTypes.string.isRequired,
			description: PropTypes.string,
			shortDescription: PropTypes.string
		})
	).isRequired,
	withHeader: PropTypes.bool
};
