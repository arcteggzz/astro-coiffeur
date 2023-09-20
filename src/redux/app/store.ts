import { configureStore } from "@reduxjs/toolkit";
import mobileNavReducer from "../features/mobileNav/mobileNavSlice";
import bookAppointmentModalReducer from "../features/bookAppointmentModal/bookAppointmentModalSlice";

const store = configureStore({
  reducer: {
    bookAppointment: bookAppointmentModalReducer,
    mobileNav: mobileNavReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export default store;
export type RootStateType = ReturnType<typeof store.getState>;
