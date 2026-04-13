import { useState } from "react";
import Footer from "../../components/Layout/Footer.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import { Box } from "@mui/material";
import UsersFeedbacks from "../../components/UserFeedbacks/UserFeedbacks.jsx";
//display all profile page components
function Feedbacks() {
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
          <UsersFeedbacks />
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default Feedbacks;
