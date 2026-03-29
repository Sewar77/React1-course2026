import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext.jsx";

//child for menu card
function ViewItem() {
  const location = useLocation();
  const { currentUser } = useContext(UserContext);
  const handleEdit = () => {};
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
          {currentUser?.role === "user" && (
            <Button size="small" onClick={handleOpen}>
              Add To Cart
            </Button>
          )}
          {currentUser?.role === "admin" && (
            <Button size="small" onClick={handleEdit}>
              Edit Menu
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
}
//props drilling
export default ViewItem;
