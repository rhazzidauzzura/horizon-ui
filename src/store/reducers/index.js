import { combineReducers } from "redux";
import masterReducer from "./MasterDataReducer";

const rootReducer = combineReducers({
  masters: masterReducer,
});

export default rootReducer;
