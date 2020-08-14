import React from "react";
import PropTypes from "prop-types";

import { SkillsCategory } from "../SkillsCategory";
import { ItemSeparator } from "../../styled/Separators";

export const SkillsCategoriesList = ({ skillsCategories }) =>
	skillsCategories.map((item, index) => (
		<div key={item.category}>
			<SkillsCategory category={item.category} skills={item.skills} />
			{index < skillsCategories.length - 1 && <ItemSeparator />}
		</div>
	));

SkillsCategoriesList.propTypes = {
	skillsCategories: PropTypes.arrayOf({
		category: PropTypes.string.isRequired,
		skills: PropTypes.array.isRequired
	}).isRequired
};
