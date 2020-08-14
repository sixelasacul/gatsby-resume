import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Information } from "../components/business/Information";
import { ExperiencesList } from "../components/business/ExperiencesList";
import { SkillsCategoriesList } from "../components/business/SkillsCategoriesList";
import { EducationsList } from "../components/business/EducationsList";
import { PageContainer } from "../components/styled/PageContainer";

const Home = ({ data }) => {
	const { information, allExperiences, allSkills, allEducations } = data;
	return (
		<PageContainer>
			<Information information={information} />
			<hr />
			<hr />
			<ExperiencesList experiences={allExperiences.nodes} />
			<hr />
			<hr />
			<SkillsCategoriesList skillsCategories={allSkills.nodes} />
			<hr />
			<hr />
			<EducationsList educations={allEducations.nodes} />
		</PageContainer>
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
	}
`;

export default Home;
