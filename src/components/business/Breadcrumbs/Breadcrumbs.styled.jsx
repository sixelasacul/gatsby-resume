import styled from "styled-components";
import tw from "twin.macro";

import { InlineListItem } from "../../styled/InlineList";
import { UnderlinedLink } from "../../styled/UnderlinedLink";

export const ListItemWithSeparator = styled(InlineListItem)`
	&::after {
		content: "/";
		${tw`px-2`};
	}
`;

export const ColoredUnderlinedLink = styled(UnderlinedLink)`
	&::after {
		${tw`border-blue-700`}
	}

	&:hover::after,
	&:focus::after {
		${tw`border-blue-600`}
	}
`;

export const ColoredList = styled.ol`
	${tw`text-blue-700 font-thin`}
`;

export const Title = styled.h1`
	${tw`text-3xl`}
`;
