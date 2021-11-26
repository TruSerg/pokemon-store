import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import styles from "./styles.module.scss";

const MaterialCardDetail = ({
  image,
  name,
  price,
  handleAddPokemonToCart,
  isAddPokemonToCart,
  handleGoToCartPage,
}) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia component="img" height="300" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {price} coins
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {!isAddPokemonToCart ? (
          <Button
            className={styles.btn}
            onClick={handleAddPokemonToCart}
            variant="outlined"
            size="small"
            color="success"
          >
            ADD TO CART
          </Button>
        ) : (
          <Button
            className={styles.btn}
            onClick={handleGoToCartPage}
            variant="outlined"
            size="small"
            color="success"
          >
            IN THE CART
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default MaterialCardDetail;
