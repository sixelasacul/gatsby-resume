import React from "react";

import { HeadSection } from "../../styled/Individual";
import { Experience as ExperienceShape } from "../../shapes/Experience";
import { prettyPrintDate, prettyPrintTimespan } from "../../../utils/dates";

export const FullViewExperience = ({ experience }) => {
	const { name, type, link, startDate, endDate, description } = experience;

	return (
		<>
			<HeadSection title={type} location={name} link={link} />

			<h6>
				{prettyPrintDate(startDate)} - {prettyPrintDate(endDate)} (
				{prettyPrintTimespan(startDate, endDate)})
			</h6>

			<p>{description}</p>
		</>
	);
};

FullViewExperience.propTypes = {
	experience: ExperienceShape.isRequired
};
