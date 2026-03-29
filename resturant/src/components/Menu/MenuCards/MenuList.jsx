import { Container, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import MenuCard from "./MenuCard";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

//parent for menucard
function MenuList() {
  const { currentUser } = useContext(UserContext);
  const pizzaMenu = [
    {
      id: 1, //unique value
      name: "Margherita",
      description: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
      image: "./src/assets/pizza1.jpg",
      price: 10.99,
      quantity: 10, //quantity for the resturant itself.
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "Spicy pepperoni slices on a tomato sauce base.",
      image: "./src/assets/pizza2.jpg",
      price: 10.99,
      quantity: 10,
    },
    {
      id: 3,
      name: "Hawaiian",
      description: "Ham and pineapple topping for a sweet and savory flavor.",
      image: "./src/assets/pizza3.jpg",
      price: 10.99,
      quantity: 10,
    },
    {
      id: 4,
      name: "Vegetarian",
      description:
        "Assorted vegetables including mushrooms, onions, peppers, and olives.",
      image: "./src/assets/pizza1.jpg",
      price: 10.99,
      quantity: 10,
    },
    {
      id: 5,
      name: "Meat Lovers",
      description:
        "Pepperoni, sausage, ham, and bacon for a hearty meaty experience.",
      image: "./src/assets/pizza2.jpg",
      price: 10.99,
      quantity: 10,
    },
  ];
  let storedMenu = JSON.parse(localStorage.getItem("menu"));
  if (!storedMenu || storedMenu.length === 0) {
    localStorage.setItem("menu", JSON.stringify(pizzaMenu));
    storedMenu = pizzaMenu;
  }
  //fake data

  return (
    <>
      <Container sx={{ py: 6 }}>
        {currentUser?.role === "user" && (
          <Typography variant="h1">Pizza Menu</Typography>
        )}
        <Grid container spacing={6} alignItems="center" textAlign="center">
          {storedMenu.map((pizza) => {
            return (
              <Grid key={pizza.id}>
                <MenuCard
                  id={pizza.id}
                  name={pizza.name}
                  description={pizza.description}
                  price={pizza.price}
                  image={pizza.image}
                  quantity={pizza.quantity}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default MenuList;
