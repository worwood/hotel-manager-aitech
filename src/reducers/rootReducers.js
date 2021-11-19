import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { informesReducer } from "./informesReducer";
import { registerFormReducer } from "./registerFormReducer";
import { uiReducer } from "./uiReducers";
import { viewReducer } from "./viewReducer";

export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    registerForm: registerFormReducer,
    view: viewReducer,
    inform: informesReducer,
})