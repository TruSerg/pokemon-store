import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const MaterialCard = ({ name, handleGoToDetails, image, price }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="190" image={image} alt="pokemon" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          PRICE: {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleGoToDetails} size="small">
          GO TO DETAILS
        </Button>
      </CardActions>
      <CardActions>
        <Button size="small">ADD TO CART</Button>
      </CardActions>
    </Card>
  );
};

export default MaterialCard;
