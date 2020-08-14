import React from "react";
import PropTypes from "prop-types";

import { Education } from "../Education";
import { sortByStartDate } from "../../../utils/sorts";
import { ItemSeparator } from "../../styled/Separators";

export const EducationsList = ({ educations }) =>
	educations.sort(sortByStartDate).map((education, index) => (
		<div key={education.slug}>
			<Education education={education} />
			{index < educations.length - 1 && <ItemSeparator />}
		</div>
	));

EducationsList.propTypes = {
	educations: PropTypes.arrayOf({
		slug: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		qualification: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
		startDate: PropTypes.string.isRequired,
		endDate: PropTypes.string.isRequired,
		description: PropTypes.string,
		shortDescription: PropTypes.string
	}).isRequired
};
