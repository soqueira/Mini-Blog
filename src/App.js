import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import DashBoard from "./components/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Switch>
          <Route path="/" component={DashBoard} />
        </Switch>
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;
