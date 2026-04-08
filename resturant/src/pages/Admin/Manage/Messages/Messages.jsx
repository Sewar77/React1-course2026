import { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Layout/Footer";
import ManageMessages from "../../../../components/Admin/Manage/Messages/ManageMessages";
import Sidebar from "../../../../components/Sidebar/Sidebar";
function Messages() {
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
          <ManageMessages />
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default Messages;
