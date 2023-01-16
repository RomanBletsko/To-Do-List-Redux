import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  modalStatus: false,
};
const modalSlice = createSlice({
  name: "modaStatus",
  initialState,
  reducers: {
    modalActive: (state) => {
      state.modalStatus = state.modalStatus ? false : true;
    },
  },
});
export const { modalActive } = modalSlice.actions;

export default modalSlice.reducer;
