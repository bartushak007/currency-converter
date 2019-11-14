export const selectIsTemplateLoading = state => state.dataTemplate.isLoading;

export const selectDataTemplate = state => state.dataTemplate.data;

export const selectCurrencyURL = state => selectDataTemplate(state) ? selectDataTemplate(state).currency : null;
