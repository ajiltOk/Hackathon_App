import { createSlice } from "@reduxjs/toolkit";

const savedId = createSlice({
  name: "savedId",
  initialState: {
    id: null,
  },
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
  },
});

export const { setId } = savedId.actions;

export default savedId.reducer;
