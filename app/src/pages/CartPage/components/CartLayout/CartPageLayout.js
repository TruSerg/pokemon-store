import { Button, Alert } from "@mui/material";
import { Snackbar } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import List from "../../../../commonComponents/List";

import styles from "./styles.module.scss";

import * as React from "react";

const CartPageLayout = ({
  itemsList,
  totalPrice,
  handleGoToDetails,
  handleIncrement,
  handleDecrement,
  handleDeletePokemonFromCart,
  handleConfirmOrder,
  goToUserPage,
  open,
}) => {
  return (
    <div className={styles.orderArea}>
      <h1 className={styles.orderTitle}>SHOPPING CART</h1>
      <div className={styles.cardsArea}>
        <List
          items={itemsList}
          renderItems={(item) => (
            <div className={styles.cardsOrder} key={item.id}>
              <div>
                <img
                  className={styles.cardImage}
                  src={item.image}
                  onClick={() => handleGoToDetails(item.id)}
                />
                <p className={styles.pokeName}>{item.name}</p>
              </div>
              <div className={styles.buttons}>
                <button
                  className={styles.cardBtn}
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
                <span className={styles.cardDisplay}> {item.quantity} </span>
                <button
                  className={styles.cardBtn}
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <div>
                  <Button
                    variant="outlined"
                    size="small"
                    className={styles.cardButton}
                    onClick={() => handleDeletePokemonFromCart(item.id)}
                  >
                    DELETE
                  </Button>
                </div>
              </div>
              <div>{item.quantity * item.price} coins</div>
            </div>
          )}
        />
      </div>
      <div className={styles.confirmArea}>
        <h3>CONFIRM THE ORDER</h3>
        <div>
          <span className={styles.confirmItem}>TOTAL PRICE:</span>
          <span className={styles.confirmItem}>{totalPrice} coins</span>
          <Button
            disabled={totalPrice === 0}
            onClick={handleConfirmOrder}
            variant="contained"
            color="success"
          >
            CONFIRM
          </Button>
        </div>
      </div>
      <div className={styles.snackBar}>
        <Snackbar open={open} autoHideDuration={3000} onClose={goToUserPage}>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Your order has been successfully placed
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default CartPageLayout;
