import { FETCH_LOCATIONS } from "../action/ActionTypes";

const initialState = {
  locations: [],
};

function locationsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
      };

    default:
      return state;
  }
}

export default locationsReducer;
