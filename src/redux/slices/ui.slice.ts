import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type UIState = {
  themeMode: "light" | "dark";
  notification: string | null;
};

const initialState: UIState = {
  themeMode: "light",
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
    },
    setNotification: (state, action: PayloadAction<string>) => {
      state.notification = action.payload;
    },
    clearNotification: (state) => {
      state.notification = null;
    },
  },
});

export const { toggleTheme, setNotification, clearNotification } = uiSlice.actions;
export default uiSlice.reducer;
