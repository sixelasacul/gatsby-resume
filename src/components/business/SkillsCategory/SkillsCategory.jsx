import React from "react";
import PropTypes from "prop-types";
import { sortByOrderNumber } from "../../../utils/sorts";
import { CardContainer } from "../../styled/CardContainer";

export const SkillsCategory = ({ category, skills }) => (
	<CardContainer>
		<p>{category}</p>
		<p>
			{skills
				.sort(sortByOrderNumber)
				.map((skill) => skill.name)
				.join(", ")}
		</p>
	</CardContainer>
);

SkillsCategory.propTypes = {
	category: PropTypes.string.isRequired,
	skills: PropTypes.arrayOf({
		name: PropTypes.string.isRequired,
		order: PropTypes.number.isRequired
	}).isRequired
};
