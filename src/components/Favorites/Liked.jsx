import { useContext } from 'react';
import { API } from '../../API';
import { UserContext } from '../../context/index';
import styles from '../../styles/styles';

const Liked = ({ id, like, setLike, media }) => {
  const { details, user } = useContext(UserContext);

  const liked = async () => {
    if (user.success) {
      const { data } = await API.post(
        `/account/${details.id}/favorite?session_id=${user.session_id}`,
        {
          media_type: media,
          media_id: id,
          favorite: !like,
        }
      );
      if (data.status_code === 1 || data.status_code === 13) {
        setLike(!like);
      }
    }
  };

  return (
    <div className={`${styles.flexCenter}`}>
      <button
        onClick={liked}
        className={like ? 'liked-btn liked-btn--liked' : 'liked-btn'}
      />
    </div>
  );
};

export { Liked };
