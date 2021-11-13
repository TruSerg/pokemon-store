import UserImage from "../../static/images/user.png";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const MaterialCard = ({ name, handleGoToDetails }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image={UserImage}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div"></Typography>
      <Typography variant="body2" color="text.secondary">
        {name}
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={handleGoToDetails} size="small">
        GO TO DETAILS
      </Button>
    </CardActions>
  </Card>
);

export default MaterialCard;
