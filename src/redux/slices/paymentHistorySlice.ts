import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaymentHistory {
  id: string;
  employeeId: string;
  amount: number;
  paymentDate: string;
  isEndOfService: boolean;
}

interface PaymentHistoryState {
  paymentHistory: PaymentHistory[];
  loading: boolean;
  error: string | null;
}

const initialState: PaymentHistoryState = {
  paymentHistory: [],
  loading: false,
  error: null,
};

const paymentHistorySlice = createSlice({
  name: "paymentHistory",
  initialState,
  reducers: {
    fetchPaymentHistoryStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPaymentHistorySuccess: (
      state,
      action: PayloadAction<PaymentHistory[]>
    ) => {
      state.paymentHistory = action.payload;
      state.loading = false;
    },
    fetchPaymentHistoryFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    addPayment: (state, action: PayloadAction<PaymentHistory>) => {
      state.paymentHistory.push(action.payload);
    },
    deletePayment: (state, action: PayloadAction<string>) => {
      state.paymentHistory = state.paymentHistory.filter(
        (payment) => payment.id !== action.payload
      );
    },
  },
});

// Export actions
export const {
  fetchPaymentHistoryStart,
  fetchPaymentHistorySuccess,
  fetchPaymentHistoryFailure,
  addPayment,
  deletePayment,
} = paymentHistorySlice.actions;

// Export reducer
export default paymentHistorySlice.reducer;

// Export state type
export type { PaymentHistoryState };
