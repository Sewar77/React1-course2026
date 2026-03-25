import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { UserContext } from "../../context/UserContext.jsx";
import { useContext } from "react";
function Register() {
  const { register } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    console.log(formData);
    register(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <Container>
        <Typography variant="h2">Register</Typography>
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
            label="Name:"
            value={formData.name}
            // component controlled
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
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
            Register
          </Button>
        </Box>
      </Container>
    </>
  );
}
export default Register;
//EVENTs=click, change, submit => onclick=button, onchange=inputs, onsubmit=submit form, onhover=move mouse on something
//change => write / delete
