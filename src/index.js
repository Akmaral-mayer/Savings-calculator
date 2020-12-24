import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import * as eva from "eva-icons";
import "./styles/styles.less";
import { Provider } from "react-redux";
import configureStore from "./store";

export const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>{" "}
  </Provider>,
  document.getElementById("root")
);
