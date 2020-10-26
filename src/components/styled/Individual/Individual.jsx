import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";

import { UnderlinedExternalLink } from "../UnderlinedLink";

export const Individual = styled.div`
	${tw`bg-blue-500 mx-4 text-white p-8 shadow-flat-r-xl rounded-lg grid gap-4`}
`;

const Section = styled.div`
	${tw`flex flex-col justify-start items-center`}
`;
const Type = styled.h3`
	${tw`text-2xl`}
`;
const At = styled.span`
	${tw`text-sm`}
`;
const CompanyLink = styled(UnderlinedExternalLink)`
	${tw`text-3xl`}

	&::after {
		${tw`border-blue-200`}
	}

	&:hover::after,
	&:focus::after {
		${tw`border-blue-100`}
	}
`;

export const TitleSection = ({ title, location, link }) => (
	<>
		<Section>
			<Type>
				{title} <At>at</At>
			</Type>

			<CompanyLink href={link}>{location}</CompanyLink>
		</Section>
	</>
);

TitleSection.propTypes = {
	title: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired
};
