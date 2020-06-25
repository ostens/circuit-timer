import React from "react";
import { Link } from "react-router-dom";

import { path } from "../../../constants";
import "./AddButton.scss";

const AddButton = () => (
  <div className="addButtonWrapper">
    <Link to={path.form}>
      <button className="addButton" name="Add Button">+
      </button>
    </Link>
  </div>
);

export default AddButton;
