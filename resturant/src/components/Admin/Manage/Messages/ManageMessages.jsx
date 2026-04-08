import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { MessageContext } from "../../../../context/MessagesContext.jsx";

function ManageMessages() {
  const { messages, deleteMessage, approveMessage } =
    useContext(MessageContext);
  console.log(messages);
  const handleReject = (msgId) => {
    deleteMessage(msgId);
  };
  const handleApprove = (msgId) => {
    approveMessage(msgId);
  };
  return (
    <>
      <Typography variant="h2" sx={{ mt: 4 }}>
        manage messages
      </Typography>
      <Container
        sx={{
          my: 6,
        }}
      >
        <Grid container spacing={4}>
          {messages.map((message, idx) => {
            return (
              <Grid key={message.id} size={4}>
                <Card
                  sx={{
                    p: 3,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      borderBottom: "1px solid black",
                    }}
                  >
                    Message #: {idx + 1}
                  </Typography>
                  <Typography
                    sx={{
                      color: "green",
                    }}
                  >
                    {message.state}
                  </Typography>
                  <CardContent>
                    <Typography variant="h5" sx={{ my: 4 }}>
                      {message.name}
                    </Typography>
                    <Typography variant="h6">
                      {message.email || "No Email"}
                    </Typography>
                    <Typography variant="body1" sx={{ my: 4 }}>
                      {message.message}
                    </Typography>
                    <CardActions
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 4,
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleReject(message.id)}
                      >
                        Reject
                      </Button>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => handleApprove(message.id)}
                      >
                        Approve
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
export default ManageMessages;
