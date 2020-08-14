import React from "react";
import PropTypes from "prop-types";
import { SkillsCategory } from "../SkillsCategory";

export const SkillsCategoriesList = ({ skillsCategories }) => (
	<>
		{skillsCategories.map((item, index) => (
			<SkillsCategory
				category={item.category}
				skills={item.skills}
				key={index}
			/>
		))}
	</>
);

SkillsCategoriesList.propTypes = {
	skillsCategories: PropTypes.arrayOf({
		category: PropTypes.string.isRequired,
		skills: PropTypes.array.isRequired
	}).isRequired
};
