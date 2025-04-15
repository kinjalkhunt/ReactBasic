import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "./slice/CartSlice.js";


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0); 
  console.log("Total Items:", totalItems);
  

  const handleAddToCart = () => {
    dispatch(addToCart({ id: 1, name: "Sample Product", price: 100 }));
  };

  return (
    <div>
      <h2 className="text-2xl">Shopping Cart</h2>
      <br></br>
      <p><button className="border p-2" onClick={handleAddToCart}>Add to Cart</button></p>
      <p><button className="border p-2 " onClick={() => dispatch(clearCart())}>Clear Cart</button></p>
      <h3>Total Items: {totalItems}</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <p>subtotal: ${item.price * item.quantity}</p>
            <p><button className="border p-2 " onClick={() => dispatch(removeFromCart(item.id))}>Remove</button></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
