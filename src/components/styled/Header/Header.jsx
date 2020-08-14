import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";
import Img, { FluidObject } from "gatsby-image";

export const Left = styled.div`
	flex-basis: 40%;
	${tw`mr-auto`}
`;

export const Right = styled.div`
	flex-basis: 40%;
	${tw`ml-auto text-right`}
`;

const LogoContainer = styled.div`
	@media (min-width: 768px) {
		inset: 50% auto auto calc(50% - 5rem);
	}
	${tw`
        bg-white rounded-full w-20 h-20 p-2 self-center
        md:shadow-flat-r md:absolute md:w-40 md:h-40 md:p-4
    `};
`;

const Logo = styled(Img)`
	${tw`rounded-full`};
`;

const Background = styled.div`
	${tw`bg-blue-500 shadow-flat-r h-40 rounded-lg relative mb-24
    flex justify-start p-4 text-gray-100`}
`;

export const Header = ({ children, imgFluid }) => (
	<Background>
		<LogoContainer>
			<Logo fluid={imgFluid} />
		</LogoContainer>
		{children}
	</Background>
);

Header.propTypes = {
	imgFluid: PropTypes.instanceOf(FluidObject).isRequired,
	children: PropTypes.oneOfType([
		(props, propName, componentName) => {
			if (![Left, Right].includes(props[propName].type)) {
				return new Error(
					`You must use Left or Right component from Header for ${componentName}`
				);
			}
		},
		PropTypes.arrayOf((propValue, key, componentName) => {
			if (propValue.length > 2) {
				return new Error(
					`Too many children have been passed to ${componentName}`
				);
			}
			if (
				!propValue.every((element) =>
					[Left, Right].includes(element.type)
				)
			) {
				return new Error(
					`You must use Left or Right component from Header for ${componentName}`
				);
			}
		})
	]).isRequired
};
