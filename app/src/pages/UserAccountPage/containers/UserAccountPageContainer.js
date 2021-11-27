import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserAccountPageLayout from "../components/UserAccountLayout/UserAccountPageLayout";

const UserAccountPageContainer = () => {
  const { isLoading } = useSelector((state) => state.userAccountPage);

  const { info } = useSelector((state) => state.auth);

  const { itemsList, totalPrice, ordersList } = useSelector(
    (state) => state.userAccountPage
  );

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
