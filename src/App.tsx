import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "./App.scss";
import HomePage from "./pages/home";

const firebaseConfig = {
  apiKey: "AIzaSyDpTUDYCRuEbWEoGOVNtXtcYeO8qAQ6Ap8",
  authDomain: "resync-htn.firebaseapp.com",
  projectId: "resync-htn",
  storageBucket: "resync-htn.appspot.com",
  messagingSenderId: "82654142599",
  appId: "1:82654142599:web:45e5bb72f92b84c748d822",
  measurementId: "G-9F1PGS7MNP",
};

function App() {
  const app = initializeApp(firebaseConfig);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const analytics = getAnalytics(app);
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
