import SeeListItem from '@components/Home/SeeListItem';

import { DUMMY_DATA } from '@util/variable';

const SeeList = () => {
  return (
    <div className="flex justify-start flex-col">
      <h1 className="main-section-title">관람을 기다리고 있어요.</h1>
      <div className="flex flex-col gap-8">
        {DUMMY_DATA.map((item) => (
          <SeeListItem key={item.culture_id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SeeList;
