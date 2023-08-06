import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 99,
    message: "你好！李银河！"
  },
  reducers: {
    addNumberAction(state, { payload }) {
      state.count = state.count + payload;
    },
    subNumberAction(state, { payload }) {
      state.count = state.count - payload;
    },
    changeMessageAction(state, { payload }) {
      state.message = payload;
    }
  }
});

export const { addNumberAction, subNumberAction, changeMessageAction } =
  counterSlice.actions;
export default counterSlice.reducer;
