import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import styles from "./styles.module.scss";

const MaterialCard = ({
  image,
  name,
  price,
  handleGoToDetails,
  handleAddPokemonToCart,
  isAddPokemonToCart,
  handleGoToCartPage,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="190" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {price} coins
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={styles.btn}
          variant="outlined"
          color="success"
          onClick={handleGoToDetails}
          size="small"
        >
          GO TO DETAILS
        </Button>
      </CardActions>
      <CardActions>
        {!isAddPokemonToCart ? (
          <Button
            className={styles.btn}
            variant="outlined"
            color="success"
            onClick={handleAddPokemonToCart}
            size="small"
          >
            ADD TO CART
          </Button>
        ) : (
          <Button
            className={styles.btn}
            onClick={handleGoToCartPage}
            variant="outlined"
            color="success"
            size="small"
          >
            IN THE CART
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default MaterialCard;
