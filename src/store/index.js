import { configureStore } from "@reduxjs/toolkit";
import toDoListReducer from "../features/toDoListSlice";
import modaStatusReduser from "../features/modalSlice";

export const store = configureStore({
  reducer: {
    toDoList: toDoListReducer,
    modal: modaStatusReduser,
  },
});
