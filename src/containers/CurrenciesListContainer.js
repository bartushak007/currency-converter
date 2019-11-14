import React from "react";
import { connect } from "react-redux";

import CurrenciesList from "../pages/currenciesList";
import {
  selectConverterCurrencyList,
  selectConverterBase,
  selectSelections
} from "../store/converter/convertSelectors";

import {
  addToSelected,
  removeFromSelected
} from "../store/converter/convertActions";

const CurrenciesListContainer = props => {
  return <CurrenciesList {...props} />;
};

const mapStateToProps = state => ({
  currenciesList: selectConverterCurrencyList(state),
  base: selectConverterBase(state),
  selections: selectSelections(state)
});

export default connect(mapStateToProps, { addToSelected, removeFromSelected })(
  CurrenciesListContainer
);
