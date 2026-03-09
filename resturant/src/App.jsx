import "./App.css";
import Hero from "./components/Hero/Hero.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Test from "./components/Home/test.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/test" element={<Test />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}
//components based arch
export default App;
