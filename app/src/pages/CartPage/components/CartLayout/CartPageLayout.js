import PropTypes from "prop-types";

import { Button, Alert } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Snackbar } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import List from "../../../../commonComponents/List";

import styles from "./styles.module.scss";

const CartPageLayout = ({
  isLoading,
  itemsList,
  totalPrice,
  handleGoToDetails,
  handlePokemonQuantityIncrement,
  handlePokemonQuantityDecrement,
  handleDeletePokemonFromCart,
  handleConfirmOrder,
  goToUserPage,
  isOpen,
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
                  onClick={() => handlePokemonQuantityIncrement(item)}
                >
                  +
                </button>
                <span className={styles.cardDisplay}> {item.quantity} </span>
                <button
                  className={styles.cardBtn}
                  onClick={() => handlePokemonQuantityDecrement(item)}
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
        <Snackbar open={isOpen} autoHideDuration={3000} onClose={goToUserPage}>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Your order has been successfully placed
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

CartPageLayout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
  totalPrice: PropTypes.number.isRequired,
  handleGoToDetails: PropTypes.func.isRequired,
  handlePokemonQuantityIncrement: PropTypes.func.isRequired,
  handlePokemonQuantityDecrement: PropTypes.func.isRequired,
  handleDeletePokemonFromCart: PropTypes.func.isRequired,
  handleConfirmOrder: PropTypes.func.isRequired,
  goToUserPage: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default CartPageLayout;
