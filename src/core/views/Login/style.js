import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    placeItems: "center",
    placeContent: "center",
    height: "100vh"
  },
  container: {
    maxWidth: 400
  },
  wrapBtn: {
    display: "block",
    marginTop: 30
  },
  link: {
    textDecoration: "none"
  },
  loginIcon: {
    fontSize: "40px !important"
  }
}));
