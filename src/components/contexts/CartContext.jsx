import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

// Create Cart Context
const CartContext = createContext();

// Cart Provider to wrap around the entire app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart data from localStorage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart && Array.isArray(savedCart)) {
      setCart(savedCart);
    }
  }, []);

  // Save cart data to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product) => {
    // Check if product has 'product-name' and 'id'
    if (!product || !product.id || !product['product-name']) {
      console.error('Invalid product data:', product);
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // If item already exists, increase quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item with correct 'product-name' field
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      // Remove item from the cart by productId
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      // Update localStorage with the new cart data after removing the item
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Log errors or any issues with the cart state
  useEffect(() => {
    if (!Array.isArray(cart)) {
      console.error('Cart state is not an array:', cart);
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Add PropTypes for CartProvider
CartProvider.propTypes = {
  children: PropTypes.node, // children are optional now
};

// Custom hook to access the cart context
export const useCart = () => useContext(CartContext);
