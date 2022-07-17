import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    showSidebar: false,
  },
  reducers: {
    hideSidebar: (state) => {
      state.showSidebar = false;
    },
    showSidebar: (state) => {
      state.showSidebar = true;
    },
  },
});

export const sidebarActions = sidebarSlice.actions;

export default sidebarSlice.reducer;
