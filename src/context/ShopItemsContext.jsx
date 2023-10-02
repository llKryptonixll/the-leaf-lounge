import { createContext, useState, useEffect } from 'react';
import PropTypes from "prop-types"
const ShopItemsContext = createContext();

export function ShopItemsProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  function incrementQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  function decrementQuantity() {
    setQuantity((prevQuantity) => prevQuantity - 1)
  }


  function addToCart(shopItem) {
    if (existingCartItems.some((existingItem) => existingItem.id === shopItem.id)) {
      // If the item is already in the cart, update its quantity
      const updatedCartItems = existingCartItems.map((existingItem) => {
        if (existingItem.id === shopItem.id) {
          existingItem.quantity = quantity;
        }
        return existingItem;
      });
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      // If the item is not in the cart, add it with the specified quantity
      const newItem = { ...shopItem, quantity };
      setCartItems((prevItems) => [...prevItems, newItem]);
      const updatedCartItems = [...existingCartItems, newItem];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
    // reset quantity att the end to avoid wrong quantity
    setQuantity(1)
  }
  return (
    <ShopItemsContext.Provider value={{ decrementQuantity, incrementQuantity, addToCart, cartItems, setCartItems, quantity }}>
      {children}
    </ShopItemsContext.Provider>
  )
}

ShopItemsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopItemsContext;