import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { withChildren } from "../../shapes/withChildren";

const Container = styled.div`
	${tw`container mx-auto p-2 md:px-16`}
`;

const Background = styled.div`
	${tw`bg-gray-100`}
`;

export const Page = ({ children }) => (
	<Background>
		<Container>{children}</Container>
	</Background>
);

Page.propTypes = withChildren;
