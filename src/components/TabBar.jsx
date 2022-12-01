import { useContext } from 'react';
import { UserContext } from '../context';
import { Profile } from './index';
import { NavLink, Link } from 'react-router-dom';
import { tabBar } from '../routes/NavBar';
import styles from '../styles/styles';
import { AiOutlineUser } from 'react-icons/ai';

const TabBar = () => {
  const { user } = useContext(UserContext);
  window.scrollTo(0, 0);

  return (
    <div
      className={`w-full h-[70px] ${styles.flexCenter} fixed bottom-0 rounded-t-[12px] shadow-2xl z-30 bg-dimDark border-t-[1px] border-primary `}
    >
      <ul className='flex justify-between items-center '>
        {tabBar.map((link) => (
          <li
            key={link.id}
            className={`${styles.flexCenter} flex-col text-[14px] ss:text-[18px] font-primary font-normal mr-5 xs:mr-10 ss:mr-16 sm:mr-20 mt-1 `}
          >
            <NavLink
              className={`${({ isActive }) =>
                isActive ? 'text-primary' : 'text-white'} text-[20px]`}
              to={link.to}
              end
            >
              {link.icon}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-primary' : 'text-white'
              }
              to={link.to}
              end
            >
              {link.text}
            </NavLink>
          </li>
        ))}
        {user.success ? (
          <Profile />
        ) : (
          <button className='flex justify-center items-center  flex-col font-primary font-normal text-[22px] mt-1 '>
            <AiOutlineUser />

            <Link to={`/login`} className='text-[14px] ss:text-[18px]'>
              Login
            </Link>
          </button>
        )}
      </ul>
    </div>
  );
};

export { TabBar };
