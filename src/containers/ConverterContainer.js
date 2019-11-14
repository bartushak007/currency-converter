import React from "react";
import { connect } from "react-redux";

import Converter from "../pages/converter";

import {
  selectConverterCurrencyList,
  selectConverterBase
} from "../store/converter/convertSelectors";

const ConverterContainer = props => {
  return <Converter {...props} />;
};

const mapStateToProps = state => ({
  currencyList: selectConverterCurrencyList(state),
  converterBase: selectConverterBase(state)
});

export default connect(mapStateToProps, {})(ConverterContainer);
