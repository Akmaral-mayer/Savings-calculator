import {
  SWITCH_AMOUNT_TYPE,
  CALCULATE_BY_TOTAL_AMOUNT,
  CALCULATE_BY_MONTHLY_AMOUNT,
  SET_DATE,
  SET_TOTAL_AMOUNT,
  SET_MOTHLY_AMOUNT,
} from "./actions";
import moment from "moment";

const defaultState = {
  amount_type: true,
  months_count: 0,
  total_amount: 0,
  monthly_amount: 0,
  date: moment().format("MMMM, YYYY"),
};

export const calculatorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SWITCH_AMOUNT_TYPE:
      return {
        ...state,
        amount_type: action.payload,
      };

    case SET_DATE:
      return {
        ...state,
        date: moment(action.payload).format("MMMM, YYYY"),
        months_count: Math.round(
          moment(action.payload).diff(moment(), "months", true)
        ),
      };

    case SET_TOTAL_AMOUNT:
      return {
        ...state,
        total_amount: action.payload,
      };

    case SET_MOTHLY_AMOUNT:
      return {
        ...state,
        monthly_amount: action.payload,
      };

    case CALCULATE_BY_TOTAL_AMOUNT:
      return {
        ...state,
        monthly_amount: action.payload.toFixed(2),
      };

    case CALCULATE_BY_MONTHLY_AMOUNT:
      return {
        ...state,
        total_amount: action.payload.toFixed(2),
      };

    default:
      return state;
  }
};
