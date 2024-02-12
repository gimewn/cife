import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PAGE_URL } from '@util/path';

import Home from '@pages/Home';
import Login from '@pages/Login';
import SignUp from '@pages/SignUp';
import Culture from '@pages/Culture';
import Review from '@pages/Review';
import Monthly from '@pages/Monthly';
import CultureDetail from '@pages/CultureDetail';
import ReviewDetail from '@pages/ReviewDetail';
import CultureEdit from '@pages/CultureEdit';
import ReviewEdit from '@pages/ReviewEdit';

import NavBar from '@components/NavBar';
import NotFound from '@pages/NotFound';
import AuthRequiredRoutes from '@util/AuthRequiredRoutes';
import AuthManageRoutes from '@util/AuthManageRoutes';

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<AuthRequiredRoutes />}>
          <Route path={`${PAGE_URL.HOME}`} element={<Home />} />
          <Route path={`${PAGE_URL.CULTURE}`} element={<Culture />} />
          <Route path={`${PAGE_URL.CULTURE}/:cultureId`} element={<CultureDetail />} />
          <Route path={`${PAGE_URL.CULTURE_EDIT}`} element={<CultureEdit />} />
          <Route path={`${PAGE_URL.REVIEW}`} element={<Review />} />
          <Route path={`${PAGE_URL.REVIEW}/:reviewId`} element={<ReviewDetail />} />
          <Route path={`${PAGE_URL.REVIEW_EDIT}`} element={<ReviewEdit />} />
          <Route path={`${PAGE_URL.MONTHLY}`} element={<Monthly />} />
        </Route>
        <Route element={<AuthManageRoutes />}>
          <Route path={`${PAGE_URL.LOGIN}`} element={<Login />} />
          <Route path={`${PAGE_URL.SIGNUP}`} element={<SignUp />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
