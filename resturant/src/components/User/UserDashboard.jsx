import { Box, Typography } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar.jsx";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext.jsx";
import Navbar from "../Navbar/Navbar.jsx";
function UserDashboard() {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
    // open=true => !open=false
    // open=false => !open=true
  };
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
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
          <Typography variant="h1">Hi, this is user dashboard!</Typography>
          <Typography variant="h2">Hi,{currentUser?.name}</Typography>
          <Typography variant="h2">Hi,{currentUser?.email}</Typography>
          {/* ? means it may be null */}
        </Box>
      </Box>
    </>
  );
}

export default UserDashboard;
