import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
//child component for menu list,
//parent for viewitems
function MenuCard({ name, description, image, price, quantity }) {
  const navigate = useNavigate();
  return (
    <>
      <Card sx={{ maxWidth: 345, textAlign: "center", alignItems: "center" }}>
        <CardMedia component="img" image={image} height="200" width="200" />
        <CardContent>
          <Typography variant="h4">{name}</Typography>
          <Typography variant="h5">{description}</Typography>
          <Typography variant="body1">
            Price: {price}
            <br />
            Quantity : {quantity}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() =>
              navigate("/viewitems", {
                state: {
                  name,
                  description,
                  image,
                  price,
                  quantity,
                },
              })
            }
          >
            View
          </Button>
          <Button>Add to cart</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default MenuCard;
