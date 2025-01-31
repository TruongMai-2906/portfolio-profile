import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

export const activeSectionSlice = createSlice({
  name: "activeSection",
  initialState: initialState,
  reducers: {
    updateActiveSection: (state, action: PayloadAction<string>) => {
      state = action.payload;

      return state;
    },
  },
});

export const { updateActiveSection } = activeSectionSlice.actions;

export default activeSectionSlice.reducer;
