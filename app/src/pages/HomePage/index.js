import { useCallback } from "react";

import { Box, Button } from "@mui/material";
import { withStyles } from "@mui/styles";

import { ROUTES } from "../../routes/routeNames";
import { useHistory } from "react-router-dom";

import styles from "./styles";

import pokemons from "../../static/images/pokemons.jpg";

const HomePage = ({ classes }) => {
  const history = useHistory();

  const handleGoToLogin = useCallback(() => {
    history.push(ROUTES.LOGIN);
  }, [history]);

  return (
    <Box
      style={{ backgroundImage: `url(${pokemons})` }}
      className={classes.homeWrapper}
    >
      <Box className={classes.homeMail}>
        <h1 className={classes.homeTitle}>
          DO YOU WANT ONE OF THESE BEAUTIES, THEN CLICK SOON !!!
        </h1>
        <Button
          onClick={handleGoToLogin}
          variant="contained"
          color="success"
          className={classes.btn}
        >
          GO
        </Button>
      </Box>
    </Box>
  );
};

export default withStyles(styles)(HomePage);
