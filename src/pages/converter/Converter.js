import React, { useState, useEffect } from "react";
import "./styles/index.scss";

import SelectCurrency from "./SelectCurrency";

const Converter = ({ currencyList, converterBase }) => {
  const [selectFrom, setSelectFrom] = useState(converterBase || "USD");
  const [selectTo, setSelectTo] = useState("USD");

  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  useEffect(() => {
    setTo(
      from *
        ((currencyList[converterBase] / currencyList[selectFrom]) *
          currencyList[selectTo])
    );
  }, [selectFrom, currencyList, selectTo, converterBase, from, to]);

  return (
    <div className="converter">
      <div className="converter__container container">
        <h3 className="converter__title">Currency Converter</h3>
        <div className="converter__from">
          Currency I Have:
          <div>
          <input
            className="control"
            type="number"
            onChange={({ target }) => {
              setFrom(target.value);
            }}
            value={from}
          ></input>
          <SelectCurrency
            currencyList={currencyList}
            select={selectFrom}
            setSelect={setSelectFrom}
          />
          </div>
        </div>

        <div className="converter__to">
          Currency I Want:
          <div>
          <input className="control" readOnly value={to}></input>
          <SelectCurrency
            currencyList={currencyList}
            select={selectTo}
            setSelect={setSelectTo}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;
