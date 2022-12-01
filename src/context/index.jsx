import React, { useState, useEffect } from 'react';
import { API } from '../API';

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    success: false,
    session_id: null,
  });
  const [details, setDetails] = useState({});
  const localUser = JSON.parse(localStorage.getItem('session_user'));
  useEffect(() => {
    const axiosData = async () => {
      const { data } = await API.get('/account', {
        params: {
          session_id: localUser.session_id,
        },
      });
      setDetails(data);
    };
    if (typeof localUser === 'undefined' || localUser === null) {
      localStorage.setItem('session_user', JSON.stringify(user));
    } else if (localUser.success && !user.success) {
      setUser(localUser);
      axiosData();
    } else if (user.success) {
      axiosData();
    }
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser, details, setDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
