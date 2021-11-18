import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { useCart } from "../../../hooks";
import { GET_CART_REQUEST } from "../actions";

import CartPageLayout from "../components/CartLayout/CartPageLayout";

const CartPageContainer = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

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
      customerId: userInfo._id,
    };
  }, [itemsList, totalPrice, userInfo]);

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
