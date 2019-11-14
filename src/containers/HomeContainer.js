import React from "react";
import { connect } from "react-redux";

import Home from "../pages/home";

const HomeContainer = props => {
  return <Home {...props} />;
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {  })(HomeContainer);
