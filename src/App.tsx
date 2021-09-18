import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import "./styles/main.scss";
import HomePage from "./pages/home";
import StudentDashboard from "./pages/student-dashboard";
import AdminDashboard from "./pages/admin-dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/student">
          <StudentDashboard />
        </Route>
        <Route path="/admin">
          <AdminDashboard />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
