import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: window.localStorage.list
    ? JSON.parse(window.localStorage.getItem("list"))
    : [],
  errorStatus: false,
  inputValue: "",
};
const checkInput = (input) => {
  return /[^\s]/gim.test(input);
};

const toDoListSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    addItem: (state, action) => {
      const date = new Date();
      const item = {
        text: state.inputValue,
        isDone: false,
        key: Math.floor(Math.random() * 1000000),
        date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
      };

      if (checkInput(state.inputValue)) {
        state.items.push(item);
        state.errorStatus = false;
        state.inputValue = "";
      } else {
        state.inputValue = "";
        state.errorStatus = true;
      }
    },

    clearAll: (state) => {
      state.items = [];
    },

    clearItem: (state, action) => {
      state.items.splice(
        state.items.findIndex((element) => element.key === +action.payload),
        1
      );
    },
    doItem: (state, action) => {
      const findIndexItem = state.items.findIndex(
        (element) => element.key === +action.payload
      );
      state.items[findIndexItem].isDone = state.items[findIndexItem].isDone
        ? false
        : true;
    },
  },
});

export const { addItem, clearAll, clearItem, doItem, addInputValue } =
  toDoListSlice.actions;

export default toDoListSlice.reducer;
