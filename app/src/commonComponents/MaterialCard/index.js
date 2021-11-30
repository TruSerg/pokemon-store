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
      <CardContent>
        <Typography
          className={classes.name}
          gutterBottom
          variant="h5"
          component="div"
        >
          {name}
        </Typography>
        <Typography
          className={classes.price}
          variant="body2"
          color="text.secondary"
        >
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

export default withStyles(styles)(MaterialCard);
