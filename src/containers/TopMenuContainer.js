import React from "react";
import { connect } from "react-redux";

import TopMenu from "../components/sections/TopMenu";

import {
  selectConverterBase,
  
} from "../store/converter/convertSelectors";

const TopMenuContainer = props => {
  return <TopMenu {...props} />;
};

const mapStateToProps = state => ({base: selectConverterBase(state)});

export default connect(mapStateToProps, {  })(TopMenuContainer);
