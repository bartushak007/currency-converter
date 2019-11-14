import React, { useEffect } from "react";
import TopMenuContainer from "../../containers/TopMenuContainer";

const Template = ({
  children,
  fetchDataTemplate,
  fetchCurrency,
  isTemplateLoading,
  dataTemplate,
  converterIsLoading,
  converterIsError
}) => {
  const fetchDataEffect = () => {
    fetchDataTemplate();
  };
  const fetchCurrencyEffect = () => {
    !isTemplateLoading && fetchCurrency();
  };

  useEffect(fetchDataEffect, []);
  useEffect(fetchCurrencyEffect, [isTemplateLoading]);

  return (
    <>
      {!isTemplateLoading && !converterIsLoading && (
        <>
          {converterIsError ? (
            <button className="control" onClick={fetchCurrency}>Reload Currencies</button>
          ) : (
            <>
              <header>
                <TopMenuContainer />
              </header>
              {children}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Template;
