// state.js
export let currentDataset = null;
export let currencySymbol = "₹";

export let expenseData = [];
export let receiptData = [];
export let contraData = [];
export let openingBalanceData = [];

export let expensePage = 1;
export let receiptPage = 1;
export let contraPage = 1;

export let receiptsUnlocked = false;

export const datasetCache = {
  INDIA: null,
  UAE: null
};
