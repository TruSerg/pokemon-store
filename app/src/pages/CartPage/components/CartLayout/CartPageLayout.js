import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

import styles from "./styles.module.scss";

const CartPageLayout = ({
  itemsList,
  totalPrice,
  handleGoToDetails,
  handleIncrement,
  handleDecrement,
  handleDeletePokemonFromCart,
  handleConfirmOrder,
  handleGoToUserPage,
}) => {
  return (
    <div>
      <div className={styles.orderWrapper}>
        <h1>SHOPPING CART</h1>

        <TableContainer className={styles.orderContainer} component={Paper}>
          <Table aria-label="spanning table">
            <TableBody>
              {itemsList.map((item) => (
                <TableRow key={item.id}>
                  <TableCell align="left">
                    <img
                      src={item.image}
                      onClick={() => handleGoToDetails(item.id)}
                    />
                    {item.name}
                  </TableCell>
                  <TableCell align="center">
                    <button onClick={() => handleIncrement(item)}>+</button>
                    <span> {item.quantity} </span>
                    <button onClick={() => handleDecrement(item)}>-</button>
                    <div>
                      <button
                        onClick={() => handleDeletePokemonFromCart(item.id)}
                      >
                        DELETE
                      </button>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    {item.quantity * item.price} coins
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell align="center">Total</TableCell>
                <TableCell align="right">{totalPrice} coins</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <h3>CONFIRM THE ORDER</h3>
        <Button variant="contained" onClick={handleConfirmOrder}>
          CONFIRM
        </Button>
      </div>
    </div>
  );
};

export default CartPageLayout;
