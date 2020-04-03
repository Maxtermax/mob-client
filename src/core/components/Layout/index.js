import React, { Suspense } from "react";
import Login from "@core/views/Login";
import PlaceCenter from "@core/components/PlaceCenter";
// import PrivateRoute from "@core/components/PrivateRoute";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Route } from "react-router";

const Feed = React.lazy(() => import("@core/views/Feed"));
/*
export default function Layout() {
  return (
    <main>
      <PrivateRoute
        path="/"
        component={
          <Suspense
            fallback={
              <PlaceCenter>
                <CircularProgress />
              </PlaceCenter>
            }
          >
            <Feed />
          </Suspense>
        }
      />
      <Route
        path={"/login"}
        exact={true}
        render={(props) => <Login {...props} />}
      />
    </main>
  );
}
*/

export default function Layout() {
  return (
    <main>
      <Route
        path={"/login"}
        exact={true}
        render={(props) => <Login {...props} />}
      />
      <Route
        path={"/"}
        exact={true}
        render={(props) => (
          <Suspense
            fallback={
              <PlaceCenter>
                <CircularProgress />
              </PlaceCenter>
            }
          >
            <Feed {...props} />
          </Suspense>
        )}
      />
    </main>
  );
}
