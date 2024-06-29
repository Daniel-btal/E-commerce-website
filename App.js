import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Cart from './components/Cart';
import AddItems from './components/AddItems';
import Footer from './components/footer';
import Register from './components/register';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart addItem={addItem}  />} />
            <Route path="/additems" element={<AddItems items={items} />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
