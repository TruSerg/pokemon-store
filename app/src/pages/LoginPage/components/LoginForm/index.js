import { CircularProgress, Input } from "@mui/material";

import styles from "./styles.module.scss";

const LoginForm = ({
  isLoading,
  isFormValid,
  formData,
  onChange,
  onSubmit,
  handleGoToSignup,
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
            <div className={styles.button}>
              <button className={styles.btn} onClick={handleGoToSignup}>
                SIGNUP
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
