import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import { Provider } from "react-redux";
import store from "./globalStates/store";
import AppWrapper from "./AppWrapper";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
