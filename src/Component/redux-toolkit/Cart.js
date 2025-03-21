import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "./slice/CartSlice.js";


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0); 

  const handleAddToCart = () => {
    dispatch(addToCart({ id: 1, name: "Sample Product", price: 100 }));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <h3>Total Items: {totalItems}</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
