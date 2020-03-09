import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => {
    const { name, type, startDate, endDate, link, description } = data.experiences;
    return (
        <div>
            <h1><a href={link}>{name}</a></h1>
            <h3>{type}</h3>
            <h6>{startDate} - {endDate}</h6>
            <p>{description}</p>
        </div>
    )
};

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
