import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../components/Dashboard/DashboardSlice';

export const store = configureStore({
  reducer: {
    dashboard: reducer,
  },
});
