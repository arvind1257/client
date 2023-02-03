import { combineReducers } from "redux";
import authReducer from "./auth";
import featureReducer from "./features";
import contactReducer from "./contact"
export default combineReducers({
    authReducer,featureReducer,contactReducer
})