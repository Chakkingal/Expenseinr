// config.js
export const datasets = {
  INDIA: {
    name: "India Expenses",
    currency: "₹",
    expenseCSV: "/api/csv/india/expense",
    receiptsCSV: "/api/csv/india/receipts",
    contraCSV: "/api/csv/india/contra",
    obCSV: "/api/csv/india/ob"
  },
  UAE: {
    name: "UAE Expenses",
    currency: "AED",
    expenseCSV: "/api/csv/uae/expense",
    receiptsCSV: "/api/csv/uae/receipts",
    contraCSV: "/api/csv/uae/contra",
    obCSV: "/api/csv/uae/ob"
  }
};

export const RECEIPT_PASSWORD = "1234";
export const PAGE_SIZE = 25;
