import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";

import { withChildren } from "../../shapes/withChildren";

const SectionHeader = styled.div`
	${tw`sticky top-0 bg-gray-100 p-2 rounded-b-lg`}
`;

const SectionFlex = styled.div`
	${tw`flex flex-row`}
`;

const SectionTitle = styled.h2`
	&::after {
		content: "";
		width: 66%;
		${tw`border border-solid border-blue-500 ml-1`}
		animation-duration: 200ms;
		animation-name: retractOnMouseOut;
		animation-timing-function: ease-out;
	}
	&:hover::after {
		width: 100%;
		${tw`border-blue-400`}
		animation-duration: 200ms;
		animation-name: extendOnMouseOn;
		animation-timing-function: ease-in;
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

const SectionSeparator = styled.hr`
	width: 80%;
	${tw`my-6 mx-auto`}
`;

const SectionContainer = styled.div`
	${tw`mx-4`}
`;

export const Section = ({
	children,
	withHeader,
	sectionTitle,
	sectionLink
}) => (
	<div>
		{withHeader && (
			<SectionHeader>
				<SectionFlex>
					<SectionTitle>
						<a href={sectionLink}>{sectionTitle}</a>
					</SectionTitle>
				</SectionFlex>
			</SectionHeader>
		)}
		<SectionContainer>{children}</SectionContainer>
		<SectionSeparator />
	</div>
);

Section.propTypes = {
	...withChildren,
	withHeader: PropTypes.bool,
	sectionTitle: PropTypes.string,
	sectionLink: PropTypes.string
};
