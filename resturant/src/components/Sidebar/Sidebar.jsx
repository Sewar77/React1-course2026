import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
function Sidebar({ open, toggleSidebar }) {
  const { currentUser, logout } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "Silver",
          colorL: "white",
          minHeight: "100vh",
          p: 2,
          width: open ? "280px" : "60px",
          transition: "width 0.3s ease",
          borderRadius: 3,
          alignItems: open ? "left" : "center",
        }}
      >
        <IconButton
          onClick={toggleSidebar}
          sx={{
            color: "DarkSlateGray",
            bgcolor: "white",
            mb: 3,
            p: 2,
            width: "20px",
            alignItems: "center",
          }}
        >
          <MenuItem />
        </IconButton>
        {open ? (
          <Typography>Hello,{currentUser?.name} </Typography>
        ) : (
          <Typography>Hi</Typography>
        )}
        <Divider sx={{ bgcolor: "white", mb: 2 }} />
        <List>
          <ListItem button component="div">
            <ListItemText
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/admin/dashboard")}
              primary={open ? "Dashboard" : "D"}
            />
          </ListItem>
          {currentUser?.role === "admin" && (
            <>
              <ListItem button>
                <ListItemText
                  sx={{ cursor: "pointer" }}
                  primary={open ? "Users" : "U"}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  sx={{ cursor: "pointer" }}
                  primary={open ? "Menu" : "M"}
                  onClick={() => navigate("/manage/menu")}
                />
              </ListItem>
            </>
          )}
          {currentUser?.role === "user" && (
            <>
              <ListItem button>
                <ListItemText
                  sx={{ cursor: "pointer" }}
                  primary={open ? "Cart" : "C"}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  sx={{ cursor: "pointer" }}
                  primary={open ? "View Menu" : "M"}
                />
              </ListItem>
            </>
          )}
          <ListItem button>
            <ListItemText
              sx={{ cursor: "pointer" }}
              primary={open ? "Profile" : "P"}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              sx={{ cursor: "pointer" }}
              onClick={() => logout()}
              primary={open ? "Lougout" : "L"}
            />
          </ListItem>
        </List>
      </Box>
    </>
  );
}

export default Sidebar;
