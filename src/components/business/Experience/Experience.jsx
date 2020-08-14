import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { prettyPrintDate } from "../../../utils/dates";
import { Card } from "../../styled/Card";

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
		<Card>
			<h1>
				<a href={link}>{name}</a>
			</h1>
			<h3>{type}</h3>
			<h6>
				{prettyPrintDate(startDate)} - {prettyPrintDate(endDate)}
			</h6>
			<p>{fullView ? description : shortDescription}</p>
			{!fullView && <Link to={`/experiences/${slug}`}>More</Link>}
		</Card>
	);
};

Experience.propTypes = {
	fullView: PropTypes.bool,
	experience: PropTypes.shape({
		slug: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
		startDate: PropTypes.string.isRequired,
		endDate: PropTypes.string.isRequired,
		description: PropTypes.string,
		shortDescription: PropTypes.string
	}).isRequired
};
