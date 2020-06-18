import React from "react";
import PropTypes from "prop-types";

import BackButton from "../StyledComponents/BackButton/BackButton";
import "./NavBar.css";

const NavBar = ({ title, showBackButton = true }) => (
  <div className="navBar">
    {showBackButton && <BackButton url="/timers" />}
    <div class="title">{title}</div>
  </div>
);

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  showBackButton: PropTypes.bool.isRequired
};

export default NavBar;