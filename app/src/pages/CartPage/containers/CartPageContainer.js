import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import CartPageLayout from "../components/CartLayout/CartPageLayout";
import { useCart } from "../../../hooks";

import { GET_CART_REQUEST } from "../actions";
import { ADD_ORDER_REQUEST } from "../../UserAccountPage/actions";

const CartPageContainer = () => {
  const dispatch = useDispatch();

  const { info } = useSelector((state) => state.auth);

  const { isLoading, itemsList, totalPrice } = useSelector(
    (state) => state.cartPage
  );

  const [
    handleDeletePokemonFromCart,
    handleQuantityIncrement,
    handleQuantityDecrement,
  ] = useCart();

  useEffect(() => {
    dispatch(GET_CART_REQUEST());
  }, []);

  const handleAddOrder = useCallback(() => {
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
      itemsList={itemsList}
      totalPrice={totalPrice}
      handleDeletePokemonFromCart={handleDeletePokemonFromCart}
      handleQuantityIncrement={handleQuantityIncrement}
      handleQuantityDecrement={handleQuantityDecrement}
      handleAddOrder={handleAddOrder}
    />
  );
};

export default CartPageContainer;
