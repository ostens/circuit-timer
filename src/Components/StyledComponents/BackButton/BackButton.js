import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./BackButton.css";

const BackButton = ({ url }) => (
  <div className="backButtonWrapper">
    <Link to={url}>
      <button className="backButton">
        Back
    </button>
    </Link>
  </div>
);

BackButton.propTypes = {
  url: PropTypes.string.isRequired
};

export default BackButton;