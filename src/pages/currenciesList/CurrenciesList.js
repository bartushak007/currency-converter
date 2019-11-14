import React from "react";
import "./styles/index.scss";

import Currency from "./Currency";

const CurrenciesList = ({ currenciesList, base }) => {
  const renderCurrencies = ([currency, value]) => (
    <Currency key={currency} {...{ currency, value, base }} />
  );

  return (
    <div className="currencies">
      <div className=" currencies__container container">
        {Object.entries(currenciesList).map(renderCurrencies)}
      </div>
    </div>
  );
};

export default CurrenciesList;
