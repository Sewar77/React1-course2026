import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage.jsx";
import ViewItems from "./components/Menu/MenuCards/ViewItems.jsx";
import { Toaster } from "react-hot-toast";
import Cart from "./pages/Cart/Cart.jsx";
import Register from "./components/Auth/Register.jsx";
function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/viewitems" element={<ViewItems />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
//components based arch
export default App;
