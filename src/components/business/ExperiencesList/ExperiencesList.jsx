import React from "react";
import PropTypes from "prop-types";

import { Experience } from "../Experience";
import { sortByStartDate } from "../../../utils/sorts";
import { ItemSeparator } from "../../styled/Separators";
import { Section } from "../../styled/Section";
import { Card } from "../../styled/Card";

export const ExperiencesList = ({ experiences, withHeader = false }) => (
	<Section
		withHeader={withHeader}
		sectionTitle="Experiences"
		sectionLink="/experiences"
	>
		{experiences.sort(sortByStartDate).map((experience, index) => (
			<div key={experience.slug}>
				<Card>
					<Experience experience={experience} />
				</Card>
				{index < experiences.length - 1 && <ItemSeparator />}
			</div>
		))}
	</Section>
);

ExperiencesList.propTypes = {
	experiences: PropTypes.arrayOf(
		PropTypes.shape({
			slug: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			link: PropTypes.string.isRequired,
			startDate: PropTypes.string.isRequired,
			endDate: PropTypes.string.isRequired,
			description: PropTypes.string,
			shortDescription: PropTypes.string
		})
	).isRequired,
	withHeader: PropTypes.bool
};
