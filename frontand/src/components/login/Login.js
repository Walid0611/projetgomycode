import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  // Partie login form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/app/PrivateRoute');
    }
  }, [navigate]);

  const handleLogin = async (values) => {
    try {
      const res = await axios.post('http://localhost:3006/auth/login', values);
      console.log('res', res.data.token);

      await localStorage.setItem('token', res.data.token);
      navigate('/app/PrivateRoute');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="bold-line" />
      <div className="container">
        <div className="window">
          <div className="overlay" />
          <div className="content">
            <div className="welcome">Hello There!</div>
            <div className="subtitle">
              We're almost done. Before using our services, you need to create an account.
            </div>
            <div className="input-fields">
              <input
                type="email"
                placeholder="Email"
                className="input-line full-width"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="input-line full-width"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="spacing">
              or continue with <span className="highlight">Facebook</span>
            </div>
            <div>
              <button onClick={() => handleLogin({ email, password })}>login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
