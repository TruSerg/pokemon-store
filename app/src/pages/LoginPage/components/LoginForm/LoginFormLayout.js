import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { Box, Button, CircularProgress, Input } from "@mui/material";
import { withStyles } from "@mui/styles";

import { ROUTES } from "../../../../routes/routeNames";

import styles from "./styles";
import pikachu from "../../../../static/images/pikachu.png";

const LoginFormLayout = ({
  isLoading,
  isFormValid,
  formData,
  onChange,
  onSubmit,
  error,
  classes,
}) => {
  return (
    <Box
      style={{ backgroundImage: `url(${pikachu})` }}
      className={classes.wrapper}
    >
      <Box className={classes.formArea}>
        <Box className={classes.form}>
          <form onSubmit={onSubmit} id="myForm">
            <Box>
              <Input
                type="email"
                value={formData.email}
                name="email"
                onChange={onChange}
                placeholder="Email"
              />
            </Box>
            <Box className={classes.input}>
              <Input
                type="password"
                value={formData.password}
                name="password"
                onChange={onChange}
                placeholder="Password"
              />
            </Box>

            <Box className={classes.button}>
              <Button
                variant="contained"
                color="success"
                className={classes.btn}
                disabled={!isFormValid}
                type="submit"
                form="myForm"
              >
                LOGIN
              </Button>
            </Box>
            {error && <div className={classes.error}>{error}</div>}
          </form>
        </Box>
      </Box>
    </Box>
  );
};

LoginFormLayout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isFormValid: PropTypes.func.isRequired,
  formData: PropTypes.objectOf(
    PropTypes.shape({
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    })
  ),
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default withStyles(styles)(LoginFormLayout);
