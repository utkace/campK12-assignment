import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../containers/Landing/Landing";
import Courses from "../containers/Courses/Courses";
export default function AppNavigator() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
      </Switch>
    </Router>
  );
}
