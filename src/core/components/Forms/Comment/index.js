import React, { useState } from "react";
import style from "./style.js";
import IconButton from "@material-ui/core/IconButton";
import Send from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import { validText } from "@core/utils/validator.js";

export default function Comments() {
  const [text, setText] = useState("");
  const [isValid, setValid] = useState(false);
  const classes = style();

  function handleTextChange(event) {
    const { value } = event.target;
    setValid(validText(value));
    setText(value);
  }

  return (
      <div className={classes.wrapTextarea}>
        <TextField
          className={classes.textarea}
          error={!isValid && text !== ""}
          label="Escribe un comentario"
          id="standard-multiline-static"
          multiline
          rowsMax="5"
          onChange={handleTextChange}
        />
        <IconButton disabled={!isValid} aria-label="añadir comentario">
          <Send></Send>
        </IconButton>
      </div>
      )
  }