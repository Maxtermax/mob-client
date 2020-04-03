import React, { Suspense } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyle from "./style";

const Picture = React.lazy(() => import("@core/components/Picture"));

function LoadImage(props) {
  const classes = useStyle();
  return (
    <Suspense
      fallback={
        <div className={classes.wrapSpinner}>
          <CircularProgress></CircularProgress>
        </div>
      }
    >
      <Picture {...props}></Picture>
    </Suspense>
  );
}

export default LoadImage;
