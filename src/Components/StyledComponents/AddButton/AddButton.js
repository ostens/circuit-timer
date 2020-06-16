import React from "react";
import { Link } from "react-router-dom";

import "./AddButton.css";

const AddButton = () => (
  <div className="addButtonWrapper">
    <Link to="/form">
      <button className="addButton" name="Add Button">+
      </button>
    </Link>
  </div>
);

export default AddButton;
