import React from "react";

import { useBreadCrumbs } from "../../../hooks/useBreadcrumbs";
import { InlineListItem } from "../../styled/InlineList";
import {
	ListItemWithSeparator,
	ColoredList,
	ColoredUnderlinedLink,
	Title
} from "./Breadcrumbs.styled";

export const Breadcrumbs = () => {
	const breadcrumbs = useBreadCrumbs();
	return (
		<nav>
			<ColoredList>
				{breadcrumbs.map(({ path, name, isCurrent }) =>
					isCurrent ? (
						<InlineListItem key={path}>
							<Title>{name}</Title>
						</InlineListItem>
					) : (
						<ListItemWithSeparator key={path}>
							<ColoredUnderlinedLink to={path}>
								{name}
							</ColoredUnderlinedLink>
						</ListItemWithSeparator>
					)
				)}
			</ColoredList>
		</nav>
	);
};
