import React from "react";
import TopMenuContainer from "../../containers/TopMenuContainer";

const Template = ({ children }) => {
  return (
    <>
      <header>
        <TopMenuContainer />
      </header>
      {children}
    </>
  );
};

export default Template;
