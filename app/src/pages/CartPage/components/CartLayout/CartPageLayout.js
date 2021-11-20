import List from "../../../../commonComponents/List";

import MaterialCardOrder from "../../../../commonComponents/MaterialCardOrder";
import { CircularProgress } from "@mui/material";

import styles from "./styles.module.scss";

const CartPageLayout = ({
  isLoading,
  totalPrice,
  itemsList,
  quantity,
  handleDeletePokemonFromCart,
  handleIncrement,
  handleDecrement,
  handleGoToDetails,
  handleGoToUserPage,
  handleAddOrder,
}) => {
  return (
    <div>
      <h1>SHOPPING CART</h1>
      <h2>TOTAL PRICE: {totalPrice}</h2>
      <h3>CONFIRM THE ORDER</h3>
      <div className={styles.wrapper}>
        {isLoading ? (
          <div className={styles.progressArea}>
            <CircularProgress />
          </div>
        ) : (
          <List
            items={itemsList}
            renderItems={(pokemon) => (
              <div className={styles.wrapperOrder}>
                <MaterialCardOrder
                  key={pokemon.id}
                  image={pokemon.image}
                  name={pokemon.name}
                  quantity={pokemon.quantity}
                  totalPrice={pokemon.price * pokemon.quantity}
                  handleIncrement={() => handleIncrement(pokemon)}
                  handleGoToDetails={() => handleGoToDetails(pokemon.id)}
                  handleDecrement={() => handleDecrement(pokemon)}
                  handleDeletePokemonFromCart={() =>
                    handleDeletePokemonFromCart(pokemon.id)
                  }
                />
              </div>
            )}
          />
        )}
      </div>
    </div>
  );
};

export default CartPageLayout;
