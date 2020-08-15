import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";
import Img from "gatsby-image";

export const Left = styled.div`
	flex-basis: 40%;
	${tw`sm:mr-auto sm:text-left text-right`}
`;

export const Right = styled.div`
	flex-basis: 40%;
	${tw`sm:ml-auto text-right`}
`;

const LogoContainer = styled.div`
	inset: calc(50% - 4rem) auto auto 1rem;
	@media (min-width: 640px) {
		inset: 50% auto auto calc(50% - 5rem);
	}
	${tw`
		absolute
        bg-white rounded-full w-32 h-32 p-2
        sm:shadow-flat-r sm:w-40 sm:h-40 sm:p-4
    `};
`;

const Logo = styled(Img)`
	${tw`rounded-full`};
`;

const Background = styled.div`
	min-height: 10rem;
	${tw`
		bg-blue-500 shadow-flat-r rounded-lg relative
		flex p-4 text-gray-100 flex-col mb-10 justify-start items-end
		sm:flex-row sm:mb-24 sm:items-start
	`}
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
	imgFluid: PropTypes.object.isRequired,
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
