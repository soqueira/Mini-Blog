import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

M.AutoInit();

ReactDOM.render(<App />, document.getElementById("root"));
