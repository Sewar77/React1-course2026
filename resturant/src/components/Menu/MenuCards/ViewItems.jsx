import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
//child for menu card
function ViewItem() {
  const location = useLocation();

  return (
    <>
      <Card sx={{ maxWidth: 345, textAlign: "center", alignItems: "center" }}>
        <CardMedia
          component="img"
          image={location.state.image}
          height="200"
          width="200"
        />
        <CardContent>
          <Typography variant="h4">{location.state.name}</Typography>
          <Typography variant="h5">{location.state.description}</Typography>
          <Typography variant="body1">
            Price: {location.state.price}
            <br />
            Quantity : {location.state.quantity}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Add to cart</Button>
        </CardActions>
      </Card>
    </>
  );
}
//props drilling
export default ViewItem;
