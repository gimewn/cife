import EmptyMonkey from '@assets/empty_monkey.png';

const Empty = ({ size = 'small' }) => {
  const getSize = () => {
    switch (size) {
      case 'medium':
        return 'w-4/5';
      case 'small':
        return 'w-1/3';
    }
  };
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-5">
      <img src={EmptyMonkey} className={`${getSize()}`} />
      <p>콘텐츠가 존재하지 않아요.</p>
    </div>
  );
};

export default Empty;
