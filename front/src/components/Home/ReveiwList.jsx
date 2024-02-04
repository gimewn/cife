import ReviewListItem from '@components/Home/ReviewListItem';

import { DUMMY_DATA } from '@util/variable';

const ReviewList = () => {
  return (
    <div className="flex justify-start flex-col">
      <h1 className="main-section-title">후기를 기다리고 있어요.</h1>
      <div className="flex flex-col gap-8">
        {DUMMY_DATA.map((item) => (
          <ReviewListItem key={item.culture_id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
