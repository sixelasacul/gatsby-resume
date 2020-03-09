import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => {
  const { name, type, qualification, startDate, endDate, link, description } = data.educations;
  return (
      <div>
          <h1>{qualification}</h1>
          <h2><a href={link}>{name}</a></h2>
          <h3>{type}</h3>
          <h6>{startDate} - {endDate}</h6>
          <p>{description}</p>
      </div>
  )
};

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
