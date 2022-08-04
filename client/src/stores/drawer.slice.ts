import { createSlice } from '@reduxjs/toolkit';

const drawerSlice = createSlice({
  name: 'drawer',
  initialState: {
    value: false,
  },
  reducers: {
    toggleDrawer: (state) => ({
      value: !state.value,
    }),
    openDrawer: () => ({
      value: true,
    }),
    closeDrawer: () => ({
      value: false,
    }),
  },
});

export const { openDrawer, closeDrawer, toggleDrawer } = drawerSlice.actions;

export default drawerSlice;
