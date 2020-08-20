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
		transition-property: border-color, width;
		transition-duration: 200ms;
		transition-timing-function: ease-out;
		${tw`border border-solid border-blue-500 ml-1`}
	}
	&:hover::after,
	&:focus::after {
		width: calc(100% - 0.25rem)
		transition-property: border-color, width;
		transition-duration: 200ms;
		transition-timing-function: ease-in;
		${tw`border-blue-400`}
	}
`;

export const UnderlinedLink = ({ children, ...otherProps }) => (
	<Link css={styles} {...otherProps}>
		{childre}
	</Link>
);

UnderlinedLink.propTypes = withChildren;

export const UnderlinedExternalLink = ({ children, ...otherProps }) => (
	<a css={styles} target="_blank" rel="noreferrer noopener" {...otherProps}>
		{children}
	</a>
);

UnderlinedExternalLink.propTypes = withChildren;
