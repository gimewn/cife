import { HashLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="w-full mt-24 flex flex-col gap-10 justify-center items-center">
      <HashLoader color="black" />
      <p>로딩 중이에요</p>
    </div>
  );
};

export default Loader;
