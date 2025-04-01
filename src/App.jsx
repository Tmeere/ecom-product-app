import React, { useState } from "react";
import ProductItem from "./ProductItem";
import ProductList from "./ProductList";
import "./styles.css";

// Sample product data this can be as big or are small as needed REMINDER ADD ID
const products = [
  {
    id: 1,
    productName: "Espresso",
    productImage: "Images/espresso.jpg",
    productDescription:
      "A small, strong coffee brewed by forcing hot water under pressure through finely-ground coffee beans.",
    productCost: 2.5,
    type: "drink",
  },
  {
    id: 2,
    productName: "Cappuccino",
    productImage: "Images/cappuccino.webp",
    productDescription:
      "Espresso mixed with steamed milk and topped with frothy milk foam.",
    productCost: 3.5,
    type: "drink",
  },
  {
    id: 3,
    productName: "Latte",
    productImage: "Images/latte.jpg",
    productDescription:
      "A combination of espresso and steamed milk with a small layer of foam on top.",
    productCost: 3.75,
    type: "drink",
  },
  {
    id: 4,
    productName: "Iced Latte",
    productImage: "Images/iced-latte.jpg",
    productDescription: "A cold version of a latte served with ice.",
    productCost: 4.0,
    type: "drink",
  },
  {
    id: 5,
    productName: "Croissant",
    productImage: "Images/croissant.webp",
    productDescription:
      "A buttery, flaky, and soft pastry often enjoyed with coffee.",
    productCost: 2.0,
    type: "food",
  },
  {
    id: 6,
    productName: "Avocado Toast",
    productImage: "Images/avocado-toast.jpg",
    productDescription: "Toast topped with mashed avocado",
    productCost: 5.0,
    type: "food",
  },
  {
    id: 7,
    productName: "Bagel with Cream Cheese",
    productImage: "Images/bagel.jpg",
    productDescription:
      "A fresh, toasted bagel served with a spread of creamy cheese.",
    productCost: 3.0,
    type: "food",
  },
  {
    id: 8,
    productName: "Grilled Cheese Sandwich",
    productImage: "Images/Grilled Chese.jpg",
    productDescription:
      "A classic sandwich with melted cheese between two slices of buttered bread.",
    productCost: 4.5,
    type: "food",
  },
  {
    id: 9,
    productName: "Chocolate Cake",
    productImage: "Images/Choc Cake.jpg",
    productDescription:
      "A rich, moist cake often covered with chocolate frosting.",
    productCost: 3.0,
    type: "dessert",
  },
  {
    id: 10,
    productName: "Donuts",
    productImage: "Images/donut.webp",
    productDescription:
      "Fried dough pastries, often glazed or filled with cream or jelly.",
    productCost: 1.5,
    type: "dessert",
  },
];

function App() {

//bools for filtering which products we show using states
    const [isFoodOnly, setIsFoodOnly] = useState(false);
  const [isDrinksOnly, setIsDrinksOnly] = useState(false);
  const [isShowAllItems, setIsShowAllItems] = useState(true);

  // When clicked we show food only and change the other button states
  const handleFoodSort = () => {
    setIsFoodOnly(!isFoodOnly);
    setIsDrinksOnly(false);
    setIsShowAllItems(false);
  };

  // When clicked we show drinks only and change the other button states
  const handleDrinksSort = () => {
    setIsDrinksOnly(!isDrinksOnly);
    setIsFoodOnly(false);
    setIsShowAllItems(false);
  };
  // When clicked we show all and change the other button states
  const handleShowAll = () => {
    setIsShowAllItems(true);
    setIsFoodOnly(false);
    setIsDrinksOnly(false);
  };

  // Filter the products based on the selected category
  const filteredProducts = products.filter((product) => {
    if (isFoodOnly) {
      return product.type === "food"; // Filter for food only
    } else if (isDrinksOnly) {
      return product.type === "drink"; // Filter for drinks only
    }
    return true; // If no filter, show all products
  });

  // Basic Website Formating with button states 
  return (
    <div id="app">
      <header id="header">
        <h1>Welcome to Mike's Online Coffee</h1>
        <p>
          Please order from our current range of online Java n' Treats! Our menu
          is always changing, here's ours today
        </p>
      </header>

      <main id="main-header">
        <h1>Today's Menu</h1>

        <div id="MenuButtons">
          <button onClick={handleFoodSort}>
            {isFoodOnly ? "Hide Food" : "Show Food"}
          </button>

          <button onClick={handleDrinksSort}>
            {isDrinksOnly ? "Hide Drinks" : "Show Drinks"}
          </button>

          <button onClick={handleShowAll}>Show All Products</button>
        </div>
        <br></br>

        <ProductList products={filteredProducts} />
      </main>

      <br></br>

      <footer id="footer">
        <p>© 2025 Coffee Shop. All rights reserved.</p>
        <div className="social-links">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://twitter.com">Twitter</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
