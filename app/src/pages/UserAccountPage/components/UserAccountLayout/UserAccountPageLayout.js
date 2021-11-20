import React from "react";

import { CircularProgress } from "@mui/material";

import styles from "./styles.module.scss";

const UserAccountPageLayout = ({ isLoading, info, orderList }) => {
  return (
    <div>
      <h1>PERSONAL ACCOUNT</h1>
      <div>
        {isLoading ? (
          <div className={styles.progressArea}>
            <CircularProgress />
          </div>
        ) : (
          <div>
            <div>
              <h2>PERSONAL DATA</h2>
              <ul>
                <li>{info.firstName}</li>
                <li>{info.lastName}</li>
                <li>Email: {info.email}</li>
                <li>Phone: {info.phone}</li>
                <li>Gender: {info.gender}</li>
              </ul>
            </div>
            {orderList?.map((order) => (
              <div key={order._id}>
                <h3>TOTAL PRICE: {order.totalPrice}</h3>
                {order.itemsList?.map((item) => (
                  <div key={item.id}>
                    <h3>{item.name}</h3>
                    <img src={item.image} alt="" />
                    <p>{item.price}</p>
                    <p>{item.quantity}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAccountPageLayout;
