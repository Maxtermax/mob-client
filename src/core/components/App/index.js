import React from "react";
import { Router, Switch } from "react-router";
import Layout from "@core/components/Layout";
import PlaceCenter from "@core/components/PlaceCenter";
import CircularProgress from "@material-ui/core/CircularProgress";
import History from "@core/components/History";
import { useAuth0 } from "@/react-auth0-spa.js";

function App() {
  const { loading } = useAuth0();
  if (loading) {
    return (
      <PlaceCenter>
        <CircularProgress />
      </PlaceCenter>
    );
  }
  return (
    <div>
      <Router history={History}>
        <Switch>
          <Layout></Layout>
        </Switch>
      </Router>
    </div>
  );
}

/*
function App() {
  return (
    <div>
      <Router history={History}>
        <Switch>
          <Layout></Layout>
        </Switch>
      </Router>
    </div>
  );
}
*/

export default App;
