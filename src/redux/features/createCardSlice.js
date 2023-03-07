import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  query: "",
};
const createCardSlice = createSlice({
  name: "cardSlice",
  initialState,
  reducers: {
    queryItem: (state, action) => {
      state.query = action.payload;
      console.log(action.payload);
    },
    createCards: (state, action) => {
      state.cards.push(action.payload);
    },
    updateCard: (state, action) => {
      const { value, updated } = action.payload;
      state.cards[value] = { ...updated };
    },
    deleteCard: (state, action) => {
      state.cards = action.payload;
    },
  },
});

// localStorage.clear();
export const { queryItem, createCards, updateCard, deleteCard } =
  createCardSlice.actions;
export default createCardSlice.reducer;
