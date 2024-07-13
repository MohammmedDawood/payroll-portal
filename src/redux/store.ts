import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import settingsReducer from "./slices/settingsSlice";
import employeesReducer from "./slices/employeesSlice";
import salariesReducer from "./slices/salariesSlice";
import paymentHistoryReducer from "./slices/paymentHistorySlice";

// Configure the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer,
    employees: employeesReducer,
    salaries: salariesReducer,
    paymentHistory: paymentHistoryReducer,
    settings: settingsReducer,
  },
  // Optional: Add custom middleware or devTools configuration here
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // devTools: process.env.NODE_ENV !== 'production',
});

// Define RootState and AppDispatch types for use in the application
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export the store as the default export
export default store;
