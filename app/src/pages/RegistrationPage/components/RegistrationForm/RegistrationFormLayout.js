import BasicSelect from "../../../../commonComponents/Select";
import styles from "../../../PokemonsPage/components/PokemonLayout/styles.module.scss";
import { CircularProgress } from "@mui/material";

const RegistrationForm = ({
  isLoading,
  formData,
  onSubmit,
  onChange,
  buttonDisabled,
  error,
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
      <button disabled={buttonDisabled} role="submit">
        SIGNUP
      </button>
    </form>
  );
};

export default RegistrationForm;
