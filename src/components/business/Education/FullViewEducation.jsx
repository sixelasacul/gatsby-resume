import React from "react";

import { TitleSection } from "../../styled/Individual";
import { Education as EducationShape } from "../../shapes/Education";
import { prettyPrintDate } from "../../../utils/dates";

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
			<TitleSection title={qualification} location={name} link={link} />
			<h6>
				{prettyPrintDate(startDate)} - {prettyPrintDate(endDate)}
			</h6>
			<p>{description}</p>
		</>
	);
};

FullViewEducation.propTypes = {
	education: EducationShape.isRequired
};
