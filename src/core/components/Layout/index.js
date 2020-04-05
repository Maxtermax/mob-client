import React, { Suspense, Fragment } from "react";
import Login from "@core/views/Login";
import PrivateRoute from "@core/components/PrivateRoute";
import PlaceCenter from "@core/components/PlaceCenter";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Route } from "react-router";

const Feed = React.lazy(() => import("@core/views/Feed"));

function SuspendedFeed() {
  return (
    <Suspense
      fallback={
        <PlaceCenter>
          <CircularProgress />
        </PlaceCenter>
      }
    >
      <Feed />
    </Suspense>
  );
}

export default function Layout() {
  return (
    <Fragment>
      <PrivateRoute path="/" component={SuspendedFeed}></PrivateRoute>
      <Route
        path={"/login"}
        exact={true}
        render={(props) => <Login {...props} />}
      />
    </Fragment>
  );
}
