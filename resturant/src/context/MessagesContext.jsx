import { useState, createContext, useEffect } from "react";
import toast from "react-hot-toast";

export const MessageContext = createContext(null);

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]); //all messages
  const createMessage = (messageData) => {
    //validation
    if (!messageData.name || !messageData.message) {
      toast.error("name and message are required");
      return;
    }
    //when get from localstorage (getitem) ==> parse
    //when set in localstorage (setitem) ==> stringify
    const allMessages = JSON.parse(localStorage.getItem("messages")) || [];
    const newMessage = {
      name: messageData.name,
      email: messageData.email,
      message: messageData.message,
      state: "pending",
      id: Date.now(),
    };
    const newAllMessages = [...allMessages, newMessage];
    setMessages(newAllMessages);
    localStorage.setItem("messages", JSON.stringify(newAllMessages));
    toast.success("Your message was submit, wait managers to read and respond");
  };

  const getAllMessages = () => {
    const messages = JSON.parse(localStorage.getItem("messages"));
    setMessages(messages);
  };
  const deleteMessage = (msgId) => {
    const filteredMessages = messages.filter((message) => message.id !== msgId);
    setMessages(filteredMessages);
    localStorage.setItem("messages", JSON.stringify(filteredMessages));
    toast.success("Rejected successfully");
  };
  const approveMessage = (msgId) => {
    const approvedMessage = messages.map((message) => {
      return message.id === msgId ? { ...message, state: "Approved" } : message;
    });
    setMessages(approvedMessage);
    localStorage.setItem("messages", JSON.stringify(approvedMessage));
    toast.success("Approved Successfully");
  };

  useEffect(() => {
    getAllMessages();
  }, []);
  return (
    <MessageContext.Provider
      value={{ createMessage, messages, deleteMessage, approveMessage }}
    >
      {children}
    </MessageContext.Provider>
  );
};
