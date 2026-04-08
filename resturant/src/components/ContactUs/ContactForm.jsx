import { Box, Button, Container, Paper, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { MessageContext } from "../../context/MessagesContext.jsx";

function ContactForm() {
  const { createMessage } = useContext(MessageContext);
  const [message, setMessage] = useState({
    //per message
    id: "",
    name: "",
    email: "",
    message: "",
    state: "pending",
  });
  const handleSubmitMessage = () => {
    createMessage(message);
    setMessage({
      name: "",
      email: "",
      message: "",
      state: "pending",
    });
  };
  return (
    <>
      <Container>
        <Paper elevation={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              justifyContent: "center",
              p: 3,
              m: 4,
            }}
          >
            <TextField
              label="Name"
              required
              value={message.name}
              onChange={(e) => setMessage({ ...message, name: e.target.value })}
            />
            <TextField
              label="Email"
              type="email"
              value={message.email}
              onChange={(e) =>
                setMessage({ ...message, email: e.target.value })
              }
            />
            <TextField
              label="Message"
              required
              value={message.message}
              onChange={(e) =>
                setMessage({ ...message, message: e.target.value })
              }
            />
            <Button
              variant="contained"
              color="success"
              onClick={handleSubmitMessage}
            >
              Send
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
export default ContactForm;
