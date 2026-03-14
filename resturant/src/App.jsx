import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage.jsx";
import ViewItems from "./components/Menu/MenuCards/ViewItems.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/viewitems" element={<ViewItems />} />
      </Routes>
    </>
  );
}
//components based arch
export default App;
