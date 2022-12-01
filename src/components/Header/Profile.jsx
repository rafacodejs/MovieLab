import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/index';
import { logout } from '../../utils/authenticate';

const Profile = () => {
  // const navigate = useNavigate();
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
    <div onClick={handleClick}>
      <p>{details.username}</p>
      <img
        src={`https://www.gravatar.com/avatar/${details.avatar?.gravatar.hash}`}
        alt={details.username}
      />
    </div>
  );
};

export { Profile };
