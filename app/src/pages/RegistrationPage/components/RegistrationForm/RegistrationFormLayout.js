import BasicSelect from "../../../../commonComponents/Select";

import CustomCircularProgress from "../../../../commonComponents/CircularProgress";

const RegistrationForm = ({
  isLoading,
  isFormValid,
  formData,
  onSubmit,
  onChange,
  error,
}) => {
  return (
    <div>
      {isLoading ? (
        <CustomCircularProgress />
      ) : (
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
            name="firstName"
            onChange={onChange}
          />
          <input
            type="text"
            value={formData.lastName}
            name="lastName"
            onChange={onChange}
          />
          <input
            type="phone"
            value={formData.phone}
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
            type="password"
            value={formData.passwordConfirm}
            name="passwordConfirm"
            onChange={onChange}
          />
          <div>
            <BasicSelect
              value={formData.gender}
              name="gender"
              label="GENDER"
              onChange={onChange}
            />
          </div>
          {error && <div>{error}</div>}
          <button disabled={!isFormValid} role="submit">
            SIGNUP
          </button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
