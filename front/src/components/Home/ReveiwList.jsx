import { useQuery } from 'react-query';

import { getNotReviewedList } from '@api/Home';

import ReviewListItem from '@components/Home/ReviewListItem';
import Loader from '@components/Loader';
import Empty from '@components/Empty';

const ReviewList = () => {
  const { data, isLoading, refetch } = useQuery(['homeNotReviewedList'], getNotReviewedList);
  if (isLoading) return <Loader />;
  return (
    <div className="flex justify-start flex-col">
      <h1 className="main-section-title">후기를 기다리고 있어요.</h1>
      <div className="flex flex-col gap-8">
        {data.length < 1 && <Empty />}
        {data.map((item) => (
          <ReviewListItem key={item.cultureId} item={item} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
