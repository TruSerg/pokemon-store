import PropTypes from "prop-types";

import BasicSelect from "../../../../commonComponents/Select";

import {
  Alert,
  CircularProgress,
  Snackbar,
  Button,
  Input,
} from "@mui/material";

import styles from "./styles.module.scss";
import CheckIcon from "@mui/icons-material/Check";

const RegistrationForm = ({
  isFormValid,
  formData,
  isOpen,
  handleClose,
  onSubmit,
  onChange,
  error,
  handleGoToLoginPage,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <form onSubmit={onSubmit}>
          <div>
            <Input
              type="email"
              value={formData.email}
              name="email"
              onChange={onChange}
              placeholder="Email"
            />
          </div>
          <div>
            <Input
              type="text"
              value={formData.firstName}
              name="firstName"
              onChange={onChange}
              placeholder="First name"
            />
          </div>
          <div>
            <Input
              type="text"
              value={formData.lastName}
              name="lastName"
              onChange={onChange}
              placeholder="Last name"
            />
          </div>
          <div>
            <Input
              type="phone"
              value={formData.phone}
              name="phone"
              onChange={onChange}
              placeholder="Phone"
            />
          </div>
          <div>
            <Input
              type="password"
              value={formData.password}
              name="password"
              onChange={onChange}
              placeholder="Password"
            />
          </div>
          <div className={styles.input}>
            <Input
              type="password"
              value={formData.passwordConfirm}
              name="passwordConfirm"
              onChange={onChange}
              placeholder="Confirm password"
            />
          </div>
          <div className={styles.select}>
            <BasicSelect
              value={formData.gender}
              name="gender"
              label="GENDER"
              onChange={onChange}
            />
          </div>
          {error && <div className={styles.error}>{error}!</div>}
          <div className={styles.button}>
            <button
              className={styles.btn}
              disabled={!isFormValid}
              role="submit"
            >
              SIGNUP
            </button>
          </div>
        </form>
      </div>
      <div className={styles.snackBar}>
        <Snackbar open={isOpen} onClose={handleClose}>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Your profile has been successfully created
            <Button
              onClick={handleGoToLoginPage}
              variant="contained"
              color="success"
              size="small"
            >
              LOGIN
            </Button>
          </Alert>
        </Snackbar>
      </div>
    </div>
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

export default RegistrationForm;
