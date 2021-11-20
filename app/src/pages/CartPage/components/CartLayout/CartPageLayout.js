import { Button, ButtonGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartPageLayout = (
  isLoading,
  totalPrice,
  itemsList,
  quantity,
  handleAddPokemonToCart,
  handleDeletePokemonFromCart,
  handleIncrement,
  handleDecrement,
  handleGoToDetails,
  handleGoToUserPage
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
            onClick={handleGoToUserPage}
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
                <img
                  onClick={() => handleGoToDetails(item.id)}
                  src={item.image}
                  alt={item.name}
                />
                <h3>{item.name}</h3>
                <div>
                  <ButtonGroup disableElevation variant="contained">
                    <Button onClick={() => handleIncrement(item)}>+</Button>
                    <div>{item.quantity}</div>
                    <Button onClick={() => handleDecrement(item)}>-</Button>
                  </ButtonGroup>
                </div>
                <div>Price: {item.price * item.quantity}</div>
                <div>
                  <Button
                    onClick={() => handleDeletePokemonFromCart(item.id)}
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                  >
                    DELETE
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
