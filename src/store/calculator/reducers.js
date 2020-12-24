import { SWITCH_AMOUNT_TYPE } from "./actions";

const defaultState = {
  monthly_amount: true,
};

export const calculatorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SWITCH_AMOUNT_TYPE:
      return {
        ...state,
        monthly_amount: action.payload,
      };

    default:
      return state;
  }
};
