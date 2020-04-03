import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import RankingStars from "@core/components/RankingStars";
import Dialog from "@material-ui/core/Dialog";
import useStyle from "./style";

export default function RankingModal(props) {
  const classes = useStyle();
  const defaultValue = props.movie && props.movie.stars ? props.movie.stars : 0;
  const [value, setValue] = useState();
  const { open, onCancel, onConfirm } = props;

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  function handleMark(rate) {
    const unMark = rate === value;
    if (unMark) return setValue(0);
    setValue(rate);
  }

  function handleCloseModal(action, arg) {
    const isCancel = action === "cancel";
    const isConfirm = action === "confirm";
    if (isCancel) onCancel(arg);
    if (isConfirm) onConfirm(arg);
  }

  return (
    <Dialog open={open}>
      <RankingStars
        mode="rate"
        onMark={handleMark}
        value={value}
      ></RankingStars>
      <footer className={classes.footer}>
        <Button
          className={classes.btnCancel}
          variant="text"
          size="small"
          onClick={() => handleCloseModal("cancel")}
        >
          Cancelar
        </Button>
        <Button
          className={classes.btnConfirm}
          variant="text"
          size="small"
          onClick={() => handleCloseModal("confirm", value)}
        >
          Ok
        </Button>
      </footer>
    </Dialog>
  );
}
