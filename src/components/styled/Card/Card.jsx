import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";

import { withChildren } from "../../shapes/withChildren";

export const LeadPosition = Object.freeze({
	LEFT: "left",
	RIGHT: "right"
});

const CardBackground = styled.div`
	${tw`bg-no-op-white rounded-lg flex flex-row shadow-flat-r`}
`;

const CardLead = styled.div`
	${tw`flex-none w-10 bg-no-op-blue-500 rounded-l-lg`}
`;

const CardContent = styled.div`
	${tw`p-4`}
`;

export const Card = ({ leadPosition = LeadPosition.LEFT, children }) => (
	<CardBackground leadPosition={leadPosition}>
		<CardLead leadPosition={leadPosition} />
		<CardContent>{children}</CardContent>
	</CardBackground>
);

Card.propTypes = {
	...withChildren,
	leadPosition: PropTypes.oneOf(Object.values(LeadPosition))
};
