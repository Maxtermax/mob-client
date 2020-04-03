import React from "react";
import { Router, Switch } from "react-router";
import Layout from "@core/components/Layout";
import History from "@core/components/History";

function App() {
  return (
    <Router history={History}>
      <Switch>
        <Layout></Layout>
      </Switch>
    </Router>
  );
}

export default App;
