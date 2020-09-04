import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";

import { withChildren } from "../../shapes/withChildren";
import { UnderlinedLink } from "../UnderlinedLink";

const SectionTitle = styled.h2`
	${tw`text-xl not-italic font-normal font-sans`}
`;

const SectionHeader = styled.div`
	${tw`sticky top-0 bg-no-op-gray-100 py-2 px-8 rounded-b-lg mb-4`}
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
				<UnderlinedLink
					to={sectionLink}
					title={`Show only ${sectionTitle.toLowerCase()}`}
				>
					<SectionTitle>{sectionTitle}</SectionTitle>
				</UnderlinedLink>
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
