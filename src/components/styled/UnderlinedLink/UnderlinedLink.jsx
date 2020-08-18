import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Link } from "gatsby";

import { withChildren } from "../../shapes/withChildren";

const FlexContainer = styled.div`
	${tw`flex flex-row inline-block`}
`;

const styles = css`
	&::after {
		content: "";
		width: calc(66% - 0.25rem);
		${tw`border border-solid border-blue-500 ml-1`}
		transition-duration: 200ms;
		transition-name: retractOnMouseOut;
		transition-timing-function: ease-out;
	}
	&:hover::after,
	&:focus::after {
		width: calc(100% - 0.25rem);
		${tw`border-blue-400`}
		transition-duration: 200ms;
		transition-name: extendOnMouseOn;
		transition-timing-function: ease-in;
	}
	@keyframes extendOnMouseOn {
		from {
			width: calc(66% - 0.25rem);
			${tw`border-blue-500`}
		}
		to {
			width: calc(100% - 0.25rem);
			${tw`border-blue-400`}
		}
	}
	@keyframes retractOnMouseOut {
		from {
			width: calc(100% - 0.25rem);
			${tw`border-blue-400`}
		}
		to {
			width: calc(66% - 0.25rem);
			${tw`border-blue-500`}
		}
	}
	display: flex;
	flex-direction: column;
`;

export const UnderlinedLink = ({ children, ...otherProps }) => (
	<FlexContainer>
		<Link css={styles} {...otherProps}>
			{children}
		</Link>
	</FlexContainer>
);

UnderlinedLink.propTypes = withChildren;

export const UnderlinedExternalLink = ({ children, ...otherProps }) => (
	<FlexContainer>
		<a
			css={styles}
			target="_blank"
			rel="noreferrer noopener"
			{...otherProps}
		>
			{children}
		</a>
	</FlexContainer>
);

UnderlinedExternalLink.propTypes = withChildren;
