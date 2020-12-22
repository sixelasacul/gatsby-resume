import React from "react";
import { Link } from "gatsby";

import { Education as EducationShape } from "../../shapes/Education";
import { prettyPrintDate } from "../../../utils/dates";

export const Education = ({ education }) => {
	const {
		slug,
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
			<h1>{qualification}</h1>
			<h2>
				<a href={link}>{name}</a>
			</h2>
			<h3>{type}</h3>
			<h6>
				{prettyPrintDate(startDate)} - {prettyPrintDate(endDate)}
			</h6>
			<p>{description}</p>
			<Link to={`/educations/${slug}/`}>More</Link>
		</>
	);
};

Education.propTypes = {
	education: EducationShape.isRequired
};
