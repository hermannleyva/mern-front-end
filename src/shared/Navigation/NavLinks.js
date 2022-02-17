import { NavLink } from "react-router-dom";
import React, { useContext } from "react";

import { AuthContext } from "../context/auth-context";

import "./css/NavLinks.css";
import Button from "../components/FormElements/Button";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/trips">Search for Trips</NavLink>
      </li>
      <li>
        <NavLink to="/captains">Captain Directory</NavLink>
      </li>
      {auth.isLoggedIn && (
        <React.Fragment>
          <li>
            <NavLink to="/u1/trips">My Trips</NavLink>
          </li>
          <li>
            <NavLink to="/trips/new">Add Trip</NavLink>
          </li>
        </React.Fragment>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">Login</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <Button onClick={auth.logout}>Logout</Button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
