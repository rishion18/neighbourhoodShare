import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store, persistor } from "../src/redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import 'leaflet/dist/leaflet.css';


createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
