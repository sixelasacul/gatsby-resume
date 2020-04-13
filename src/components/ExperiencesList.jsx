import React from "react";
import PropTypes from "prop-types";
import Experience from "./Experience";

const ExperiencesList = ({ experiences }) =>
	experiences.map((experience, index) => (
		<>
			<Experience experience={experience} />
			{index < experiences.length - 1 && <hr />}
		</>
	));

ExperiencesList.propTypes = {
	experiences: PropTypes.arrayOf({
		slug: PropTypes.number,
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
		startDate: PropTypes.string.isRequired,
		endDate: PropTypes.string.isRequired,
		description: PropTypes.string,
		shortDescription: PropTypes.string
	}).isRequired
};

export default ExperiencesList;
