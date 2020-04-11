import React from "react";
import PropTypes from "prop-types";
import Experience from "./Experience";

const ExperiencesList = ({ experiences }) => {
    return experiences.map((experience, index) => (
        <>
            <Experience experience={experience} />
            {index < experiences.length - 1 && <hr />}
        </>
    ))
};

ExperiencesList.propTypes = {
    experiences: PropTypes.array.isRequired
}

export default ExperiencesList;
