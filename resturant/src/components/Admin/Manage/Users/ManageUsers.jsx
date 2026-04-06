import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../../../context/UserContext.jsx";
import toast from "react-hot-toast";
function ManageUsers() {
  const { users, deleteUser, updateUser, addNewUser } = useContext(UserContext);
  const [openForm, setOpenForm] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });
  const handleAddUser = () => {
    addNewUser(newUser);
    setOpenForm(false);
  };
  const [updateId, setUpdateId] = useState(null);
  // condition ? "do this if teh condition tru" : "do this if the condition false"
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    email: "",
    role: "",
  });
  const handleSave = () => {
    if (!updatedUser.name || !updatedUser.email || !updatedUser.role) {
      toast.error("all fileds are required");
      return;
    }
    updateUser(updateId, updatedUser);
    setUpdateId(null);
  };
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            m: 4,
          }}
        >
          Manage Users
        </Typography>
        <Button
          variant="contained"
          color="warning"
          onClick={() => setOpenForm(!openForm)}
        >
          {openForm ? "Cancel" : "Add New User"}
        </Button>
        <Container>
          {/* display all users */}
          {openForm && (
            <>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  m: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <TextField
                  label="Name"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                />
                <TextField
                  label="Email"
                  type="email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />
                <TextField
                  label="Role"
                  value={newUser.role}
                  onChange={(e) =>
                    setNewUser({ ...newUser, role: e.target.value })
                  }
                />
                <TextField
                  label="Password"
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                />
                <Button
                  variant="contained"
                  color="info"
                  onClick={handleAddUser}
                >
                  Add
                </Button>
              </Paper>
            </>
          )}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, idx) => {
                return (
                  <TableRow key={user?.id}>
                    <TableCell>{idx + 1}</TableCell>
                    {updateId !== user.id ? (
                      <TableCell>{user?.name}</TableCell>
                    ) : (
                      <TableCell>
                        <TextField
                          label="Name"
                          value={updatedUser.name}
                          onChange={(e) =>
                            setUpdatedUser({
                              ...updatedUser,
                              name: e.target.value,
                            })
                          }
                        />
                      </TableCell>
                    )}
                    {updateId !== user.id ? (
                      <TableCell>{user?.email}</TableCell>
                    ) : (
                      <TableCell>
                        <TextField
                          label="Email"
                          value={updatedUser.email}
                          onChange={(e) =>
                            setUpdatedUser({
                              ...updatedUser,
                              email: e.target.value,
                            })
                          }
                        />
                      </TableCell>
                    )}
                    {updateId !== user.id ? (
                      <TableCell>{user?.role}</TableCell>
                    ) : (
                      <TableCell>
                        <TextField
                          label="Role"
                          value={updatedUser.role}
                          onChange={(e) =>
                            setUpdatedUser({
                              ...updatedUser,
                              role: e.target.value,
                            })
                          }
                        />
                      </TableCell>
                    )}
                    {updateId !== user.id ? (
                      <TableCell>
                        <Stack
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: 2,
                          }}
                        >
                          <Button
                            onClick={() => setUpdateId(user?.id)}
                            variant="contained"
                            color="info"
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={() => deleteUser(user.id)}
                            variant="contained"
                            color="error"
                          >
                            Delete
                          </Button>
                        </Stack>
                      </TableCell>
                    ) : (
                      <TableCell>
                        <Stack
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: 2,
                          }}
                        >
                          <Button
                            variant="contained"
                            color="warning"
                            onClick={() => setUpdateId(null)}
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="contained"
                            color="success"
                            onClick={handleSave}
                          >
                            Save
                          </Button>
                        </Stack>
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Container>
      </Box>
    </>
  );
}
export default ManageUsers;
// profile, hide/show password, manage user=> display users in table, display menu in user dashboard.
//4-4 => delete user in admin dashboard - convert tablecell into textfield for the user who wanted to update
