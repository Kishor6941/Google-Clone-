import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>This is the search Page</h1>
            {/* This one  is result page */}
          </Route>
          <Route path="/">
            <Home /> {/* This one is search on page */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
