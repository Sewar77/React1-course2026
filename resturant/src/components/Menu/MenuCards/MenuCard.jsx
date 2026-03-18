import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
  Modal,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext.jsx";

function MenuCard({ id, name, description, image, price, quantity }) {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [userQuantity, setUserQuantity] = useState(0);
  const item = {
    id,
    name,
    description,
    image,
    price,
    quantity,
  };
  const { cart, addToCart } = useContext(CartContext);

  const addQuantity = () => {
    setUserQuantity((q) => q + 1);
    addToCart({ item, userQuantity });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ maxWidth: 345, textAlign: "center", alignItems: "center" }}>
        <CardMedia component="img" image={image} height="200" />

        <CardContent>
          <Typography variant="h4">{name}</Typography>
          <Typography variant="h6">{description}</Typography>

          <Typography variant="body1">Price: {price}$</Typography>
        </CardContent>

        <CardActions>
          <Button
            onClick={() =>
              navigate("/viewitems", {
                state: { name, description, image, price, quantity },
              })
            }
          >
            View
          </Button>

          <Button size="small" onClick={handleOpen}>
            Add To Cart
          </Button>
        </CardActions>
      </Card>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: 400,
            margin: "200px auto",
            padding: "40px",
            bgcolor: "white",
            border: "2px solid #000",
            boxShadow: 24,
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <Typography variant="h6">{name} added to cart!</Typography>

          <Typography variant="body1">Price: {price}$</Typography>

          <Typography variant="body1">Description: {description}</Typography>

          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}
          >
            <Button variant="contained">-</Button>

            <Typography variant="h6">{userQuantity}</Typography>

            <Button
              variant="contained"
              onClick={() => {
                addQuantity();
              }}
            >
              +
            </Button>
          </Box>

          <Button sx={{ mt: 3 }} variant="contained" onClick={handleClose}>
            Done
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default MenuCard;
