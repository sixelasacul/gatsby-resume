import { useLocation } from "@reach/router";
import { graphql, useStaticQuery } from "gatsby";
import { useMemo } from "react";

export const useBreadCrumbs = () => {
	const { pathname } = useLocation();
	const data = useStaticQuery(query);
	const sections = pathname.split("/").filter((value) => !!value);
	const { node: homeNode } = data.allBreadcrumbs.edges.find(
		({ node }) => node.relativePath === "/"
	);
	const home = {
		relativePath: homeNode.relativePath,
		name: homeNode.name
	};
	const foundBreadCrumbs = data.allBreadcrumbs.edges
		.filter(({ node }) => sections.includes(node.relativePath))
		.map(({ node }) => ({
			relativePath: node.relativePath,
			name: node.name
		}));
	return useMemo(
		() =>
			[home, ...foundBreadCrumbs].map(({ relativePath, name }) => {
				const index = sections.findIndex(
					(value) => value === relativePath
				);
				return {
					path:
						index === -1
							? relativePath
							: `/${sections.slice(0, index + 1).join("/")}`,
					name,
					isCurrent: index + 1 === sections.length
				};
			}),
		[sections, home, foundBreadCrumbs]
	);
};

const query = graphql`
	query {
		allBreadcrumbs {
			edges {
				node {
					name
					relativePath
				}
			}
		}
	}
`;
