import { Typography } from "@mui/material";
import DisplayCart from "../../components/Menu/Cart/DisplayCart";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Layout/Footer.jsx";
function Cart() {
  return (
    <>
      <Navbar />
      <Typography variant="h1" sx={{ py: 5 }}>
        My Cart
      </Typography>
      <DisplayCart />
      <Footer />
    </>
  );
}

export default Cart;
