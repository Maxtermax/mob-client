import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function UserComments(props) {
  const { comments = [] } = props;
  const classes = useStyles();

  return comments.map(({ id, text, createAt, user }) => (
    <List key={id} className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt={`Foto de perfil de ${user.name}`}
            src={user.picture || "/static/images/avatar/1.jpg"}
          />
        </ListItemAvatar>
        <ListItemText
          primary={user.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                style={{ display: "block" }}
                color="textPrimary"
              >
                {moment(new Date(createAt)).format("dddd, MMMM Do YYYY")}
              </Typography>
              {text}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider></Divider>
    </List>
  ));
}
