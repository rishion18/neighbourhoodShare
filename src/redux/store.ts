import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

import userReducer from "./slices/user.slice";
import itemReducer from "./slices/item.slice";
import uiReducer from "./slices/ui.slice";
import requestReducer from "./slices/requests.slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "items", "requests"], 
};

const rootReducer = combineReducers({
  user: userReducer,
  items: itemReducer,
  ui: uiReducer,
  requests: requestReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
