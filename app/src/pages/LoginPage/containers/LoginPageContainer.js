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

  const { isAuth } = useSelector((state) => state.auth);

  const [formData, handleChange] = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(LOG_IN_REQUEST(formData));
    },
    [formData]
  );

  useLayoutEffect(() => {
    if (isAuth) {
      history.push(ROUTES.POKEMONS_PAGE);
    }
  }, [isAuth]);

  return (
    <LoginForm
      formValue={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default LoginPageContainer;
