import { Navigate, Outlet } from 'react-router-dom';

import { PAGE_URL } from '@util/path';

const AuthManageRoutes = () => {
  return localStorage.getItem('isLogin') == 1 ? <Navigate to={PAGE_URL.HOME} /> : <Outlet />;
};

export default AuthManageRoutes;
