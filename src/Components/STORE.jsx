import { configureStore } from "@reduxjs/toolkit";
import CARTSLICE from "./CARTSLICE";
const STORE = configureStore({
  //it takes the slices
  //create a slice
  //reducer > slice
  reducer: {
    cart: CARTSLICE,
  },
});
export default STORE;
