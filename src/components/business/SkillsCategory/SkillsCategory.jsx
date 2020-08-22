import React from "react";
import PropTypes from "prop-types";

import { sortByOrderNumber } from "../../../utils/sorts";

export const SkillsCategory = ({ category, skills }) => (
	<>
		<p>{category}</p>
		<p>
			{skills
				.sort(sortByOrderNumber)
				.map((skill) => skill.name)
				.join(", ")}
		</p>
	</>
);

SkillsCategory.propTypes = {
	category: PropTypes.string.isRequired,
	skills: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			order: PropTypes.number.isRequired
		})
	).isRequired
};
