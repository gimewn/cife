import Logo from '@assets/logo.png';

export const NavBar = () => {
  return (
    <header className="border-black border-b">
      <section className="flex justify-between items-center py-7 px-12">
        <img src={Logo} className="w-[4.6875rem]" />
        <section className="navBar_menu flex gap-6">
          <p>문화생활 관리</p>
          <p>후기 관리</p>
          <p>월간 문화생활</p>
          <p>로그인</p>
        </section>
      </section>
    </header>
  );
};
