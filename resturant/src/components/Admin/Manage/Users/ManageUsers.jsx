import {
  Box,
  Button,
  Container,
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
function ManageUsers() {
  const { users, deleteUser } = useContext(UserContext);
  console.log(users);
  const [updateId, setUpdateId] = useState(null);
  console.log("updateId", updateId);
  // condition ? "do this if teh condition tru" : "do this if the condition false"
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    email: "",
    role: "",
  });
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
        <Container>
          {/* display all users */}

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
                          value={user?.name || updatedUser.name}
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
                        <TextField label="Email" value={user?.email} />
                      </TableCell>
                    )}
                    {updateId !== user.id ? (
                      <TableCell>{user?.role}</TableCell>
                    ) : (
                      <TableCell>
                        <TextField label="Role" value={user?.role} />
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
                          <Button variant="contained" color="success">
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