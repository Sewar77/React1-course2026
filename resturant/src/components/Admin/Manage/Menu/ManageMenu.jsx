import { Box, Button, Container, Typography } from "@mui/material";
import Sidebar from "../../../Sidebar/Sidebar.jsx";
import { useState } from "react";
import MenuList from "../../../Menu/MenuCards/MenuList.jsx";
import AddMenuItemButton from "./AddMenuItemButton.jsx";
import NewMenuItemForm from "./NewMenuItemForm.jsx";
function ManageMenu() {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  const [addItem, setAddItem] = useState(false);
  const handleAddNewMenuItem = () => {
    setAddItem(!addItem);
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
          <Typography variant="h3">Manage Menu</Typography>
          <Container>
            <AddMenuItemButton
              addItem={addItem}
              handleAddNewMenuItem={handleAddNewMenuItem}
            />
            {addItem && <NewMenuItemForm />}
            <MenuList />
          </Container>
        </Box>
      </Box>
    </>
  );
}
export default ManageMenu;
