import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    height: "90px",
    flexDirection: "row !important",
    flexShrink: 1,
    justifyContent: "space-between",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  content: {
    maxWidth: "1200px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    margin: "0px auto",
  },
  logo: {
    width: "200px",
    height: "100%",
    backgroundSize: "100px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "9px -22px",
  },
  userImage: {
    height: "60px",
    width: "60px",
    borderRadius: "100%",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  menu: {
    width: "100px",
  },
}));
