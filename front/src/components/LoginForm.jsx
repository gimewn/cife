const LoginForm = ({ children }) => {
  return (
    <section className="bg-glass w-full rounded-2xl flex flex-col items-center justify-center py-9 px-14 gap-8">
      {children}
    </section>
  );
};

export default LoginForm;
