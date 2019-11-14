import React from "react";
import { connect } from "react-redux";

import TopMenu from "../components/sections/TopMenu";

const TopMenuContainer = props => {
  return <TopMenu {...props} />;
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {  })(TopMenuContainer);
