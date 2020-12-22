import React from "react";
import { string } from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";

import { UnderlinedExternalLink } from "../UnderlinedLink";

export const LargeCard = styled.div`
	${tw`bg-blue-500 mx-4 text-white p-8 shadow-flat-r-xl rounded-lg grid gap-4`}
`;

const InternalHeadSection = styled.div`
	${tw`flex flex-col justify-start items-center`}
`;
export const Title = styled.h3`
	${tw`text-3xl`}
`;
const SecondTitle = styled.h3`
	${tw`text-2xl`}
`;
const ThirdTitle = styled.h3`
	${tw`text-2xl`}
`;
const At = styled.span`
	${tw`text-sm`}
`;
const CompanyLink = styled(UnderlinedExternalLink)`
	&::after {
		${tw`border-blue-200`}
	}

	&:hover::after,
	&:focus::after {
		${tw`border-blue-100`}
	}
`;

export const HeadSection = ({ title, location, link, locationType }) => (
	<InternalHeadSection>
		<SecondTitle>
			{title} <At>at</At>
		</SecondTitle>

		<Title>
			<CompanyLink href={link}>{location}</CompanyLink>
		</Title>

		{locationType && <ThirdTitle>{locationType}</ThirdTitle>}
	</InternalHeadSection>
);

HeadSection.propTypes = {
	title: string.isRequired,
	location: string,
	link: string,
	locationType: string
};
