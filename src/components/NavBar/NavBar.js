import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import {
  showBackButton,
  selectTitle
} from "./NavBarUtils";
import { path } from "../../constants";
import BackButton from "../StyledComponents/BackButton/BackButton";
import "./NavBar.scss";

const NavBar = ({ location }) => {
  const currentPath = location.pathname;
  const backButtonShowing = showBackButton(currentPath);
  const title = selectTitle(currentPath);

  return (
    <div className="navBar">
      {backButtonShowing && <BackButton url={path.list} />}
      <div className="title">{title}</div>
    </div>
  )
}

NavBar.propTypes = {
  location: PropTypes.object.isRequired,
};

const RoutedNavBar = withRouter(NavBar);
export default RoutedNavBar;
