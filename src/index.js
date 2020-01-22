import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

const store = createStore(rootReducer, applyMiddleware(thunk) );

M.AutoInit();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
