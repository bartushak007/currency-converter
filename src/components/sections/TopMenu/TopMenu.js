import React, { useState, memo } from "react";
import { NavLink } from "react-router-dom";
import "./styles/index.scss";

const TopMenu = memo(({ base, fetchCurrency, currencyList }) => {
  const [selectBase, setSelectBase] = useState(base);
  const handleSelectBase = ({ target: { value } }) => {
    fetchCurrency(value);
    setSelectBase(value);
  };

  return (
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

          <NavLink
            activeClassName="top-menu__link--active"
            className="top-menu__link"
            to="/both"
          >
            Both
          </NavLink>
        </div>
        <div>
          <select
            className="control"
            value={selectBase}
            onChange={handleSelectBase}
          >
            {currencyList.map(currency => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
});

export default TopMenu;
