import { configureStore } from "@reduxjs/toolkit";
import toDoListReducer from "../features/itemsSlice";
import modaStatusReduser from "../features/modalSlice";

export const store = configureStore({
  reducer: {
    toDoList: toDoListReducer,
    modal: modaStatusReduser,
  },
});
