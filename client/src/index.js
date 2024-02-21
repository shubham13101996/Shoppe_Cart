import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "antd/dist/reset.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { Provider } from "react-redux";
import Store from "./app/Store.js";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Provider store={Store}>
        <Toaster position="top-center" reverseOrder={false} />

        <App />
      </Provider>
    </BrowserRouter>
  </AuthProvider>
);
