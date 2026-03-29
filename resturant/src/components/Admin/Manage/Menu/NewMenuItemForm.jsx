import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function NewMenuItemForm() {
  const [menuItes, setMenuItems] = useState([]);
  useEffect(() => {
    const menuItems = JSON.parse(localStorage.getItem("menu")) || [];
    setMenuItems(menuItems);
  }, []);
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    image: "",
    price: 1,
    quantity: 1,
  });
  const handleAddMenuItem = () => {
    const updatedMenu = [...menuItes, { ...newItem, id: menuItes.length + 1 }];
    setMenuItems(updatedMenu);
    localStorage.setItem("menu", JSON.stringify(updatedMenu));
    toast.success("added succesfully");
    setNewItem({
      id: 0,
      name: "",
      description: "",
      image: "",
      price: 1,
      quantity: 1,
    });
    return;
  };
  return (
    <>
      <Box>
        <TextField
          label="Name "
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <TextField
          label="Description "
          value={newItem.description}
          onChange={(e) =>
            setNewItem({ ...newItem, description: e.target.value })
          }
        />
        <TextField
          label="Image "
          value={newItem.image}
          onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
        />
        <TextField
          label="Price"
          type="number"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <TextField
          label="Quantity "
          type="number"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
        />
        <Button variant="contained" sx={{ m: 3 }} onClick={handleAddMenuItem}>
          Add New Item
        </Button>
      </Box>
    </>
  );
}
export default NewMenuItemForm;
