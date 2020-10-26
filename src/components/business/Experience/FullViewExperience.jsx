import React from "react";

import { TitleSection } from "../../styled/Individual";
import { Experience as ExperienceShape } from "../../shapes/Experience";
import { prettyPrintDate } from "../../../utils/dates";

export const FullViewExperience = ({ experience }) => {
	const { name, type, link, startDate, endDate, description } = experience;

	return (
		<>
			<TitleSection title={type} location={name} link={link} />

			<h6>
				{prettyPrintDate(startDate)} - {prettyPrintDate(endDate)}
			</h6>
			<p>{description}</p>
		</>
	);
};

FullViewExperience.propTypes = {
	experience: ExperienceShape.isRequired
};
