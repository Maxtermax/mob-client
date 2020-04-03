import React, { useState } from "react";
import useStyle from "./style.js";

export default function Picture(props) {
  const { src = "", size = "" } = props;
  const classes = useStyle();
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${src})`,
          opacity: loaded ? "1" : "0"
        }}
        className={`${size === "contain" ? classes.contain : ""} ${
          size === "cover" ? classes.cover : ""
        } ${classes.container}`}
      ></div>
      <img
        src={src}
        onLoad={() => setLoaded(true)}
        alt=""
        width="0"
        height="0"
      />
    </>
  );
}
