import Logo from '@assets/logo.png';

export const NavBar = () => {
  return (
    <header className='flex justify-between items-center border-black border-b'>
      <img src={Logo} />
      <section>
        <p>로그인</p>
      </section>
    </header>
  );
};
