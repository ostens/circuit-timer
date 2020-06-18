import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Arrow from "../../Icons/left-arrow.svg";
import "./BackButton.css";

const BackButton = ({ url }) => (
  <div className="backButtonWrapper">
    <Link to={url}>
      <button className="backButton">
        <img src={Arrow} alt="Back Arrow Button" />
      </button>
    </Link>
  </div>
);

BackButton.propTypes = {
  url: PropTypes.string.isRequired
};

export default BackButton;