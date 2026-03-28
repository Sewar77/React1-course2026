import { Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext.jsx";
function UserDashboard() {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <>
      <Typography variant="h1">Hi, this is user dashboard!</Typography>
      <Typography variant="h2">Hi,{currentUser?.name}</Typography>
      <Typography variant="h2">Hi,{currentUser?.email}</Typography>
      {/* ? means it may be null */}
    </>
  );
}

export default UserDashboard;
