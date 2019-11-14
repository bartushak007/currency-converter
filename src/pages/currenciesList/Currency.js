import React, { useState, memo, useEffect } from "react";

const Currency = memo(({ currency, value, base }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = ({ target }) => {
    setChecked(!checked);
  };

  useEffect(()=> {
    console.log(checked)
  }, [checked])

  return (
    <div className="currencies__list">
      <span>"{currency}" is equal to: </span>
      <span className="currencies__equal">
        {value} "{base}"
      </span>
      <span>
        {" "}
        Select to selections{" "}
        <input type="checkbox" onChange={handleChange} checked={checked} />
      </span>
    </div>
  );
});

export default Currency;
