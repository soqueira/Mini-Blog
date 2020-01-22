import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCHcT1MwLxs1Ob8JFApMpdwXjMMMjfnTQM",
  authDomain: "miniblog-2f565.firebaseapp.com",
  databaseURL: "https://miniblog-2f565.firebaseio.com",
  projectId: "miniblog-2f565",
  storageBucket: "miniblog-2f565.appspot.com",
  messagingSenderId: "494282048102",
  appId: "1:494282048102:web:74a98045adbd808c84a3a7",
  measurementId: "G-L5R1JC67HT"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
