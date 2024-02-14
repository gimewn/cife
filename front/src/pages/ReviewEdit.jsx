import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';

import { createReview, getReview, updateReview } from '@api/Review';

import ScoreStar from '@assets/score_star.svg';
import ScoreStarDisabled from '@assets/score_star_disabled.svg';

import Main from '@components/MainContainer';

import { PAGE_URL } from '@util/path';

const ReviewEdit = () => {
  const { state } = useLocation();

  const { data, isLoading } = useQuery(
    ['reviewInfo', state.reviewId],
    () => getReview(state.reviewId),
    {
      enabled: !!state.reviewId,
    },
  );

  const [score, setScore] = useState(0);
  const [contents, setContents] = useState();

  useEffect(() => {
    if (data && !isLoading) {
      setScore(data.score);
      setContents(data.contents);
    }
  }, [data, isLoading]);

  const onClickConfirmButton = async () => {
    const reviewData = {
      reviewId: state.reviewId,
      cultureId: state.cultureId,
      score: score,
      contents: contents,
    };
    const funcs = state.reviewId ? updateReview : createReview;
    const result = await funcs(reviewData);
    if (result == 'success') {
      alert('완료되었습니다.');
      window.location.href = PAGE_URL.REVIEW;
    }
  };

  return (
    <Main>
      <section className="w-full justify-center flex flex-col items-center gap-8">
        <h1 className="main-section-title m-0 text-3xl">
          [{state.category}] {state.title}
        </h1>
        <p>어떠셨나요?</p>
        <div className="flex gap-2 mb-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <img
              key={num}
              className="cursor-pointer"
              src={`${score >= num ? ScoreStar : ScoreStarDisabled}`}
              onClick={() => {
                if (num === 1 && score === 1) {
                  setScore(0);
                  return;
                }
                setScore(num);
              }}
            />
          ))}
        </div>
        <textarea
          className="w-full min-h-60 rounded-lg p-3 outline-none"
          onChange={(e) => setContents(e.target.value)}
          value={contents}
        />
        <button className="btn bg-purple ml-auto" onClick={onClickConfirmButton}>
          {state && state.reviewId ? '수정 완료' : '등록하기'}
        </button>
      </section>
    </Main>
  );
};

export default ReviewEdit;
