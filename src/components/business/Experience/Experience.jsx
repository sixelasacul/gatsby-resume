import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { Experience as ExperienceShape } from "../../shapes/Experience";
import { prettyPrintDate } from "../../../utils/dates";

export const Experience = ({ experience, fullView = false }) => {
	const {
		slug,
		name,
		type,
		link,
		startDate,
		endDate,
		description,
		shortDescription
	} = experience;

	return (
		<>
			<h1>
				<a href={link}>{name}</a>
			</h1>
			<h3>{type}</h3>
			<h6>
				{prettyPrintDate(startDate)} - {prettyPrintDate(endDate)}
			</h6>
			<p>{fullView ? description : shortDescription}</p>
			{!fullView && <Link to={`experiences/${slug}/`}>More</Link>}
		</>
	);
};

Experience.propTypes = {
	fullView: PropTypes.bool,
	experience: ExperienceShape.isRequired
};
