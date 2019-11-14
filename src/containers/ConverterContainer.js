import React from "react";
import { connect } from "react-redux";

import Converter from "../pages/converter";

const ConverterContainer = props => {
  return <Converter {...props} />;
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(ConverterContainer);
