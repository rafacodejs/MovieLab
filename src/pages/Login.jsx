import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { login, signup } from '../utils/authenticate';
import { UserContext } from '../context/index';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login({ username, password });
    if (user.success) {
      setUser(user);
      navigate('/');
    }
  };

  return (
    <div>
      <RiArrowLeftSLine />
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
          <button onClick={handleSubmit}>Log in</button>
          <p onClick={signup}>
            no tienes una cuenta?
            <a> sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export { Login };
