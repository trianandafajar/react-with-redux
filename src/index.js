import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./state/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Mengukur performa aplikasi
reportWebVitals();
