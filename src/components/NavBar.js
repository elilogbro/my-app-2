import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#c5b358",
  textDecoration: "none",
  color: "white",
  borderRadius: "8px",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/Home"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#d4af37",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/View"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#d4af37",
        }}
      >
        View Index
      </NavLink>
      <NavLink
        to="/Add"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#d4af37",
        }}
      >
        Add Player
      </NavLink>
      <NavLink
        to="/Search"
        exact
        style={linkStyles}
        activeStyle={{
          background: "#d4af37",
        }}
      >
        Search Index
      </NavLink>
    </div>
  );
}

export default NavBar;
