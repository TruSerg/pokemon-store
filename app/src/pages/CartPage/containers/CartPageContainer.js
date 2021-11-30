import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";

import CartPageLayout from "../components/CartLayout/CartPageLayout";
import { useCart, useSnackBar } from "../../../hooks";

import { GET_CART_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routeNames";
import { ADD_ORDER_REQUEST } from "../../UserAccountPage/actions";

const CartPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { info } = useSelector((state) => state.auth);

  const { isLoading, itemsList, totalPrice } = useSelector(
    (state) => state.cartPage
  );

  const {
    handleDeletePokemonFromCart,
    handlePokemonQuantityIncrement,
    handlePokemonQuantityDecrement,
  } = useCart();

  const { isOpen, handleOpen, handleClose } = useSnackBar();

  const goToUserPage = useCallback(() => {
    handleClose();

    history.push(ROUTES.USER_PAGE);

    window.location.reload();
  }, []);

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

  const handleConfirmOrder = useCallback(() => {
    handleOpen();
    const addOrder = {
      itemsList: itemsList,
      totalPrice: totalPrice,
      customerId: info._id,
    };

    dispatch(ADD_ORDER_REQUEST(addOrder));
  }, [dispatch, itemsList, totalPrice, info]);

  return (
    <CartPageLayout
      isLoading={isLoading}
      totalPrice={totalPrice}
      itemsList={itemsList}
      handleDeletePokemonFromCart={handleDeletePokemonFromCart}
      handlePokemonQuantityIncrement={handlePokemonQuantityIncrement}
      handlePokemonQuantityDecrement={handlePokemonQuantityDecrement}
      handleGoToDetails={handleGoToDetails}
      handleConfirmOrder={handleConfirmOrder}
      handleGoToUserPage={handleGoToUserPage}
      isOpen={isOpen}
      goToUserPage={goToUserPage}
    />
  );
};

export default CartPageContainer;
