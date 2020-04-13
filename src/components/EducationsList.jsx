import React from "react";
import PropTypes from "prop-types";
import Education from "./Education";

const EducationsList = ({ educations }) =>
	educations.map((education, index) => (
		<>
			<Education education={education} />
			{index < educations.length - 1 && <hr />}
		</>
	));

EducationsList.propTypes = {
	educations: PropTypes.arrayOf({
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

export default EducationsList;
