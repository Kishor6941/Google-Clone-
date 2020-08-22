import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
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
