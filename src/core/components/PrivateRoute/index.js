import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import History from "@core/components/History";
import { useAuth0 } from "@/react-auth0-spa.js";

const PrivateRoute = (props) => {
  const { component: Component, path, ...rest } = props;
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();
  useEffect(() => {
    const matchPath = History.location.pathname === path;
    if (matchPath) {
      if (loading || isAuthenticated) {
        return;
      }
      const fn = async () => {
        await loginWithRedirect({
          appState: { targetUrl: window.location.pathname },
        });
      };
      fn();
    }
  }, [loading, isAuthenticated, loginWithRedirect, path]);

  const render = (props) =>
    isAuthenticated === true ? <Component {...props} /> : null;

  return <Route exact path={path} render={render} {...rest} />;
};

export default PrivateRoute;
