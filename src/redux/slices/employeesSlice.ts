import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Employee {
  id: string;
  name: string;
  joiningDate: string;
  basicSalary: number;
  allowances: number;
}

interface EmployeesState {
  employees: Employee[];
  loading: boolean;
  error: string | null;
}

const initialState: EmployeesState = {
  employees: [],
  loading: false,
  error: null,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    fetchEmployeesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchEmployeesSuccess: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
      state.loading = false;
    },
    fetchEmployeesFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      const index = state.employees.findIndex(
        (emp) => emp.id === action.payload.id
      );
      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    },
    deleteEmployee: (state, action: PayloadAction<string>) => {
      state.employees = state.employees.filter(
        (emp) => emp.id !== action.payload
      );
    },
  },
});

// Export actions
export const {
  fetchEmployeesStart,
  fetchEmployeesSuccess,
  fetchEmployeesFailure,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = employeesSlice.actions;

// Export reducer
export default employeesSlice.reducer;

// Export state type
export type { EmployeesState };
