import React from "react";
import Fade from "@material-ui/core/Fade";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "@/react-auth0-spa.js";
import logo from "@core/assets/images/logo.png";
import style from "./style";

export default function Login() {
  const classes = style();
  const { loginWithRedirect } = useAuth0();

  return (
    <section className={classes.root}>
      <Fade in={true} timeout={800}>
        <article className={classes.container}>
          <img
            aria-label="Mob logo"
            width="150"
            height="150"
            src={logo}
            alt="Mob logo"
          />

          <div className={classes.wrapBtn}>
            <Button
              aria-label="Iniciar sesión"
              size="large"
              endIcon={<Icon className={classes.loginIcon}>fingerprint</Icon>}
              className={classes.btnLogin}
              color="primary"
              onClick={() => loginWithRedirect()}
            >
              Iniciar sesión
            </Button>
          </div>
        </article>
      </Fade>
    </section>
  );
}
