import RegistrationForm from "../components/RegistrationForm/RegistrationFormLayout";
import { useForm } from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

import { SIGN_UP_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routeNames";

const RegistrationPageContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { isAuth } = useSelector((state) => state.auth);

  const [formData, handleChange] = useForm({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    phone: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(SIGN_UP_REQUEST(formData));
    },
    [formData]
  );

  useLayoutEffect(() => {
    if (isAuth) {
      history.push(ROUTES.LOGIN);
    }
  }, [isAuth]);

  const buttonDisabled =
    (formData.email,
    formData.firstName,
    formData.lastName,
    formData.gender,
    formData.phone,
    formData.password,
    formData.passwordConfirm) === "";

  return (
    <RegistrationForm
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}
    />
  );
};

export default RegistrationPageContainer;
