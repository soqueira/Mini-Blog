import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import firebase, {createFirestoreInstance} from "firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import {getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";

import "./index.css";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, fbConfig)
  )
)
const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};
M.AutoInit();

ReactDOM.render(
   <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
