import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  wrap_section: {
    position: "absolute",
    top: "0px",
    width: "100%",
    height: "100%",
    paddingTop: "110px"
  },
  spinner: {
    textAlign: "center",
    height: "100%",
    width: "100%",
    display: "grid",
    gridTemplateRows: "1fr 1fr 1fr",
    gridTemplateColumns: "1fr 1fr 1fr",
    position: "fixed",
    left: "0px",
    zIndex: 2000
  },
  papper: {
    background: "#fafafa"
  },
  spinner_progress: {
    gridArea: "2/2",
    margin: "auto"
  },
  container: {
    background: "white",
    padding: "0px",
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      padding: "0px !important"
    }
  }
}));

export default styles;
