import './App.css';
import Home from './components/Home/Home/Home';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <Router>
        <Switch>
        <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
        
    </Router>
  );
}

export default App;
