import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const iLBConfig = {
    key: "ilearn-block",
    storage: storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ["SignInUserReducer"],
};

const reducer = persistReducer<any, any>(iLBConfig, rootReducer);

const store =
    process.env.NODE_ENV === "production"
        ? configureStore({
              reducer: rootReducer,
              middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
              devTools: false,
          })
        : configureStore({
              reducer,
              middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
              devTools: true,
          });

// const persistor = persistStore(store);

//  persistor.purge();
//  localStorage.clear();

export { store };
