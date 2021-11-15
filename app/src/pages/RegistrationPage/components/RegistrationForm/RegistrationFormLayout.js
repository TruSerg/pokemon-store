const RegistrationForm = ({ formData, onChange, onSubmit, buttonDisabled }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        value={formData.email}
        name="email"
        onChange={onChange}
      />
      <input
        type="text"
        value={formData.firstName}
        name="text"
        onChange={onChange}
      />
      <input
        type="text"
        value={formData.lastName}
        name="text"
        onChange={onChange}
      />
      <input
        type="text"
        value={formData.gender}
        name="text"
        onChange={onChange}
      />
      <input
        type="phone"
        value={formData.gender}
        name="phone"
        onChange={onChange}
      />
      <input
        type="password"
        value={formData.password}
        name="password"
        onChange={onChange}
      />
      <input
        value={formData.gender}
        name="gender"
        label="GENDER"
        onChange={onChange}
      />
      <button disabled={buttonDisabled} role="submit">
        SIGNUP
      </button>
    </form>
  );
};

export default RegistrationForm;
