import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/index.scss";

const TopMenu = ({ base }) => (
  <div className="top-menu">
    <div className="container top-menu__container">
      <div className="top-menu__links-list">
        <NavLink
          activeClassName="top-menu__link--active"
          className="top-menu__link"
          to="/"
          exact
        >
          Converter
        </NavLink>
        <NavLink
          activeClassName="top-menu__link--active"
          className="top-menu__link"
          to="/currencies"
        >
          Currencies
        </NavLink>
      </div>
      <div>{base}</div>
    </div>
  </div>
);

export default TopMenu;
