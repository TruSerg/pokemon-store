import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GET_ORDER_REQUEST } from "../actions";
import UserAccountPageLayout from "../components/UserAccountLayout/UserAccountPageLayout";

const UserAccountPageContainer = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.userAccountPage);

  const { info } = useSelector((state) => state.auth);

  const { itemsList, totalPrice, ordersList } = useSelector(
    (state) => state.userAccountPage
  );

  const isAddToCart = useEffect(() => {
    dispatch(GET_ORDER_REQUEST());
  }, [dispatch]);

  return (
    <UserAccountPageLayout
      isLoading={isLoading}
      info={info}
      itemsList={itemsList}
      totalPrice={totalPrice}
      ordersList={ordersList}
    />
  );
};

export default UserAccountPageContainer;
