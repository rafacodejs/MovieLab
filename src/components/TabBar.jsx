import React from 'react';
import { NavLink } from 'react-router-dom';
import { tabBar } from '../routes';
import styles from '../styles/styles';

const TabBar = () => {
  return (
    <div
      className={`w-full h-[70px] ${styles.flexCenter} fixed bottom-0 rounded-t-[12px] shadow-2xl z-30 bg-dimDark border-t-[1px] border-primary `}
    >
      <ul className='flex justify-between items-center '>
        {tabBar.map((link, index) => (
          <li
            key={link.id}
            className={`${
              styles.flexCenter
            } flex-col text-[12px] ss:text-[16px] font-primary font-normal ${
              index === tabBar.length - 1
                ? 'mr-0'
                : 'mr-8 xs:mr-16 ss:mr-20 mt-1'
            } `}
          >
            <NavLink
              className={`${({ isActive }) =>
                isActive ? 'text-tertiary' : 'text-white'} text-[20px]`}
              to={link.to}
              end
            >
              {link.icon}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-tertiary' : 'text-white'
              }
              to={link.to}
              end
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TabBar };