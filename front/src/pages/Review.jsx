import Main from '@components/MainContainer';
import { DUMMY_DATA } from '@util/variable';
import ReviewListItem from '@components/Review/ReviewListItem';

const Review = () => {
  return (
    <Main>
      <h1 className="main-section-title w-full mt-0">작성하신 후기 목록이에요.</h1>
      <div className="w-full flex flex-col gap-8">
        {DUMMY_DATA.map((item) => (
          <ReviewListItem
            key={item.culture_id}
            reviewId={item.culture_id}
            category={item.category}
            title={item.title}
            isImportant={item.is_important}
            sawDate={item.saw_date}
          />
        ))}
      </div>
    </Main>
  );
};

export default Review;
