import { useState } from "react";
import Footer from "../../../../components/Layout/Footer";
import Navbar from "../../../../components/Navbar/Navbar";
import Sidebar from "../../../../components/Sidebar/Sidebar.jsx";
import { Box } from "@mui/material";
import ManageUsers from "../../../../components/Admin/Manage/Users/ManageUsers.jsx";

function ManageUserPage() {
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
        <Box sx={{ flexGrow: 1 }}>
          <Navbar />
          <ManageUsers />
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default ManageUserPage;
