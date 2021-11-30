import { CircularProgress, Input } from "@mui/material";

import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const LoginFormLayout = ({
  isLoading,
  isFormValid,
  formData,
  onChange,
  onSubmit,
  error,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.formArea}>
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
            <div className={styles.input}>
              <Input
                type="password"
                value={formData.password}
                name="password"
                onChange={onChange}
                placeholder="Password"
              />
            </div>

            <div className={styles.button}>
              <button
                className={styles.btn}
                disabled={!isFormValid}
                role="submit"
              >
                LOGIN
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
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

export default LoginFormLayout;
