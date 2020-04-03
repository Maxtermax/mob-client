import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 20
  },
  mark: {
    color: "#FF9800"
  },
  unmark: {
    color: "grey"
  }
}));
