import React from "react";
import { Router, Switch } from "react-router";
import Layout from "@core/components/Layout";
import History from "@core/components/History";
// import NavBar from "@core/components/NavBar";
// import { useAuth0 } from "@/react-auth0-spa.js";
/*
function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Router history={History}>
        <Switch>
          <Layout></Layout>
        </Switch>
      </Router>
    </div>
  );
}
*/

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
export default App;
