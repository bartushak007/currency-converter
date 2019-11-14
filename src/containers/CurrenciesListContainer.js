import React from "react";
import { connect } from "react-redux";

import CurrenciesList from "../pages/currenciesList";

const CurrenciesListContainer = props => {
  return <CurrenciesList {...props} />;
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(CurrenciesListContainer);