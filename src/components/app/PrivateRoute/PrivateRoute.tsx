import React from 'react';
import { Navigate } from 'react-router-dom';

import { Routes } from '../../../routes/routes';
import { getAuthData } from '../../../store/selectors/authSelector';
import { useSelector } from 'react-redux';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useSelector(getAuthData);

  return isAuthenticated ? <>{children}</> : <Navigate to={Routes.LOGIN} />;
};

export default PrivateRoute;
