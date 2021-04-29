import { configureStore } from '@reduxjs/toolkit';
import { slice as dashboardSlice } from '../components/Dashboard/slice';

export const store = configureStore({
  reducer: {
    [dashboardSlice.name]: dashboardSlice.reducer,
  },
});
