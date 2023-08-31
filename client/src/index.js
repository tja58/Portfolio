import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import "./styles/index.css";

import reducers from "./store/reducers";
import App from "./App";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
