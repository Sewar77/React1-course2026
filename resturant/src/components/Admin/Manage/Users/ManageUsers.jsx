import {
  Box,
  Button,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext.jsx";
function ManageUsers() {
  const { users } = useContext(UserContext);
  console.log(users);

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
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableHead>
            {users.map((user, idx) => {
              return (
                <TableBody key={user?.id}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{user?.name}</TableCell>
                  <TableCell>{user?.email}</TableCell>
                  <TableCell>{user?.role}</TableCell>
                  <TableCell>
                    <Stack
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 2,
                      }}
                    >
                      <Button variant="contained" color="info">
                        Edit
                      </Button>
                      <Button variant="contained" color="error">
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableBody>
              );
            })}
          </Table>
        </Container>
      </Box>
    </>
  );
}
export default ManageUsers;
// profile, hide/show password, manage user=> display users in table, display menu in user dashboard.
