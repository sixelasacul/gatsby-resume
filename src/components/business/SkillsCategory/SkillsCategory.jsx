import React from "react";
import PropTypes from "prop-types";

import { sortByOrderNumber } from "../../../utils/sorts";
import { Card } from "../../styled/Card";

export const SkillsCategory = ({ category, skills }) => (
	<Card>
		<p>{category}</p>
		<p>
			{skills
				.sort(sortByOrderNumber)
				.map((skill) => skill.name)
				.join(", ")}
		</p>
	</Card>
);

SkillsCategory.propTypes = {
	category: PropTypes.string.isRequired,
	skills: PropTypes.arrayOf({
		name: PropTypes.string.isRequired,
		order: PropTypes.number.isRequired
	}).isRequired
};
