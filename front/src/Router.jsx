import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PAGE_URL } from './util/path';
import Main from '@pages/Main';
import Login from '@pages/Login';
import SignUp from '@pages/SignUp';
import Culture from '@pages/Culture';
import Review from '@pages/Review';
import Monthly from '@pages/Montly';
import NavBar from '@components/NavBar';

BrowserRouter;

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={`${PAGE_URL.MAIN}`} element={<Main />} />
        <Route path={`${PAGE_URL.LOGIN}`} element={<Login />} />
        <Route path={`${PAGE_URL.SIGNUP}`} element={<SignUp />} />
        <Route path={`${PAGE_URL.CULTURE}`} element={<Culture />} />
        <Route path={`${PAGE_URL.REVIEW}`} element={<Review />} />
        <Route path={`${PAGE_URL.MONTHLY}`} element={<Monthly />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
