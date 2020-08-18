import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "gatsby";

import { withChildren } from "../../shapes/withChildren";

const FlexContainer = styled.div`
	${tw`flex flex-row`}
`;

const StyledLink = styled(Link)`
	&::after {
		content: "";
		width: 66%;
		${tw`border border-solid border-blue-500 ml-1`}
		transition-duration: 200ms;
		transition-name: retractOnMouseOut;
		transition-timing-function: ease-out;
	}
	&:hover::after,
	&:focus::after {
		width: 100%;
		${tw`border-blue-400`}
		transition-duration: 200ms;
		transition-name: extendOnMouseOn;
		transition-timing-function: ease-in;
	}
	@keyframes extendOnMouseOn {
		from {
			width: 66%;
			${tw`border-blue-500`}
		}
		to {
			width: 100%;
			${tw`border-blue-400`}
		}
	}
	@keyframes retractOnMouseOut {
		from {
			width: 100%;
			${tw`border-blue-400`}
		}
		to {
			width: 66%;
			${tw`border-blue-500`}
		}
	}
	display: flex;
	flex-direction: column;
`;

export const UnderlinedLink = ({ children, ...otherProps }) => (
	<FlexContainer>
		<StyledLink {...otherProps}>{children}</StyledLink>
	</FlexContainer>
);

UnderlinedLink.propTypes = withChildren;
