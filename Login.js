import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      setMessage(response.data.message);
      if (response.data.message === 'Login successful') {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        navigate('/cart');
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Error connecting to the server');
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mt-3" onClick={handleLogin}>Login</button>
      <p className="mt-3">{message}</p>
    </div>
  );
};

export default Login;

