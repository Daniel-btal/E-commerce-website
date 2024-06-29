import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddItems from './AddItems';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/productlist')
      .then(response => {
        setCartItems(response.data);
      })
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  const handleAddToCart = (item) => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    
    if (username && password) {
      const userCart = JSON.parse(localStorage.getItem(username + '_cart')) || [];
      const updatedCart = [...userCart, { ...item, quantity: 1 }];
      localStorage.setItem(username + '_cart', JSON.stringify(updatedCart));
      setAddedItems(updatedCart);
    } else {
      console.error('User is not logged in');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Shopping Cart</h1>
      <div className="row">
        {cartItems.map((item, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <img src={item.productImage} className="card-img-top" alt={item.productName} />
                <h3 className="card-title text-center">{item.productName}</h3>
                <p className="card-text text-center">{item.productDescription}</p>
                <h5 className="card-text text-center">Rs. {item.productPrice}</h5>
                <button 
                  className="btn btn-primary" 
                  onClick={() => handleAddToCart(item)}
                > Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AddItems items={addedItems} />
    </div>
  );
};

export default Cart;

