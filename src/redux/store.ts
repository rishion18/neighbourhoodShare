import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";
import itemReducer from "./slices/item.slice";
import uiReducer from "./slices/ui.slice";
import requestReducer from "./slices/requests.slice"; 



export const store = configureStore({
  reducer: {
    user: userReducer,
    items: itemReducer,
    ui: uiReducer, 
    requests: requestReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
