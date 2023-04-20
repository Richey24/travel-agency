import { combineReducers } from "redux";
import alertReducer from "./alert/alertReducer";
import { appStateReducer } from "./appState/appReducer";

export default combineReducers({
     alertReducer,
     appStateReducer,
     // SignInUserReducer: persistReducer(signInPersistConfig, SignInUserReducer),
});
