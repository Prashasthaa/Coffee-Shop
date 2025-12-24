import Espresso from "./images/espresso.jpg";
import Latte from "./images/latte.jpg";
import ColdBrew from "./images/cold-brew.jpg";

const products = [
  {
    id: 1,
    title: "Espresso Coffee",
    image: Espresso, // Make sure this image e
    price: 5.99,
    description: "A strong and bold espresso sl",
  },
  {
    id: 2,
    title: "Latte",
    image: Latte,
    price: 6.99,
    description: "A creamy cappuccino with a p",
  },
  {
    id: 3,
    title: "Cold Brew",
    image: ColdBrew,
    price: 7.49,
    description: "A smooth and creamy latte ma",
  },
];

export default products;
