require("tailwindcss/dist/base.min.css");
require("./fonts.css");

const React = require("react");
const PropTypes = require("prop-types");

const { BaseStyles } = require("./src/components/styled/BaseStyles");

const Wrapper = ({ element }) => {
	return (
		<>
			<BaseStyles />
			{element}
		</>
	);
};

Wrapper.propTypes = {
	element: PropTypes.element
};

exports.wrapPageElement = Wrapper;
