import { combineReducers } from "redux";
import authReducer from "./auth";
import featureReducer from "./features";
export default combineReducers({
    authReducer,featureReducer
})