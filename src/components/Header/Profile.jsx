import { useContext } from 'react';
import { UserContext } from '../../context/index';
import { logout } from '../../utils/authenticate';
import styles from '../../styles/styles';

const Profile = () => {
  const { user, details, setUser, setDetails } = useContext(UserContext);
  const handleClick = async () => {
    const newUser = {
      success: false,
      session_id: null,
    };
    const res = await logout(user.session_id, newUser);
    if (res.success) {
      setUser(newUser);
      setDetails({});
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`${styles.flexCenter} flex-col sd:flex-row`}
    >
      <p className='hidden sd:block text-[18px] font-primary font-medium'>
        {details.username}
      </p>
      <img
        src={`https://www.gravatar.com/avatar/${details.avatar?.gravatar.hash}`}
        alt={details.username}
        className='w-[22px] ss:w-[25px] ml-2 rounded-full cursor-pointer'
      />
      <p className='sd:hidden text-[14px] ss:text-[18px] font-primary font-normal'>
        {details.username}
      </p>
    </div>
  );
};

export { Profile };
