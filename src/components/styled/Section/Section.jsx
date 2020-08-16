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

export const Section = ({ children, sectionTitle }) => (
	<div>
		<SectionHeader>
			<SectionFlex>
				<SectionTitle>{sectionTitle}</SectionTitle>
			</SectionFlex>
		</SectionHeader>
		<SectionContainer>{children}</SectionContainer>
		<SectionSeparator />
	</div>
);

Section.propTypes = {
	...withChildren,
	sectionTitle: PropTypes.string.isRequired
};
