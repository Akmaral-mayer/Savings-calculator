export const SWITCH_AMOUNT_TYPE = "SWITCH_AMOUNT_TYPE";
export const CALCULATE_BY_TOTAL_AMOUNT = "CALCULATE_BY_TOTAL_AMOUNT";
export const CALCULATE_BY_MONTHLY_AMOUNT = "CALCULATE_BY_MONTHLY_AMOUNT";
export const SET_DATE = "SET_DATE";
export const SET_MOTHLY_AMOUNT = "SET_MOTHLY_AMOUNT";
export const SET_TOTAL_AMOUNT = "SET_TOTAL_AMOUNT";

export const switch_amount_type = (value) => ({
  type: SWITCH_AMOUNT_TYPE,
  payload: value,
});

export const calculate_by_total = (value) => ({
  type: CALCULATE_BY_TOTAL_AMOUNT,
  payload: value,
});

export const calculate_by_monthly = (value) => ({
  type: CALCULATE_BY_MONTHLY_AMOUNT,
  payload: value,
});

export const set_date = (value) => ({
  type: SET_DATE,
  payload: value,
});

export const set_monthly_amount = (value) => ({
  type: SET_MOTHLY_AMOUNT,
  payload: value,
});

export const set_total_amount = (value) => ({
  type: SET_TOTAL_AMOUNT,
  payload: value,
});
