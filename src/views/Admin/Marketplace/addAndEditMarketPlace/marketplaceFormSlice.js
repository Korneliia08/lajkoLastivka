import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  link: "",
  rozetkaLogin: "",
  rozetkaPassword: "",
  logo: "",
  sendingStartTime: "",
  sendingEndTime: "",
  sendingDelay: "",
  messageTemplateViber: "",
  viberBannerImg: "",
  viberLogoImg: "",
  isConnect: false,
};
const MarketplaceFormSlice = createSlice({
  name: "marketplaceForm",
  initialState,
  reducers: {
    marketplaceResetForm: (state) => {
      return initialState;
    },
    marketplaceSetField: (state, action) => {
      console.log(action.payload.field, action.payload.value);
      state[action.payload.field] = action.payload.value;
    },
    marketplaceSetFormValidation: (state, action) => {
      state.isValid = action.payload.isValid;
    },
    marketplaceSetFormLoading: (state, action) => {
      state.loading = action.payload;
    },
    marketplaceFormSetError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  marketplaceSetField,
  marketplaceSetFormValidation,
  marketplaceSetFormLoading,
  marketplaceResetForm,
  marketplaceFormSetError,
} = MarketplaceFormSlice.actions;
export default MarketplaceFormSlice.reducer;
