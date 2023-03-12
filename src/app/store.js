import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import reducer2slice from '../features/reducer2/reducer2Slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    reducer2slice: reducer2slice
  },
});
