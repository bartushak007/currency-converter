import React from "react";
import { connect } from "react-redux";

import Template from "../components/template";

const TemplateContainer = ({ children, ...props }) => {
  return <Template {...props}>{children}</Template>;
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(TemplateContainer);
