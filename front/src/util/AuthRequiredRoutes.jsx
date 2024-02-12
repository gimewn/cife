import { Navigate, Outlet } from 'react-router-dom';
import { PAGE_URL } from '@util/path';

const AuthRequiredRoutes = () => {
  return localStorage.getItem('isLogin') == 1 ? <Outlet /> : <Navigate to={PAGE_URL.LOGIN} />;
};

export default AuthRequiredRoutes;
