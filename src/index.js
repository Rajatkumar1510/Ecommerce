import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reduxers";
const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
