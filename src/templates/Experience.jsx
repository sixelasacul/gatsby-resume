import React from "react";
import { graphql } from "gatsby";
import Experience from "../components/Experience";

export default ({ data }) => <Experience experience={data.experiences} fullView />

export const query = graphql`
  query($id: String!) {
    experiences(id: {eq: $id}) {
      name
      type
      startDate
      endDate
      link
      description
    }
  }
`;
