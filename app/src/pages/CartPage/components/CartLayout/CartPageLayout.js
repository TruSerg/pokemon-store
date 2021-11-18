import { Button, ButtonGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartPageLayout = (
  isLoading,
  itemsList,
  totalPrice,
  handleDeletePokemonFromCart,
  handleQuantityIncrement,
  handleQuantityDecrement,
  handleAddOrder
) => {
  return (
    <div>
      <h1>SHOPPING CART</h1>

      <div>
        <h2>TOTAL PRICE: {totalPrice}</h2>

        <div>
          <h3>CONFIRM THE ORDER</h3>
          <Button
            disabled={totalPrice === 0}
            onClick={() => handleAddOrder()}
            variant="contained"
            color="success"
          >
            CONFIRM
          </Button>
        </div>
        <div>
          {itemsList.map((item) => (
            <div key={item.id}>
              <div>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <div>
                  <ButtonGroup disableElevation variant="contained">
                    <Button onClick={() => handleQuantityIncrement(item)}>
                      +
                    </Button>
                    <div>{item.quantity}</div>
                    <Button onClick={() => handleQuantityDecrement(item)}>
                      -
                    </Button>
                  </ButtonGroup>
                </div>
                <div>Price: {item.price * item.quantity}</div>
                <div>
                  <Button
                    onClick={() => handleDeletePokemonFromCart(item)}
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPageLayout;
