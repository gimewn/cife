import { Navigate, Outlet } from 'react-router-dom';
import { PAGE_URL } from '@util/path';

const AuthRequiredRoutes = () => {
  return sessionStorage.userId ? <Outlet /> : <Navigate to={PAGE_URL.LOGIN} />;
};

export default AuthRequiredRoutes;
