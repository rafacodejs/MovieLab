import React, { useContext } from 'react';
import { UserContext } from '../context/index';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ page }) => {
  const { user } = useContext(UserContext);
  return user.success ? page : <Navigate to='/' />;
};
