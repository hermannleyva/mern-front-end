import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./css/MainNavigation.css";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "./../../shared/components/UIElements/Backdrop/Backdrop";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const hamburgerHandler = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={hamburgerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={hamburgerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          onClick={hamburgerHandler}
          className="main-navigation__menu-btn"
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Hooker Booker</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
