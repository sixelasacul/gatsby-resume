import PropTypes from "prop-types";

export const withChildren = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]).isRequired
};
