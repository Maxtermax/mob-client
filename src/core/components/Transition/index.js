import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";
import useTimeout from "@core/hooks/useTimeout";
import style from "./style.js";

function Transition(props) {
  let { children, show = false, loading = true, timeout = 0 } = props;
  const classes = style();
  const timeup = useTimeout(timeout);
  const [spinner, setSpinner] = useState(loading);
  const [display, setDisplay] = useState(show);
  useEffect(() => {
    setSpinner(loading);
  }, [loading]);

  useEffect(() => {
    setDisplay(show);
  }, [show]);
  let hasTimeout = timeout !== 0;
  useEffect(
    function watchTimeout() {
      setSpinner(true);
      setDisplay(false);
    },
    [hasTimeout]
  );

  useEffect(
    function showComponentWhenTimeIsUp() {
      if (timeup === false) {
        setSpinner(false);
        setDisplay(true);
      }
    },
    [timeup]
  );

  return (
    <div className={classes.wrap_section}>
      {spinner ? (
        <div className={classes.spinner}>
          <CircularProgress
            variant="indeterminate"
            disableShrink
            className={classes.spinner_progress}
          />
        </div>
      ) : null}
      <Fade in={display}>
        <Paper
          elevation={0}
          className={`${classes.papper} ${
            display && !spinner ? `appear ${classes.container}` : "disappear"
          } `}
        >
          {display ? children : <div></div>}
        </Paper>
      </Fade>
    </div>
  );
}

export default Transition;
