import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import logo from "@core/assets/images/mob.svg";
import { useAuth0 } from "@/react-auth0-spa.js";
import useStyle from "./style.js";

const NavBar = (props) => {
  const { logout } = useAuth0();
  const classes = useStyle();
  const { user = {} } = props;
  console.log({ user });
  const { picture = "" } = user;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar color="transparent" position="static" className={classes.root}>
      <div className={classes.content}>
        <div
          className={classes.logo}
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
        <div className={classes.menu}>
          <Button
            aria-controls="opciones"
            aria-haspopup="true"
            onClick={handleClick}
          >
            {picture ? (
              <div
                style={{ backgroundImage: `url(${picture})` }}
                className={classes.userImage}
              ></div>
            ) : (
              <AccountCircle />
            )}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => logout()}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </AppBar>
  );
};

export default NavBar;
