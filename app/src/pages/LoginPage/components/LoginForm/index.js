import { CircularProgress } from "@mui/material";

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
      <form onSubmit={onSubmit}>
        <input
          type="email"
          value={formData.email}
          name="email"
          onChange={onChange}
        />
        <input
          type="password"
          value={formData.password}
          name="password"
          onChange={onChange}
        />
        {error && <div>{error}</div>}
        <button disabled={!isFormValid} role="submit">
          LOGIN
        </button>
        <button onClick={handleGoToSignup}>SIGNUP</button>
      </form>
    </div>
  );
};

export default LoginForm;
