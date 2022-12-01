import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { login, signup } from '../utils/authenticate';
import { UserContext } from '../context/index';
import styles from '../styles/styles';

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
  const back = () => {
    navigate(-1);
  };

  return (
    <div className={`w-full h-screen`}>
      <div className='flex justify-between sd:justify-center items-center'>
        <div
          className='flex sd:hidden justify-start items-start ml-2 text-white text-[38px] cursor-pointer'
          onClick={back}
        >
          <RiArrowLeftSLine />
        </div>
        <div className={`${styles.flexCenter}`}>
          <h1 className='flex justify-center items-center text-[32px] text-gradient font-primary font-bold'>
            Login
          </h1>
        </div>
        <div className='flex sd:hidden ml-14'>{''}</div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <div
          className={`${styles.flexCenter} flex-col w-[90%] h-[350px] m-w-[768px] mt-10`}
        >
          <form
            onSubmit={handleSubmit}
            className='flex flex-col justify-between items-center w-full h-full'
          >
            <input
              className='w-full h-20 pl-5 text-[20px] text-black font-primary font-bold outline-none rounded-[8px] bg-blue-gradient shadow-5xl placeholder:text-black'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Username'
            />
            <input
              className='w-full h-20 pl-5  text-[20px] text-black font-primary font-bold outline-none rounded-[8px] bg-blue-gradient shadow-5xl placeholder:text-black'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
            />
            <button
              className={`py-2 px-4 mb-5 rounded-md bg-blue-gradient font-poppins font-medium text-[18px] text-black outline-none}`}
              onClick={handleSubmit}
            >
              Log in
            </button>
            <p
              className='font-primary font-medium flex justify-center items-center flex-col text-[18px]'
              onClick={signup}
            >
              ¿No tienes una cuenta?
              <a className='text-primary cursor-pointer'>Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Login };
