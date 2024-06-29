import React, { useState, useEffect } from 'react';

const AddItems = ({ items }) => {
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    items.forEach(item => {
      initialQuantities[item.id] = item.quantity || 1;
    });
    setQuantities(initialQuantities);
  }, [items]);

  const incrementQuantity = (itemId) => {
    const newQuantities = {
      ...quantities,
      [itemId]: (quantities[itemId] || 1) + 1,
    };
    setQuantities(newQuantities);
    updateLocalStorage(itemId, newQuantities[itemId]);
  };

  const decrementQuantity = (itemId) => {
    if (quantities[itemId] > 1) {
      const newQuantities = {
        ...quantities,
        [itemId]: quantities[itemId] - 1,
      };
      setQuantities(newQuantities);
      updateLocalStorage(itemId, newQuantities[itemId]);
    }
  };

  const removeItem = (itemId) => {
    const newQuantities = { ...quantities };
    delete newQuantities[itemId];
    setQuantities(newQuantities);
    const username = localStorage.getItem('username');
    const userCart = JSON.parse(localStorage.getItem(username + '_cart'));
    const updatedCart = userCart.filter(item => item.id !== itemId);
    localStorage.setItem(username + '_cart', JSON.stringify(updatedCart));
  };

  const updateLocalStorage = (itemId, quantity) => {
    const username = localStorage.getItem('username');
    const userCart = JSON.parse(localStorage.getItem(username + '_cart'));
    const updatedCart = userCart.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity };
      }
      return item;
    });
    localStorage.setItem(username + '_cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="container mt-5">
      <h2>Added Items</h2>
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 mb-3">
            <div className="card">
              <img src={item.productImage} className="card-img-top" alt={item.productName} />
              <div className="card-body">
                <h5 className="card-title">{item.productName}</h5>
                <p className="card-text">{item.productDescription}</p>
                <p className="card-text"><strong>Price:</strong> Rs. {item.productPrice}</p>
                <div className="input-group">
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={() => decrementQuantity(item.id)}>-</button>
                  </div>
                  <input type="text" className="form-control text-center" value={quantities[item.id] || 1} readOnly />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                </div>
                <button className="btn btn-danger mt-2" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddItems;

