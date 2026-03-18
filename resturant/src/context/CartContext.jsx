import { useState, createContext } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = ({ item, userQuantity }) => {
    setCart((prev) => {
      const existed = prev.find((cartItem) => cartItem.id === item.id);
      if (userQuantity > item.quantity) {
        userQuantity = item.quantity;
        toast.success("No Quanityt left");
      }
      if (existed) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, userQuantity: (userQuantity += 1) }
            : cartItem
        );
      } else {
        toast.success("Added To cart");
        return [...prev, { ...item, userQuantity: 1 }];
      }
    });
  };
  const removeFromCart = () => {}; //task
  console.log(cart);
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
