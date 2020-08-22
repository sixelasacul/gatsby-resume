import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { Education as EducationShape } from "../../shapes/Education";
import { prettyPrintDate } from "../../../utils/dates";

export const Education = ({ education, fullView = false }) => {
	const {
		slug,
		name,
		type,
		qualification,
		startDate,
		endDate,
		link,
		description,
		shortDescription
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
			<p>{fullView ? description : shortDescription}</p>
			{!fullView && <Link to={`/educations/${slug}/`}>More</Link>}
		</>
	);
};

Education.propTypes = {
	fullView: PropTypes.bool,
	education: EducationShape.isRequired
};
