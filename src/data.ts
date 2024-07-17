export interface IEmployee {
  id: number;
  staff_id: string;
  joining_date: string;
  name: string;
  email: string;
  phone: string;
  role: string[];
  basic_salary: string;
  salary_allowance: string;
  status: string;
}

export const EmployeesList: IEmployee[] = [
  {
    id: 1,
    staff_id: "STF-001",
    joining_date: "17-05-2024",
    name: "John Doe",
    email: "jon@gmail.com",
    phone: "08012345678",
    role: ["Admin"],
    basic_salary: "$17,500",
    salary_allowance: "$2,000",
    status: "Active",
  },
  {
    id: 2,
    staff_id: "STF-001",
    joining_date: "17-05-2024",
    name: "Jane Doe",
    email: "jon@gmail.com",
    phone: "08012345678",
    role: ["Employee"],
    basic_salary: "$17,500",
    salary_allowance: "$2,000",
    status: "Inactive",
  },
  {
    id: 3,
    staff_id: "STF-001",
    joining_date: "17-05-2024",
    name: "Jane Doe",
    email: "jon@gmail.com",
    phone: "08012345678",
    role: ["Employee"],
    basic_salary: "$17,500",
    salary_allowance: "$2,000",
    status: "Inactive",
  },
  {
    id: 4,
    staff_id: "STF-001",
    joining_date: "17-05-2024",
    name: "Jane Doe",
    email: "jon@gmail.com",
    phone: "08012345678",
    role: ["Employee"],
    basic_salary: "$17,500",
    salary_allowance: "$2,000",
    status: "Inactive",
  },
  {
    id: 5,
    staff_id: "STF-001",
    joining_date: "17-05-2024",
    name: "Jane Doe",
    email: "jon@gmail.com",
    phone: "08012345678",
    role: ["Employee"],
    basic_salary: "$17,500",
    salary_allowance: "$2,000",
    status: "Inactive",
  },
  {
    id: 6,
    staff_id: "STF-001",
    joining_date: "17-05-2024",
    name: "Jane Doe",
    email: "jon@gmail.com",
    phone: "08012345678",
    role: ["Employee"],
    basic_salary: "$17,500",
    salary_allowance: "$2,000",
    status: "Inactive",
  },
  {
    id: 7,
    staff_id: "STF-001",
    joining_date: "17-05-2024",
    name: "Jane Doe",
    email: "jon@gmail.com",
    phone: "08012345678",
    role: ["Employee"],
    basic_salary: "$17,500",
    salary_allowance: "$2,000",
    status: "Inactive",
  },
  {
    id: 8,
    staff_id: "STF-001",
    joining_date: "17-05-2024",
    name: "Jane Doe",
    email: "jon@gmail.com",
    phone: "08012345678",
    role: ["Employee"],
    basic_salary: "$17,500",
    salary_allowance: "$2,000",
    status: "Inactive",
  },
  {
    id: 9,
    staff_id: "STF-001",
    joining_date: "17-05-2024",
    name: "Jane Doe",
    email: "jon@gmail.com",
    phone: "08012345678",
    role: ["Employee"],
    basic_salary: "$17,500",
    salary_allowance: "$2,000",
    status: "Inactive",
  },
  {
    id: 10,
    staff_id: "STF-001",
    joining_date: "17-05-2024",
    name: "Jane Doe",
    email: "jon@gmail.com",
    phone: "08012345678",
    role: ["Employee"],
    basic_salary: "$17,500",
    salary_allowance: "$2,000",
    status: "Inactive",
  },
];

// •	A payment history log is accessible, providing details of all past payments made through the portal.
export interface ITransaction {
  id: number;
  transaction_id: string;
  date: string;
  amount: string;
  status: string;
  type: string;
  reference: string;
  staff_id: string;
}

export const TransactionList: ITransaction[] = [
  {
    id: 1,
    transaction_id: "TRN-001",
    date: "17-05-2024",
    amount: "$17,500",
    status: "Success",
    type: "Salary",
    reference: "Salary Payment",
    staff_id: "STF-001",
  },

  {
    id: 2,
    transaction_id: "TRN-002",
    date: "17-05-2024",
    amount: "$17,500",
    status: "Success",
    type: "Salary",
    reference: "Salary Payment",
    staff_id: "STF-001",
  },

  {
    id: 3,
    transaction_id: "TRN-003",
    date: "17-05-2024",
    amount: "$17,500",
    status: "Success",
    type: "Salary",
    reference: "Salary Payment",
    staff_id: "STF-001",
  },
  {
    id: 4,
    transaction_id: "TRN-004",
    date: "17-05-2024",
    amount: "$17,500",
    status: "Success",
    type: "Salary",
    reference: "Salary Payment",
    staff_id: "STF-001",
  },
  {
    id: 5,
    transaction_id: "TRN-005",
    date: "17-05-2024",
    amount: "$17,500",
    status: "Success",
    type: "Salary",
    reference: "Salary Payment",
    staff_id: "STF-001",
  },
  {
    id: 6,
    transaction_id: "TRN-006",
    date: "17-05-2024",
    amount: "$17,500",
    status: "Success",
    type: "Salary",
    reference: "Salary Payment",
    staff_id: "STF-001",
  },
  {
    id: 7,
    transaction_id: "TRN-007",
    date: "17-05-2024",
    amount: "$17,500",
    status: "Success",
    type: "Salary",
    reference: "Salary Payment",
    staff_id: "STF-001",
  },
  {
    id: 8,
    transaction_id: "TRN-008",
    date: "17-05-2024",
    amount: "$17,500",
    status: "Success",
    type: "Salary",
    reference: "Salary Payment",
    staff_id: "STF-001",
  },
  {
    id: 9,
    transaction_id: "TRN-009",
    date: "17-05-2024",
    amount: "$17,500",
    status: "Success",
    type: "Salary",
    reference: "Salary Payment",
    staff_id: "STF-001",
  },
  {
    id: 10,
    transaction_id: "TRN-010",
    date: "17-05-2024",
    amount: "$17,500",
    status: "Success",
    type: "Salary",
    reference: "Salary Payment",
    staff_id: "STF-001",
  },
];
