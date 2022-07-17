import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sideBarSlice";
import filterReducer from "./filterSlice";
import themeReducer from "./themeSlice";
export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    filter: filterReducer,
    theme: themeReducer,
  },
});
