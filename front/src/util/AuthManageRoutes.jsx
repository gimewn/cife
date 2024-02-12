import { Navigate, Outlet } from 'react-router-dom';
import { PAGE_URL } from '@util/path';

const AuthManageRoutes = () => {
  return sessionStorage.userId ? <Navigate to={PAGE_URL.HOME} /> : <Outlet />;
};

export default AuthManageRoutes;
