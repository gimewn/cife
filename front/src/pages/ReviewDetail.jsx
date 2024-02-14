import { useLocation, useNavigate, useParams } from 'react-router-dom';

import ScoreStar from '@assets/score_star.svg';
import ScoreStarDisabled from '@assets/score_star_disabled.svg';
import SmileKitty from '@assets/smile_kitty.png';

import Main from '@components/MainContainer';

import { PAGE_URL } from '@util/path';
import { useQuery } from 'react-query';
import { getReview } from '@api/Review';
import Loader from '@components/Loader';

const ReviewDetail = () => {
  const navigate = useNavigate();
  const { reviewId } = useParams();
  const { state } = useLocation();

  const { data, isLoading } = useQuery(['reviewInfo', reviewId], () => getReview(reviewId));

  if (isLoading) return <Loader />;

  return (
    <Main>
      <section className="w-full justify-center flex flex-col items-center gap-8">
        <h1 className="main-section-title m-0 text-3xl">
          [{state.category}] {state.title}
        </h1>
        <p>어떠셨나요?</p>
        <div className="flex gap-2 mb-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <img key={num} src={`${data.score >= num ? ScoreStar : ScoreStarDisabled}`} />
          ))}
        </div>
        {data.contents && (
          <textarea
            className="bg-white w-full min-h-60 rounded-lg p-3 outline-none"
            value={data.contents}
            disabled
          />
        )}
        {!data.contents && (
          <div className="text-lg font-bold flex flex-col items-center gap-2">
            <img src={SmileKitty} className="w-2/3 mb-6" />
            <p>점수로만 평가하셨네요!</p>
            <p>글로 소감을 남겨보시는 건 어때요?</p>
          </div>
        )}
        <button
          className="btn bg-purple ml-auto w-full py-3"
          onClick={() =>
            navigate(PAGE_URL.REVIEW_EDIT, {
              state: {
                reviewId: data.reviewId,
                title: state.title,
                category: state.category,
              },
            })
          }
        >
          수정하러 가기
        </button>
      </section>
    </Main>
  );
};

export default ReviewDetail;
