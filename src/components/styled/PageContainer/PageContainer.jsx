import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
	${tw`container mx-auto px-16`}
`;

const Background = styled.div`
	${tw`bg-gray-100`}
`;

export const PageContainer = ({ children }) => (
	<Background>
		<Container>{children}</Container>
	</Background>
);

PageContainer.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]).isRequired
};
