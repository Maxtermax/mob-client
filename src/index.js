import React from "react";
import ReactDOM from "react-dom";
import App from "@core/components/App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./react-auth0-spa.js";
import config from "./auth_config.json";
import history from "@core/components/History";
import middlewares from "@core/services/middlewares";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    audience={config.audience}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
    authStateChange={middlewares}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
