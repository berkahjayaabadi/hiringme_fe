import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { ProfileReducer } from "./reducer/ProfileWork";
import { CompanyReducer } from "./reducer/ProfileCmpny";
import { postProfileIdReducer } from "./reducer/ProfileWork";
import { patchProfileIdReducer } from "./reducer/ProfileWork";
import { postCompanyIdReducer } from "./reducer/ProfileCmpny";
import { patchCompanyIdReducer } from "./reducer/ProfileCmpny";

const reducers = combineReducers({
  profileWorkers: ProfileReducer,
  postProfileWorkers: postProfileIdReducer,
  patchProfileWorkers: patchProfileIdReducer,
  profileCompany: CompanyReducer,
  postProfileCompany: postCompanyIdReducer,
  patchProfileCompany: patchCompanyIdReducer,
});

const configureStore = () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  return { store };
};

export default configureStore;
