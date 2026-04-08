import { Container, Typography } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import ContactForm from "../../components/ContactUs/ContactForm.jsx";
import Footer from "../../components/Layout/Footer.jsx";
function ContactUs() {
  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h2">Conatct Us</Typography>
        <ContactForm />
      </Container>
      <Footer />
    </>
  );
}
export default ContactUs;
