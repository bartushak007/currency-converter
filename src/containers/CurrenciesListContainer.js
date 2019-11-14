import React from "react";
import { connect } from "react-redux";

import CurrenciesList from "../pages/currenciesList";
import {
  selectConverterCurrencyList,
  selectConverterBase
} from "../store/converter/convertSelectors";

const CurrenciesListContainer = props => {
  return <CurrenciesList {...props} />;
};

const mapStateToProps = state => ({
  currenciesList: selectConverterCurrencyList(state),
  base: selectConverterBase(state)
});

export default connect(mapStateToProps, {})(CurrenciesListContainer);
