import { useState } from "react";
import Footer from "../../components/Layout/Footer.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import { Box } from "@mui/material";
import Profile from "../../components/Profile/Profile.jsx";
function ProfilePage() {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          minHeight: "100vh",
          justifyContent: "center",
        }}
      >
        <Sidebar open={open} toggleSidebar={toggleSidebar} />
        <Box sx={{ flexGrow: 1, textAlign: "center", alignItems: "center" }}>
          <Navbar />
          <Profile />
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default ProfilePage;
