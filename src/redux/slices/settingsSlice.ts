import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingState {
  lang: string;
  theme: string;
}

const initialState: SettingState = {
  lang: "en",
  theme: "light",
};

const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleTheme: (
      state,
      action: PayloadAction<{
        theme: "light" | "dark";
      }>
    ) => {
      state.theme = action.payload.theme;
      return state;
    },
    toggleLang: (
      state,
      action: PayloadAction<{
        lang: "en" | "ar";
      }>
    ) => {
      state.lang = action.payload.lang;
      return state;
    },

    // Add other setting-related actions here
  },
});

// Export actions
export const { toggleTheme, toggleLang } = settingSlice.actions;

// Export reducer
export default settingSlice.reducer;

// Export state type
export type { SettingState };
