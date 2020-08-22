import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";
import { navigate } from "@reach/router";

import { withChildren } from "../../shapes/withChildren";
import { UnderlinedExternalLink } from "../UnderlinedLink";
import { SectionSeparator } from "../Separators";

const Container = styled.div`
	${tw`container mx-auto p-2 md:px-16 min-h-screen`}
`;

const Background = styled.div`
	${tw`bg-gray-100`}
`;

const HeaderFlex = styled.div`
	${tw`mt-2 pt-2 mb-4 pb-4 flex flex-row justify-between items-center sticky top-0 bg-gray-100`}
`;

const HeaderChild = styled.div`
	flex-basis: 20%;
`;

const BackButton = styled.button`
	${tw`text-blue-700 text-4xl leading-none p-2 font-thin`}
`;

export const PageHeader = ({ children, withBackButton = false }) => (
	<HeaderFlex>
		<HeaderChild>
			{withBackButton && (
				<BackButton onClick={() => navigate(-1)}>{"<"}</BackButton>
			)}
		</HeaderChild>
		{children}
		<HeaderChild />
	</HeaderFlex>
);

PageHeader.propTypes = { ...withChildren, withBackButton: PropTypes.bool };

export const PageTitle = styled.h1`
	flex-basis: 50%;
	${tw`text-3xl text-center text-blue-700 font-thin`}
`;

const Footer = styled.p`
	${tw`text-gray-400 text-sm text-center`}
`;

const GrayLink = styled(UnderlinedExternalLink)`
	&::after {
		${tw`border-gray-400`}
	}

	&:hover::after,
	&:focus::after {
		${tw`border-gray-300`}
	}
`;

export const Page = ({ children }) => (
	<Background>
		<Container>
			{children}
			<SectionSeparator />
			<Footer>
				Made with{" "}
				<GrayLink href="https://www.gatsbyjs.com/">Gatsby</GrayLink> and{" "}
				<GrayLink href="https://tailwindcss.com/">Tailwind</GrayLink> by
				Alexis Lucas. Source code available on{" "}
				<GrayLink href="https://github.com/sixelasacul/gatsby-resume">
					GitHub
				</GrayLink>
				.
			</Footer>
		</Container>
	</Background>
);

Page.propTypes = withChildren;
