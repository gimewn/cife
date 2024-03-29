import { useQuery } from 'react-query';

import Main from '@components/MainContainer';
import ReviewListItem from '@components/Review/ReviewListItem';
import Loader from '@components/Loader';
import Empty from '@components/Empty';

import { getReviewList } from '@api/Review';

const Review = () => {
  const { data, isLoading, refetch } = useQuery(['reviewList'], getReviewList);

  if (isLoading) return <Loader />;

  return (
    <Main>
      <h1 className="main-section-title w-full mt-0">작성하신 후기 목록이에요.</h1>
      <div className="w-full flex flex-col gap-8">
        {data.length < 1 && <Empty />}
        {data.map((item) => (
          <ReviewListItem
            key={item.reviewId}
            reviewId={item.reviewId}
            category={item.category}
            title={item.title}
            isImportant={item.isImportant}
            sawDate={item.sawDate}
            refetch={refetch}
          />
        ))}
      </div>
    </Main>
  );
};

export default Review;
