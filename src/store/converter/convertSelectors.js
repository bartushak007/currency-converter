export const selectConverter = state => state.converter;

export const selectConverterIsLoading = state =>
  selectConverter(state).isLoading;

export const selectConverterBase = state => selectConverter(state).base;

export const selectConverterIsError = state => selectConverter(state).isError;

export const selectConverterCurrencyList = state =>
  selectConverter(state).currencyList;

  export const selectSelections = state => selectConverter(state).selections;