import { configureStore } from '@reduxjs/toolkit';
import slice from "./slice.ts"


export const store = configureStore({
  reducer: {
    counter: slice,
  },
});