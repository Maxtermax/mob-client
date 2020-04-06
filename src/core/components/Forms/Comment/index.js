import React, { useState, useContext, useRef } from "react";
import style from "./style.js";
import uniqueId from "@core/utils/uniqueId";
import IconButton from "@material-ui/core/IconButton";
import Send from "@material-ui/icons/Send";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import { validText } from "@core/utils/validator.js";
import { MovieContext } from "@core/context/MovieContext";
import { FeedContext } from "@core/context/FeedContext";
import { useAuth0 } from "@/react-auth0-spa.js";
import services from "@core/services";
const { StreamPromises, createComment } = services;
export const httpStream = new StreamPromises(1);

export default function Comments() {
  const { movie, userId, addComment } = useContext(MovieContext);
  const { onSuccess, onFail } = useContext(FeedContext);
  const { getTokenSilently } = useAuth0();
  const [text, setText] = useState("");
  const [isValid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const textRef = useRef(null);
  const classes = style();

  function handleTextChange(event) {
    const { value } = event.target;
    setValid(validText(value));
    setText(value);
  }

  async function tryCreateComment() {
    setLoading(true);
    const token = await getTokenSilently();
    httpStream.push({
      id: uniqueId(),
      onResponse(response) {
        setLoading(false);
        if (response.ok) {
          const { id = "" } = response;
          addComment({ id, text, createAt: new Date() });
          setText("");
          setValid(false);
          textRef.current.querySelector("textarea").value = "";
          return onSuccess();
        }
        onFail();
      },
      definition: () => {
        const { id: movieId } = movie;
        return createComment({
          token,
          path: "/api/v1/comments/create",
          data: { movieId, userId, text },
        });
      },
    });
  }

  return (
    <div className={classes.wrapTextarea}>
      <TextField
        className={classes.textarea}
        ref={textRef}
        error={!isValid && text !== ""}
        label="Escribe un comentario"
        id="standard-multiline-static"
        multiline
        rowsMax="5"
        onChange={handleTextChange}
        disabled={loading}
      />
      <IconButton
        onClick={tryCreateComment}
        disabled={!isValid || loading}
        aria-label="añadir comentario"
      >
        {loading ? <CircularProgress></CircularProgress> : <Send></Send>}
      </IconButton>
    </div>
  );
}
