import React from "react";
import { graphql } from "gatsby";
import ExperiencesList from "../components/ExperiencesList";

export default ({ data }) => <ExperiencesList experiences={data.allExperiences.nodes} />

export const query = graphql`
    query {
        allExperiences {
            nodes {
                slug
                endDate
                link
                name
                shortDescription
                startDate
                type
            }
          }
    }
`;
