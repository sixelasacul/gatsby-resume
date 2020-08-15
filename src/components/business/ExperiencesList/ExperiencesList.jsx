import React from "react";
import PropTypes from "prop-types";

import { Experience } from "../Experience";
import { sortByStartDate } from "../../../utils/sorts";
import { ItemSeparator } from "../../styled/Separators";
import { SectionHeader } from "../../styled/SectionHeader";

export const ExperiencesList = ({ experiences }) => (
	<div>
		<SectionHeader>Experiences</SectionHeader>
		{experiences.sort(sortByStartDate).map((experience, index) => (
			<div key={experience.slug}>
				<Experience experience={experience} />
				{index < experiences.length - 1 && <ItemSeparator />}
			</div>
		))}
	</div>
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
	).isRequired
};
