import { Button } from "@mui/material";
function AddMenuItemButton({ addItem, handleAddNewMenuItem }) {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          m: 3,
        }}
        onClick={() => handleAddNewMenuItem()}
      >
        {addItem ? "Cancel" : "Add New Menu Item"}
      </Button>
    </>
  );
}
export default AddMenuItemButton;
