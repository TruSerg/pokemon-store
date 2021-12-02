import PropTypes from "prop-types";

import { Box, Button, CircularProgress, Input } from "@mui/material";
import { withStyles } from "@mui/styles";

import styles from "./styles";

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
    <Box className={classes.wrapper}>
      <Box className={classes.formArea}>
        <Box className={classes.form}>
          <form onSubmit={onSubmit}>
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
              <button
                variant="outlined"
                className={classes.btn}
                disabled={!isFormValid}
                role="submit"
              >
                LOGIN
              </button>
            </Box>
            {error && <div>{error}</div>}
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
