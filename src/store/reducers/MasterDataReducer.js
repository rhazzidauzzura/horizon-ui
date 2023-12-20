import { FETCH_MASTER_DATA } from "../action/ActionTypes";

const initialState = {
  practitioner: [],
};

function masterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MASTER_DATA:
      return {
        ...state,
        practitioner: action.payload,
      };
    // case FETCH_STUDENT_BYID:
    //   return {
    //     ...state,
    //     masters: action.payload,
    //   };
    // case FETCH_CATEGORY:
    //   return {
    //     ...state,
    //     categories: action.payload,
    //   };
    // case FETCH_PRODUCT_BYID:
    //   return {
    //     ...state,
    //     productId: action.payload,
    //     flag: "true",
    //   };
    default:
      return state;
  }
}

export default masterReducer;
