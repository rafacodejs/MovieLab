import { NavLink } from 'react-router-dom';
import { navLinks } from '../../routes';
import styles from '../../styles/styles';
const Menu = () => {
  return (
    <nav className={`${styles.flexCenter}`}>
      <ul className='flex flex-row'>
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`text-[20px] md:text-[22px] font-primary font-bold ${
              index === navLinks.length - 1 ? 'mr-0' : 'sm:mr-4 md:mr-6 '
            } animation-link` }
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-primary' : 'text-white hover:text-primary'
              }
              to={link.to}
              end
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Menu };
