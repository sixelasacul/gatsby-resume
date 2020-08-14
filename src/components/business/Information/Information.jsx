import React from "react";
import PropTypes from "prop-types";
import { FluidObject } from "gatsby-image";

import { Header } from "../../styled/Header";

export const Information = ({ information, profilePic }) => {
	const {
		firstname,
		lastname,
		birthdate,
		emailAddress,
		phoneNumber,
		nationality,
		residence,
		links
	} = information;
	return (
		<>
			<Header imgFluid={profilePic}>
				<Header.Left>
					<h2>{firstname + "  " + lastname}</h2>
					<p>{nationality}</p>
					<p>{birthdate}</p>
					<p>{residence}</p>
				</Header.Left>
				<Header.Right>
					<p>{emailAddress}</p>
					<p>{phoneNumber}</p>
					<>
						{links.map((link, index) => (
							<p key={link}>
								<a href={link.url} key={index}>
									{link.name}
								</a>
							</p>
						))}
					</>
				</Header.Right>
			</Header>
		</>
	);
};

Information.propTypes = {
	information: PropTypes.shape({
		firstname: PropTypes.string.isRequired,
		lastname: PropTypes.string.isRequired,
		birthdate: PropTypes.string.isRequired,
		emailAddress: PropTypes.string.isRequired,
		phoneNumber: PropTypes.string.isRequired,
		nationality: PropTypes.string.isRequired,
		residence: PropTypes.string.isRequired,
		links: PropTypes.arrayOf({
			name: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired
		}).isRequired
	}).isRequired,
	profilePic: PropTypes.instanceOf(FluidObject).isRequired
};
