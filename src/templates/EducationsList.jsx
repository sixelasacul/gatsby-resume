import React from "react";
import { graphql } from "gatsby";
import EducationsList from "../components/EducationsList";

export default ({ data }) => <EducationsList educations={data.allEducations.nodes} />

export const query = graphql`
    query {
        allEducations {
            nodes {
                slug
                endDate
                link
                name
                shortDescription
                startDate
                type
                qualification
            }
          }
    }
`;
