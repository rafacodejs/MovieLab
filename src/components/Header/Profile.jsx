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
    <div onClick={handleClick} className={`${styles.flexCenter}`}>
      <p className='text-[18px] font-primary font-medium'>{details.username}</p>
      <img
        src={`https://www.gravatar.com/avatar/${details.avatar?.gravatar.hash}`}
        alt={details.username}
        className='w-[30px] ml-2 rounded-full cursor-pointer'
      />
    </div>
  );
};

export { Profile };
