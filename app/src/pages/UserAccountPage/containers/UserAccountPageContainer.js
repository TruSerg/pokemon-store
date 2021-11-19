import { useDispatch, useSelector } from "react-redux";

import UserAccountPageLayout from "../components/UserAccountLayout/UserAccountPageLayout";

const UserAccountPageContainer = () => {
  const { isLoading } = useSelector((state) => state.userAccountPage);
  const { info } = useSelector((state) => state.auth);
  const { orderList } = useSelector((state) => state.userAccountPage);

  return (
    <UserAccountPageLayout
      isLoading={isLoading}
      info={info}
      orderList={orderList}
    />
  );
};

export default UserAccountPageContainer;
