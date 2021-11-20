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

  const { isLoading, itemsList, totalPrice, quantity } = useSelector(
    (state) => state.cartPage
  );

  const [
    handleAddPokemonToCart,
    handleDeletePokemonFromCart,
    handleIncrement,
    handleDecrement,
  ] = useCart();

  useEffect(() => {
    dispatch(GET_CART_REQUEST());
  }, []);

  const handleGoToDetails = useCallback((id) => {
    history.push(`/products/${id}`);
  }, []);

  const handleGoToUserPage = useCallback(() => {
    history.push(ROUTES.USER_PAGE);
  }, [history]);

  return (
    <CartPageLayout
      isLoading={isLoading}
      totalPrice={totalPrice}
      itemsList={itemsList}
      quantity={quantity}
      handleAddPokemonToCart={handleAddPokemonToCart}
      handleDeletePokemonFromCart={handleDeletePokemonFromCart}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleGoToDetails={handleGoToDetails}
      handleGoToUserPage={handleGoToUserPage}
    />
  );
};

export default CartPageContainer;
