import React from "react";
import PropTypes from "prop-types";

const Information = ({ information }) => {
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
			<p>{firstname + "  " + lastname}</p>
			<p>{birthdate}</p>
			<p>{emailAddress}</p>
			<p>{phoneNumber}</p>
			<p>{nationality}</p>
			<p>{residence}</p>
			<>
				{links.map((link, index) => (
					<a href={link.url} key={index}>
						{link.name}
					</a>
				))}
			</>
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
	}).isRequired
};

export default Information;
