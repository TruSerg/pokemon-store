import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { withStyles } from "@mui/styles";

import styles from "./styles";

const MaterialCard = ({
  image,
  name,
  price,
  handleGoToDetails,
  handleAddPokemonToCart,
  isAddPokemonToCart,
  handleGoToCartPage,
  classes,
}) => {
  return (
    <Card className={classes.wrapper}>
      <CardMedia
        className={classes.image}
        component="img"
        image={image}
        alt={name}
      />
      <CardContent className={classes.cardContent}>
        <Typography
          className={classes.name}
          gutterBottom
          variant="h5"
          component="div"
        >
          {name}
        </Typography>
        <Typography className={classes.price} variant="body2">
          Price: {price} coins
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={classes.btn}
          variant="outlined"
          color="secondary"
          onClick={handleGoToDetails}
          size="small"
        >
          GO TO DETAILS
        </Button>
      </CardActions>
      <CardActions>
        {!isAddPokemonToCart ? (
          <Button
            className={classes.btn}
            variant="outlined"
            color="secondary"
            onClick={handleAddPokemonToCart}
            size="small"
          >
            ADD TO CART
          </Button>
        ) : (
          <Button
            className={classes.btn}
            onClick={handleGoToCartPage}
            variant="outlined"
            color="secondary"
            size="small"
          >
            IN THE CART
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(MaterialCard);
