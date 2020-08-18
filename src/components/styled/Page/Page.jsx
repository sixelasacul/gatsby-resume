import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "gatsby";

import { withChildren } from "../../shapes/withChildren";

const Container = styled.div`
	${tw`container mx-auto p-2 md:px-16 min-h-screen`}
`;

const Background = styled.div`
	${tw`bg-gray-100`}
`;

const PageHeaderFlex = styled.div`
	${tw`mt-2 pt-2 mb-4 pb-4 flex flex-row justify-between items-center sticky top-0 bg-gray-100`}
`;

const PageHeaderChild = styled.div`
	flex-basis: 20%;
`;

const PageBackButton = styled(Link)`
	${tw`text-blue-700 text-4xl leading-none p-2 font-thin`}
`;

export const PageHeader = ({ children, withBackButton = false }) => (
	<PageHeaderFlex>
		<PageHeaderChild>
			{withBackButton && <PageBackButton to="/">{"<"}</PageBackButton>}
		</PageHeaderChild>
		{children}
		<PageHeaderChild />
	</PageHeaderFlex>
);

PageHeader.propTypes = { ...withChildren, withBackButton: PropTypes.bool };

export const PageTitle = styled.h1`
	flex-basis: 50%;
	${tw`text-3xl text-center text-blue-700 font-thin`}
`;

export const Page = ({ children }) => (
	<Background>
		<Container>{children}</Container>
	</Background>
);

Page.propTypes = withChildren;
