import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "../containers/Landing/Landing";
import Courses from "../containers/Courses/Courses";
export default function AppNavigator() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
