const MenuCircle = ({ isFocus, image, title, onClickFun }) => {
  return (
    <div className="flex flex-col gap-5 items-center" onClick={onClickFun}>
      <div
        className={`${
          isFocus ? 'bg-glass-full' : 'bg-glass'
        } rounded-full p-6 hover:bg-glass-full hover:rounded-full hover:p-6 cursor-pointer`}
      >
        <img src={image} className="w-16 h-16" />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default MenuCircle;
