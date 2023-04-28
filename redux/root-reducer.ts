import { combineReducers } from "redux";
import alertReducer from "./alert/alertReducer";
import { appStateReducer } from "./appState/appReducer";
import { hotelReducer } from "./hotels/hotelReducer";

export default combineReducers({
     alertReducer,
     appStateReducer,
     hotelReducer,
     // SignInUserReducer: persistReducer(signInPersistConfig, SignInUserReducer),
});
