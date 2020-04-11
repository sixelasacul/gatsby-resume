import React from "react";
import { graphql } from "gatsby";
import Education from "../components/Education";

export default ({ data }) => <Education education={data.educations} fullView />

export const query = graphql`
  query($id: String!) {
    educations(id: {eq: $id}) {
      name
      type
      qualification
      startDate
      endDate
      link
      description
    }
  }
`;
