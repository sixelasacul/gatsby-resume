import React from "react";
import PropTypes from "prop-types";

import { SkillsCategory } from "../SkillsCategory";
import { ItemSeparator } from "../../styled/Separators";
import { Section } from "../../styled/Section";

export const SkillsCategoriesList = ({
	skillsCategories,
	withHeader = true
}) => (
	<Section
		withHeader={withHeader}
		sectionTitle="Skills"
		sectionLink="/skills"
	>
		{skillsCategories.map((item, index) => (
			<div key={item.category}>
				<SkillsCategory category={item.category} skills={item.skills} />
				{index < skillsCategories.length - 1 && <ItemSeparator />}
			</div>
		))}
	</Section>
);

SkillsCategoriesList.propTypes = {
	skillsCategories: PropTypes.arrayOf(
		PropTypes.shape({
			category: PropTypes.string.isRequired,
			skills: PropTypes.array.isRequired
		})
	).isRequired,
	withHeader: PropTypes.bool
};
