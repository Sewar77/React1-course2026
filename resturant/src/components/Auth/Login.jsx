import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { UserContext } from "../../context/UserContext.jsx";
import { useContext } from "react";
function Login() {
  const { login } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    login(formData);
  };

  return (
    <>
      <Container>
        <Typography variant="h2">Login</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
            m: 2,
            gap: 2,
          }}
        >
          <TextField
            label="Email:"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <TextField
            label="Password:"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <Button onClick={handleSubmit} variant="contained" type="submit">
            Login
          </Button>
        </Box>
      </Container>
    </>
  );
}
export default Login;
