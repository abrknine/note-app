import { configureStrore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducer = combineReducers({});

const initialState = {};

const middleware = [thunk];

const store = configureStrore(
  reducers,
  initialState,
  composeWithDevTools(   applyMiddleware(...middleware))
);

export default store;