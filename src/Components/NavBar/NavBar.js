import React from "react";
import PropTypes from "prop-types";

import BackButton from "../StyledComponents/BackButton/BackButton";
import "./NavBar.css";

const NavBar = ({ title }) => ( //use backbutton url/ if back button exists
  <div className="navBar">
    <BackButton url="/timers"/>
    <div class="title">{title}</div>
  </div>
);

NavBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default NavBar;