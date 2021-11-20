import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonGroup,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const MaterialCardOrder = ({
  image,
  name,
  quantity,
  handleIncrement,
  handleDecrement,
  handleDeletePokemonFromCart,
  totalPrice,
  handleAddOrder,
}) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia component="img" height="140" image={image} alt="green iguana" />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <ButtonGroup disableElevation variant="contained">
        <Button onClick={handleIncrement}>+</Button>
        <Typography variant="body2" color="text.secondary">
          {quantity}
        </Typography>
        <Button onClick={handleDecrement}>-</Button>
      </ButtonGroup>
      <Typography variant="body2" color="text.secondary">
        Price: {totalPrice}
      </Typography>
    </CardContent>
    <ButtonGroup disableElevation variant="contained">
      <Button
        disabled={totalPrice === 0}
        onClick={handleAddOrder}
        variant="contained"
        color="success"
      >
        CONFIRM
      </Button>
      <Button
        onClick={handleDeletePokemonFromCart}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        DELETE
      </Button>
    </ButtonGroup>
  </Card>
);

export default MaterialCardOrder;
