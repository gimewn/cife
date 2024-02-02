const InputBox = ({ children, type = 'full' }) => {
  return (
    <div
      className={`${
        type === 'notFull' ? undefined : 'w-full'
      } shadow-custom flex bg-white rounded-2xl p-4 gap-3 box-border`}
    >
      {children}
    </div>
  );
};

export default InputBox;
