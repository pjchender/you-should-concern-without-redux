import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  red: 0,
  blue: 0,
  green: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, { payload: color }) => {
      state[color] += 1;
    },
    decrement: (state, { payload: color }) => {
      state[color] -= 1;
    },
    update: (state, { payload: { color, value } }) => {
      state[color] = value;
    },
  },
});

export const { increment, decrement, update } = counterSlice.actions;

export default counterSlice.reducer;
