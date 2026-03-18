import { Typography } from "@mui/material";
import DisplayCart from "../../components/Menu/Cart/DisplayCart";
import Navbar from "../../components/Navbar/Navbar";

function Cart() {
  return (
    <>
      <Navbar />
      <Typography variant="h1" sx={{ py: 5 }}>
        My Cart
      </Typography>
      <DisplayCart />
    </>
  );
}

export default Cart;
