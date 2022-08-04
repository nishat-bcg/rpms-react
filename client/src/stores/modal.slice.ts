import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: false,
  },
  reducers: {
    openModal: () => ({
      value: true,
    }),
    closeModal: () => ({
      value: false,
    }),
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice;
