import { createSlice } from "@reduxjs/toolkit";

const CARTSLICE = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = { ...action.payload, quantity: 1 };
      state.items.push(newItem);
    },
    clearItem: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
    },
    incrementQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
      }
    },
  },
});

export const { addItem, clearItem, removeItem, incrementQuantity } =
  CARTSLICE.actions;
export default CARTSLICE.reducer;
