import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { MessageProvider } from "./context/MessagesContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <MessageProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </MessageProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
