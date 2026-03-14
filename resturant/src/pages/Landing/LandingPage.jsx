import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import About from "../../components/About/About.jsx";
import MenuList from "../../components/Menu/MenuCards/MenuList.jsx";
function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MenuList />
    </>
  );
}

export default LandingPage;
