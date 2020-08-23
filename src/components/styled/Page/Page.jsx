import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";

import { withChildren } from "../../shapes/withChildren";
import { UnderlinedExternalLink } from "../UnderlinedLink";
import { Breadcrumbs } from "../../business/Breadcrumbs/Breadcrumbs";

const Container = styled.div`
	${tw`container mx-auto p-2 md:px-16 min-h-screen`}
`;

const Background = styled.div`
	${tw`bg-gray-100`}
`;

const StickyHeader = styled.div`
	${tw`mt-2 pt-2 mb-4 pb-4 sticky top-0 bg-gray-100`}
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

export const Page = ({ children, withBreadcrumbs = false }) => (
	<Background>
		<Container>
			{withBreadcrumbs && (
				<StickyHeader>
					<Breadcrumbs />
				</StickyHeader>
			)}
			{children}
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

Page.propTypes = { ...withChildren, withBreadcrumbs: PropTypes.bool };
