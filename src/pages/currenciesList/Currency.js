import React, { useState, memo, useEffect, useRef } from "react";

const Currency = memo(
  ({
    currency,
    value,
    base,
    addToSelected,
    removeFromSelected,
    selections,
    className
  }) => {
    const [checked, setChecked] = useState(
      selections.includes(currency) ? true : false
    );

    const handleChange = () => {
      setChecked(!checked);
    };

    const hasMount = useRef(false);

    const checkedEffect = () => {
      if (hasMount.current) {
        checked ? addToSelected(currency) : removeFromSelected(currency);
      } else {
        hasMount.current = true;
      }
    };

    useEffect(checkedEffect, [checked]);

    return (
      <div
        className={`currencies__list-elem currencies__list-elem--${className}`}
      >
        <span className="currencies__text">"{currency}" is equal to: </span>
        <span className="currencies__equal currencies__text">
          {value} "{base}"
        </span>
        <span className="currencies__text">
          Move to selections{" "}
          <input type="checkbox" onChange={handleChange} checked={checked} />
        </span>
      </div>
    );
  }
);

export default Currency;
