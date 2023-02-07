import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";

import thunk from "redux-thunk";

import { UserReducer } from "./User/user.reducer";
import { ScriptReducer } from "./Scripter/scripter.reducer";
import { LangReducer } from "./lang/lang.reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = combineReducers({
  UserReducer,
  ScriptReducer,
  LangReducer,
});

const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

export { store };
