import Logo from '@assets/logo.png';
import { NavLink } from 'react-router-dom';

import { PAGE_URL } from '@util/path';

const NavBar = () => {
  const checkIsActive = ({ isActive }) => {
    return { fontWeight: isActive ? 800 : undefined };
  };
  return (
    <header className="border-black border-b">
      <section className="flex justify-between items-center py-7 px-12">
        <NavLink to={PAGE_URL.MAIN}>
          <img src={Logo} className="w-[4.6875rem]" />
        </NavLink>
        <section className="navBar_menu flex gap-6">
          <NavLink to={PAGE_URL.HOME} style={checkIsActive}>
            <p>홈</p>
          </NavLink>
          <NavLink to={PAGE_URL.CULTURE} style={checkIsActive}>
            <p>문화생활 관리</p>
          </NavLink>
          <NavLink to={PAGE_URL.REVIEW} style={checkIsActive}>
            <p>후기 관리</p>
          </NavLink>
          <NavLink to={PAGE_URL.MONTHLY} style={checkIsActive}>
            <p>월간 문화생활</p>
          </NavLink>
          <NavLink to={PAGE_URL.LOGIN} style={checkIsActive}>
            <p>로그인</p>
          </NavLink>
        </section>
      </section>
    </header>
  );
};

export default NavBar;
