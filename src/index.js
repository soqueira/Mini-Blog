import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import App from "./App";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createFirestoreInstance, getFirestore, reduxFirestore } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
// import config from "./config/fbConfig";

M.AutoInit();

const config = {
  apiKey: "AIzaSyCHcT1MwLxs1Ob8JFApMpdwXjMMMjfnTQM",
  authDomain: "miniblog-2f565.firebaseapp.com",
  databaseURL: "https://miniblog-2f565.firebaseio.com",
  projectId: "miniblog-2f565",
  storageBucket: "miniblog-2f565.appspot.com",
  messagingSenderId: "494282048102",
  appId: "1:494282048102:web:74a98045adbd808c84a3a7",
  measurementId: "G-L5R1JC67HT"
};
firebase.initializeApp(config);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, config)
  )
)

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);