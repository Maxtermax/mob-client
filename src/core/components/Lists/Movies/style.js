import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => {
  return {
    root: {
      width: "100%",
      margin: "0px auto",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      maxWidth: 480
    },
    container: {
      width: "100%",
      height: "100%",
      maxHeight: "750px",
      marginBottom: "50px",
      overflowY: "auto"
    },
    container_item: {
      paddingLeft: 15,
      paddingRight: 15
    },
    container_item_text: {
      color: "black",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      display: "block",
      width: "100%"
    },
    container_item_text_header: {
      display: "block",
      fontSize: "10px",
      "& b": {
        marginRight: 5
      }
    },
    container_item_button: {
      marginTop: "10px",
      fontWeight: 400,
      marginRight: "10px",
      color: "black",
      [theme.breakpoints.down("md")]: {
        marginRight: "5px",
        marginTop: "5px"
      }
    },
    container_item_icon: {
      fontSize: "20px"
    },
    container_item_icon_text: {
      fontSize: "11px",
      marginTop: "3px",
      marginLeft: "5px",
      verticalAlign: "top"
    },
    container_item_image: {
      width: "100%",
      height: "90%"
    }
  };
});
