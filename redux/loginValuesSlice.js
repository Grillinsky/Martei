import { createSlice } from "@reduxjs/toolkit";

const loginValuesSlice = createSlice({
  name: "loginValues",
  initialState: { email: "", password: "", isOffCanvasOpen: false },
  reducers: {
    setLoginValues(state, action) {
      return { ...state, ...action.payload };
    },
    toggleOffCanvas(state, action) {
      return { ...state, isOffCanvasOpen: action.payload };
    },
  },
});

export const { setLoginValues, toggleOffCanvas } = loginValuesSlice.actions;
export default loginValuesSlice.reducer;
