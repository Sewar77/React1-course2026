import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
} from "@mui/material";
import { CartContext } from "../../../context/CartContext.jsx";
import { useContext } from "react";
function DisplayCart() {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <>
     
      <Container sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
        {cart.map((item) => {
          return (
            <Card
              key={item.id}
              sx={{ maxWidth: 345, textAlign: "center", alignItems: "center" }}
            >
              <CardMedia component="img" image={item.image} height="200" />

              <CardContent>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h6">{item.description}</Typography>

                <Typography variant="body1">Price: {item.price}$</Typography>
                <Typography variant="body1">
                  Quantity: {item.userQuantity}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Container>
    </>
  );
}

export default DisplayCart;
