import { useContext } from "react";
import { MessageContext } from "../../context/MessagesContext.jsx";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

function UsersFeedbacks() {
  const { messages } = useContext(MessageContext);
  const approvedMessages = messages.filter(
    (message) => message.state === "Approved"
  );
  console.log(approvedMessages);

  return (
    <>
      <Paper
        elevation={4}
        sx={{
          m: 3,
          p: 3,
        }}
      >
        <Typography variant="h2">Feedbacks</Typography>
        <Grid
          container
          spacing={4}
          sx={{
            m: 3,
            p: 3,
          }}
        >
          {approvedMessages.map((message) => {
            return (
              <Grid size={4} key={message.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{message.name}</Typography>
                    <Typography variant="h3">{message.message}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </>
  );
}

export default UsersFeedbacks;
