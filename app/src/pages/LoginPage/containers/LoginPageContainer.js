import LoginForm from "../components/LoginForm";
import { useForm } from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

import { LOG_IN_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routeNames";

const LoginPageContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { isLoading, isAuth, error } = useSelector((state) => state.auth);

  const [formData, handleChange] = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(LOG_IN_REQUEST(formData));
    },
    [formData, dispatch]
  );

  const handleGoToSignup = useCallback(() => {
    history.push(ROUTES.REGISTRATION);
  }, []);

  useLayoutEffect(() => {
    if (isAuth) {
      history.push(ROUTES.POKEMONS_PAGE);
    }
  }, [isAuth]);

  const buttonDisabled = (formData.email && formData.password) === "";

  return (
    <LoginForm
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      handleGoToSignup={handleGoToSignup}
      isLoading={isLoading}
      error={error}
      buttonDisabled={buttonDisabled}
    />
  );
};

export default LoginPageContainer;
