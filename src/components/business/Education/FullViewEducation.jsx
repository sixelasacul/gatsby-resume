import React from "react";

import { HeadSection } from "../../styled/Individual";
import { Education as EducationShape } from "../../shapes/Education";
import { prettyPrintDate, prettyPrintTimespan } from "../../../utils/dates";

export const FullViewEducation = ({ education }) => {
	const {
		name,
		type,
		qualification,
		startDate,
		endDate,
		link,
		description
	} = education;

	return (
		<>
			<HeadSection
				title={qualification}
				location={name}
				link={link}
				locationType={type}
			/>

			<h6>
				{prettyPrintDate(startDate)} - {prettyPrintDate(endDate)} (
				{prettyPrintTimespan(startDate, endDate)})
			</h6>

			<p>{description}</p>
		</>
	);
};

FullViewEducation.propTypes = {
	education: EducationShape.isRequired
};
