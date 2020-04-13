import React from "react";
import PropTypes from "prop-types";
import { sortSkillsByOrderNumber } from "../utils/sortSkills";

const SkillsCategory = ({ category, skills }) => (
	<>
		<p>{category}</p>
		<p>
			{skills
				.sort(sortSkillsByOrderNumber)
				.map((skill) => skill.name)
				.join(", ")}
		</p>
	</>
);

SkillsCategory.propTypes = {
	category: PropTypes.string.isRequired,
	skills: PropTypes.arrayOf({
		name: PropTypes.string.isRequired,
		order: PropTypes.number.isRequired
	}).isRequired
};

export default SkillsCategory;
