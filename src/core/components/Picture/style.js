import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.035)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    minHeight: 270,
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "all 0.1s ease-in",
    marginBottom: "10px",
  },
  cover: {
    backgroundSize: "cover",
  },
  contain: {
    backgroundSize: "contain",
  },
}));
