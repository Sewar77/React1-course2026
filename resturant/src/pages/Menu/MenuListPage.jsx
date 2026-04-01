import { useState } from "react";
import Footer from "../../components/Layout/Footer";
import MenuList from "../../components/Menu/MenuCards/MenuList";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Box } from "@mui/material";

function MenuListPage() {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
    // open=true => !open=false
    // open=false => !open=true
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
          <MenuList />
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default MenuListPage;
