import React from "react";
import { NavLink } from "react-router-dom";

function AddPlayerButton() {
  return (
    <NavLink to={"/View/AddPlayer"}>
      <button className="AddPlayerButton">Add new player to index</button>
    </NavLink>
  );
}

export default AddPlayerButton;
