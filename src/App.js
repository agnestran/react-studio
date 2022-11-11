import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState({prods: {}, total: 0});

  
  const update = (index) => {
    const bakeryItem = bakeryData[index];
    const itemName = bakeryItem.name;
    const updateProducts = cart.prods;

    if (updateProducts[itemName]) {
      updateProducts[itemName] += 1;
    }
    else {
      updateProducts[itemName] = 1;
    }

    const updatedTotal = cart.total + bakeryItem.price
    setCart({prods: updateProducts, total: updatedTotal})
  }

  return (
    <div className="App flex">
      <main className="flex flex-col w-2/3 p-8 gap-8">
        <h1>Egg Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components            
            <BakeryItem item={item} update={update} index={index}>
            </BakeryItem>
          ))}
      </div>
      </main>
      <aside className="flex flex-col p-8">
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>

      <div className="cart-card" >
          <h1>My Cart</h1>
          {/* TODO: render a list of items in the cart */}
          {Object.keys(cart.prods).map((itemName) => (<p>{cart.prods[itemName]} {itemName}</p>))}
          <h3>Total Cost</h3>
          <p>${cart.total.toFixed(2)}</p>
          </div>
      </aside>
      </div>
  );
}




export default App;
