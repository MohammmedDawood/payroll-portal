import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Salary {
  id: string;
  employeeId: string;
  month: string;
  year: number;
  basicSalary: number;
  allowances: number;
  additions: number;
  deductions: number;
  totalSalary: number;
  isEndOfService: boolean;
}

interface SalariesState {
  salaries: Salary[];
  loading: boolean;
  error: string | null;
}

const initialState: SalariesState = {
  salaries: [],
  loading: false,
  error: null,
};

const salariesSlice = createSlice({
  name: "salaries",
  initialState,
  reducers: {
    fetchSalariesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSalariesSuccess: (state, action: PayloadAction<Salary[]>) => {
      state.salaries = action.payload;
      state.loading = false;
    },
    fetchSalariesFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    processSalary: (state, action: PayloadAction<Salary>) => {
      const index = state.salaries.findIndex(
        (sal) => sal.id === action.payload.id
      );
      if (index !== -1) {
        state.salaries[index] = action.payload;
      } else {
        state.salaries.push(action.payload);
      }
    },
    deleteSalary: (state, action: PayloadAction<string>) => {
      state.salaries = state.salaries.filter(
        (sal) => sal.id !== action.payload
      );
    },
  },
});

// Export actions
export const {
  fetchSalariesStart,
  fetchSalariesSuccess,
  fetchSalariesFailure,
  processSalary,
  deleteSalary,
} = salariesSlice.actions;

// Export reducer
export default salariesSlice.reducer;

// Export state type
export type { Salary, SalariesState };
