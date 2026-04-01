import { Box, Button, Card, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext.jsx";
//display user info
function Profile() {
  const { currentUser } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Card
          sx={{
            textAlign: "center",
            // width: "60%",
            height: "40%",
            margin: 3,
            padding: 4,
            alignContent: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              marginBottom: 4,
            }}
          >
            Name: {currentUser?.name}
          </Typography>
          <Typography variant="h4"> Email: {currentUser?.email}</Typography>
          <Typography sx={{ mt: 3 }} variant="h4">
            {" "}
            Role: {currentUser?.role}
          </Typography>
          <Box
            sx={{
              display: "block",
            }}
          >
            <Typography variant="h4" sx={{ mt: 4 }}>
              Password: {showPassword ? currentUser?.password : "************"}
            </Typography>
            <Button
              variant="contained"
              sx={{
                m: 3,
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default Profile;
