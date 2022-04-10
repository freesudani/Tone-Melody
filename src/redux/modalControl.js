import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  open: false,
  open1: false,
  open2: false,
  open3: false,
};

const modalSlice = createSlice({
  name: "modalcontrol",
  initialState: initialModalState,
  reducers: {
    handleOpen(state) {
      state.open = true;
    },
    handleClose(state) {
      state.open = false;
    },
    handleOpen1(state) {
      state.open1 = true;
    },
    handleClose1(state) {
      state.open1 = false;
    },
    handleOpen2(state) {
      state.open2 = true;
    },
    handleClose2(state) {
      state.open2 = false;
    },
    handleOpen3(state) {
      state.open3 = true;
    },
    handleClose3(state) {
      state.open3 = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
