import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Education = ({ education, fullView = false }) => {
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
		<div>
			<h1>{qualification}</h1>
			<h2>
				<a href={link}>{name}</a>
			</h2>
			<h3>{type}</h3>
			<h6>
				{startDate} - {endDate}
			</h6>
			<p>{fullView ? description : shortDescription}</p>
			{!fullView && <Link to={`/educations/${slug}`}>More</Link>}
		</div>
	);
};

Education.propTypes = {
	fullView: PropTypes.bool,
	education: PropTypes.shape({
		slug: PropTypes.number,
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		qualification: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
		startDate: PropTypes.string.isRequired,
		endDate: PropTypes.string.isRequired,
		description: PropTypes.string,
		shortDescription: PropTypes.string
	}).isRequired
};

export default Education;
