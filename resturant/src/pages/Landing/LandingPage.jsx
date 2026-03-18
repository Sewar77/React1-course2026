import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import About from "../../components/About/About.jsx";
import MenuList from "../../components/Menu/MenuCards/MenuList.jsx";
import Footer from "../../components/Layout/Footer.jsx";
function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MenuList />
      <Footer />
    </>
  );
}

export default LandingPage;
