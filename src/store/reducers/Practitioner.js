import { FETCH_PRACTITIONERS } from "../action/ActionTypes";

const initialState = {
  practitioners: [],
};

function practitionersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRACTITIONERS:
      return {
        ...state,
        practitioners: action.payload,
      };

    default:
      return state;
  }
}

export default practitionersReducer;
