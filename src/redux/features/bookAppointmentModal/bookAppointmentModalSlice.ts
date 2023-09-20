import { createSlice } from "@reduxjs/toolkit";
import { RootStateType } from "../../app/store";

const initialState = {
  bookAppointmentModalIsOpen: false,
};

const bookAppointmentModalSlice = createSlice({
  name: "bookAppointmentModal",
  initialState,
  reducers: {
    openbookAppointmentModal: (state) => {
      state.bookAppointmentModalIsOpen = true;
    },
    closebookAppointmentModal: (state) => {
      state.bookAppointmentModalIsOpen = false;
    },
  },
});

export const { openbookAppointmentModal, closebookAppointmentModal } =
  bookAppointmentModalSlice.actions;

export default bookAppointmentModalSlice.reducer;

export const selectbookAppointmentModalIsOpen = (state: RootStateType) =>
  state.bookAppointment.bookAppointmentModalIsOpen;
