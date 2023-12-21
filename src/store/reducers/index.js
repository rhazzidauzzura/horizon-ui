import { combineReducers } from "redux";
import practitionersReducer from "./Practitioner";
import locationsReducer from "./Location";

const rootReducer = combineReducers({
  practitioners: practitionersReducer,
  locations: locationsReducer,
});

export default rootReducer;
