import React from "react";
import "./styles/index.scss";

import Currency from "./Currency";

const CurrenciesList = ({
  currenciesList,
  base,
  addToSelected,
  removeFromSelected,
  selections
}) => {
  const renderCurrencies = ([currency, value]) => (
    <Currency
      key={currency}
      {...{
        currency,
        value,
        base,
        addToSelected,
        removeFromSelected,
        selections
      }}
    />
  );

  const renderSelectedCurrencies = ([currency, value]) => (
    <Currency
      key={currency}
      className="selected"
      {...{
        currency,
        value,
        base,
        addToSelected,
        removeFromSelected,
        selections
      }}
    />
  );

  return (
    <div className="currencies">
      <div className=" currencies__container container">
        <div className="currencies__selections">
          {Object.entries(currenciesList)
            .filter(([key]) => selections.includes(key))
            .map(renderSelectedCurrencies)}
        </div>

        {Object.entries(currenciesList)
          .filter(([key]) => !selections.includes(key))
          .map(renderCurrencies)}
      </div>
    </div>
  );
};

export default CurrenciesList;
