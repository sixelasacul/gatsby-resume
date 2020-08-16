import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Information } from "../components/business/Information";
import { ExperiencesList } from "../components/business/ExperiencesList";
import { SkillsCategoriesList } from "../components/business/SkillsCategoriesList";
import { EducationsList } from "../components/business/EducationsList";
import { Page } from "../components/styled/Page";

const Home = ({ data }) => {
	const { information, allExperiences, allSkills, allEducations } = data;
	return (
		<Page>
			<Information
				information={information}
				profilePic={data.file.childImageSharp.fluid}
			/>
			<ExperiencesList experiences={allExperiences.nodes} />
			<SkillsCategoriesList skillsCategories={allSkills.nodes} />
			<EducationsList educations={allEducations.nodes} />
		</Page>
	);
};

Home.propTypes = {
	data: PropTypes.shape({
		information: PropTypes.object.isRequired,
		allExperiences: PropTypes.shape({
			nodes: PropTypes.array.isRequired
		}).isRequired,
		allSkills: PropTypes.shape({
			nodes: PropTypes.array.isRequired
		}).isRequired,
		allEducations: PropTypes.shape({
			nodes: PropTypes.array.isRequired
		}).isRequired,
		file: PropTypes.shape({
			childImageSharp: PropTypes.shape({
				fluid: PropTypes.object.isRequired
			}).isRequired
		}).isRequired
	}).isRequired
};

export const query = graphql`
	query {
		information {
			birthdate
			emailAddress
			firstname
			lastname
			nationality
			residence
			phoneNumber
			links {
				name
				url
			}
		}
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
		allSkills {
			nodes {
				category
				skills {
					name
					order
				}
			}
		}
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
		file(relativePath: { eq: "head.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export default Home;
