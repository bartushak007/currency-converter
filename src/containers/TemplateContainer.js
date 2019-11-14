import React from "react";
import { connect } from "react-redux";

import Template from "../components/template";
import { fetchDataTemplate } from "../store/dataTemplate/dataTemplateActions";
import {
  selectIsTemplateLoading,
  selectDataTemplate
} from "../store/dataTemplate/dataTemplateSelectors";
import { fetchCurrency } from "../store/converter/convertActions";

import {
  // selectConverter,
  selectConverterIsLoading,
  // selectConverterBase,
  selectConverterIsError,
  // selectConverterCurrencyList
} from "../store/converter/convertSelectors";

const TemplateContainer = ({ children, ...props }) => {
 
  return <Template {...props}>{children}</Template>;
};

const mapStateToProps = state => ({
  isTemplateLoading: selectIsTemplateLoading(state),
  dataTemplate: selectDataTemplate(state),
  converterIsLoading : selectConverterIsLoading(state),
  converterIsError: selectConverterIsError(state),
});

export default connect(mapStateToProps, { fetchCurrency, fetchDataTemplate })(
  TemplateContainer
);
