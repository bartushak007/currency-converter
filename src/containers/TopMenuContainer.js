import React from "react";
import { connect } from "react-redux";

import TopMenu from "../components/sections/TopMenu";

import {
  selectConverterBase,
  selectConverterCurrencyList
} from "../store/converter/convertSelectors";

import { fetchCurrency } from "../store/converter/convertActions";

const TopMenuContainer = props => {
  return <TopMenu {...props} />;
};

const mapStateToProps = state => ({
  base: selectConverterBase(state),
  currencyList: Object.keys(selectConverterCurrencyList(state))
});

export default connect(mapStateToProps, { fetchCurrency })(TopMenuContainer);
