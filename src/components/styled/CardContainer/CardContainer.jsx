import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";

export const LeadPosition = Object.freeze({
	LEFT: "left",
	RIGHT: "right"
});

const CardBackground = styled.div`
	box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.1);
	${tw`bg-white rounded-lg flex flex-row m-4`}
`;

const CardLead = styled.div`
	${tw`flex-none w-10 bg-blue-500 rounded-l-lg`}
`;

const CardContent = styled.div`
	${tw`p-4`}
`;

export const CardContainer = ({
	leadPosition = LeadPosition.LEFT,
	children
}) => (
	<CardBackground leadPosition={leadPosition}>
		<CardLead leadPosition={leadPosition} />
		<CardContent>{children}</CardContent>
	</CardBackground>
);

CardContainer.propTypes = {
	leadPosition: PropTypes.oneOf(Object.values(LeadPosition)),
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]).isRequired
};
