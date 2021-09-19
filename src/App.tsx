import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import "./styles/main.scss";
import HomePage from "./pages/home";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dash">
          <Dashboard />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
