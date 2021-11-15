const LoginForm = ({
  formData,
  onChange,
  onSubmit,
  handleGoToSignup,
  error,
  buttonDisabled,
}) => {
  return (
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
      <button disabled={buttonDisabled} role="submit">
        LOGIN
      </button>
      <button onClick={handleGoToSignup}>SIGNUP</button>
    </form>
  );
};

export default LoginForm;
