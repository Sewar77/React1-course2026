import { useState, createContext } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existed = prev.find((cartItem) => cartItem.id === item.id);

      if (existed) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        toast.success("Added To cart");
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };
  const removeFromCart = () => {};

  const fetchCartItem = () => {};
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
