import PropTypes from "prop-types";

import BasicSelect from "../../../../commonComponents/Select";

import {
  Alert,
  CircularProgress,
  Snackbar,
  Button,
  Input,
  Box,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { withStyles } from "@mui/styles";

import styles from "./styles";

const RegistrationForm = ({
  isFormValid,
  formData,
  isOpen,
  handleClose,
  onSubmit,
  onChange,
  error,
  handleGoToLoginPage,
  classes,
}) => {
  return (
    <Box className={classes.wrapper}>
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
          <Box>
            <Input
              type="text"
              value={formData.firstName}
              name="firstName"
              onChange={onChange}
              placeholder="First name"
            />
          </Box>
          <Box>
            <Input
              type="text"
              value={formData.lastName}
              name="lastName"
              onChange={onChange}
              placeholder="Last name"
            />
          </Box>
          <Box>
            <Input
              type="phone"
              value={formData.phone}
              name="phone"
              onChange={onChange}
              placeholder="Phone"
            />
          </Box>
          <Box>
            <Input
              type="password"
              value={formData.password}
              name="password"
              onChange={onChange}
              placeholder="Password"
            />
          </Box>
          <Box className={classes.input}>
            <Input
              type="password"
              value={formData.passwordConfirm}
              name="passwordConfirm"
              onChange={onChange}
              placeholder="Confirm password"
            />
          </Box>
          <Box className={classes.select}>
            <BasicSelect
              value={formData.gender}
              name="gender"
              label="GENDER"
              onChange={onChange}
            />
          </Box>
          {error && <Box className={classes.error}>{error}!</Box>}
          <Box className={classes.button}>
            <Button
              variant="outlined"
              className={classes.btn}
              disabled={!isFormValid}
              role="submit"
            >
              SIGNUP
            </Button>
          </Box>
        </form>
      </Box>
      <Box className={classes.snackBar}>
        <Snackbar open={isOpen} onClose={handleClose}>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Your profile has been successfully created
            <button
              onClick={handleGoToLoginPage}
              variant="contained"
              color="success"
              size="small"
            >
              LOGIN
            </button>
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

RegistrationForm.propTypes = {
  isFormValid: PropTypes.func.isRequired,
  formData: PropTypes.objectOf(
    PropTypes.shape({
      email: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      passwordConfirm: PropTypes.string.isRequired,
    })
  ),
  isOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  handleGoToLoginPage: PropTypes.func.isRequired,
};

export default withStyles(styles)(RegistrationForm);
