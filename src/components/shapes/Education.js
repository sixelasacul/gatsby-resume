import PropTypes from "prop-types";

export const Education = PropTypes.shape({
	slug: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	qualification: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	startDate: PropTypes.string.isRequired,
	endDate: PropTypes.string.isRequired,
	description: PropTypes.string,
	shortDescription: PropTypes.string
});
