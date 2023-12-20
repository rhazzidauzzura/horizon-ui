import { applyMiddleware, legacy_createStore as createStore } from "redux";

import { thunk } from "redux-thunk";
import rootReducer from "./reducers";
import logger from "./middleware/logger";

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
