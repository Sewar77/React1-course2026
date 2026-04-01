import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage.jsx";
import ViewItems from "./components/Menu/MenuCards/ViewItems.jsx";
import { Toaster } from "react-hot-toast";
import Cart from "./pages/Cart/Cart.jsx";
import Register from "./components/Auth/Register.jsx";
import Login from "./components/Auth/Login.jsx";
import UserDashboardPage from "./pages/User/UserDahshboardPage.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import ManageMenu from "./components/Admin/Manage/Menu/ManageMenu.jsx";
import MenuListPage from "./pages/Menu/MenuListPage.jsx";
import ManageUserPage from "./pages/Admin/Manage/Users/ManageUserPage.jsx";
import ProfilePage from "./pages/Profile/ProfilePage.jsx";
//display all pages
function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        {/* define paths */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/viewitems" element={<ViewItems />} />
        <Route path="/view-menu" element={<MenuListPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-dashboard" element={<UserDashboardPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/manage/menu" element={<ManageMenu />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/manage/users" element={<ManageUserPage />} />
      </Routes>
    </>
  );
}
//components based arch
export default App;
