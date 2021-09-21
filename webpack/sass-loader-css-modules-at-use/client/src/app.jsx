import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomePage } from "#pages";
import { Layout } from "#components";

export function App() {
  return (
    <Router>
      <Layout>
        <Switch>
        <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
