import React from "react";
import { css } from "styled-components";
import tw from "twin.macro";
import { Link } from "gatsby";

import { withChildren } from "../../shapes/withChildren";

const styles = css`
	${tw`inline-flex flex-col`}
	&::after {
		content: "";
		width: calc(66% - 0.25rem);
		transition-duration: 200ms;
		transition-name: retractOnMouseOut;
		transition-timing-function: ease-out;
		${tw`border border-solid border-blue-500 ml-1`}
	}
	&:hover::after,
	&:focus::after {
		width: calc(100% - 0.25rem);
		transition-duration: 200ms;
		transition-name: extendOnMouseOn;
		transition-timing-function: ease-in;
		${tw`border-blue-400`}
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
`;

export const UnderlinedLink = ({ children, ...otherProps }) => (
	<Link css={styles} {...otherProps}>
		{children}
	</Link>
);

UnderlinedLink.propTypes = withChildren;

export const UnderlinedExternalLink = ({ children, ...otherProps }) => (
	<a css={styles} target="_blank" rel="noreferrer noopener" {...otherProps}>
		{children}
	</a>
);

UnderlinedExternalLink.propTypes = withChildren;
