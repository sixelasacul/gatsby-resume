import React from "react";
import PropTypes from "prop-types";
import Education from "./Education";

const EducationsList = ({ educations }) => {
    return educations.map((education, index) => (
        <>
            <Education education={education} />
            {index < educations.length - 1 && <hr />}
        </>
    ))
};

EducationsList.propTypes = {
    educations: PropTypes.array.isRequired
}

export default EducationsList;
