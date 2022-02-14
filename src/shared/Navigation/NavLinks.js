import { NavLink } from "react-router-dom";

import "./css/NavLinks.css";

const NavLinks = (props) => {
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
      <li>
        <NavLink to="/trips/new">Add Trip</NavLink>
      </li>
      <li>
        <NavLink to="/u1/trips">My Trips</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Login</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
