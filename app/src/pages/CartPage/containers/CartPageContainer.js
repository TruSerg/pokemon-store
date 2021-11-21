import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";

import CartPageLayout from "../components/CartLayout/CartPageLayout";
import { useCart } from "../../../hooks";

import { GET_CART_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routeNames";

const CartPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { info } = useSelector((state) => state.auth);

  const { isLoading, itemsList, totalPrice } = useSelector(
    (state) => state.cartPage
  );

  const {
    handleDeletePokemonFromCart,
    handleIncrement,
    handleDecrement,
    handleConfirmOrder,
  } = useCart();

  useEffect(() => {
    dispatch(GET_CART_REQUEST());
  }, [dispatch]);

  const handleGoToDetails = useCallback(
    (id) => {
      history.push(`${ROUTES.POKEMONS_PAGE}/${id}`);
    },
    [history]
  );

  const handleGoToUserPage = useCallback(() => {
    history.push(ROUTES.USER_PAGE);
  }, [history]);

  return (
    <CartPageLayout
      isLoading={isLoading}
      totalPrice={totalPrice}
      itemsList={itemsList}
      handleDeletePokemonFromCart={handleDeletePokemonFromCart}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleGoToDetails={handleGoToDetails}
      handleConfirmOrder={handleConfirmOrder}
      handleGoToUserPage={handleGoToUserPage}
    />
  );
};

export default CartPageContainer;
