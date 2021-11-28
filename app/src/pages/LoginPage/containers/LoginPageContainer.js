import LoginForm from "../components/LoginForm";
import { useForm } from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

import { LOG_IN_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routeNames";

import isEmail from "validator/es/lib/isEmail";

const LoginPageContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { isLoading, isAuth, error } = useSelector((state) => state.auth);

  const [formData, handleChange] = useForm({
    email: "",
    password: "",
  });

  const isEmailValid = isEmail(formData.email);
  const isPasswordValid = formData.password.length > 0;
  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = useCallback(
    (event) => {
      if (isFormValid) {
        event.preventDefault();
        dispatch(LOG_IN_REQUEST(formData));
      }
    },
    [formData, isFormValid]
  );

  useLayoutEffect(() => {
    if (isAuth) {
      history.push(ROUTES.POKEMONS_PAGE);
    }
  }, [isAuth]);

  return (
    <LoginForm
      isLoading={isLoading}
      isFormValid={isFormValid}
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      error={error}
    />
  );
};

export default LoginPageContainer;
