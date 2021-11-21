import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const MaterialCardDetail = ({ image, name, price, handleAddPokemonToCart }) => {
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
        <Button onClick={handleAddPokemonToCart} size="small" color="primary">
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default MaterialCardDetail;
