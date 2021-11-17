/** This is Redux */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../pages/colorPaletteRedux/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
