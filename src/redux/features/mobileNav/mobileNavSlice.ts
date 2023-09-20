import { createSlice } from "@reduxjs/toolkit";
import { RootStateType } from "../../app/store";

const initialState = {
  navIsOpen: false,
};

const mobileNavSlice = createSlice({
  name: "mobileNav",
  initialState,
  reducers: {
    openNavbar: (state) => {
      state.navIsOpen = true;
    },
    closeNavbar: (state) => {
      state.navIsOpen = false;
    },
  },
});
export const { openNavbar, closeNavbar } = mobileNavSlice.actions;

export default mobileNavSlice.reducer;

export const selectNavIsOpen = (state: RootStateType) =>
  state.mobileNav.navIsOpen;
