import React, { memo } from "react";
import "./styles/index.scss";

const SelectCurrency = memo(({ currencyList, select, setSelect }) => {
  return (
    <select
      className="control"
      value={select}
      onChange={({ target }) => setSelect(target.value)}
    >
      {Object.entries(currencyList).map(([currency]) => (
        <option value={currency} key={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
});

export default SelectCurrency;
