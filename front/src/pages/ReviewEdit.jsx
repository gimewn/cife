import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import ScoreStar from '@assets/score_star.svg';
import ScoreStarDisabled from '@assets/score_star_disabled.svg';

import Main from '@components/MainContainer';

const ReviewEdit = () => {
  const { state } = useLocation();
  const data = {
    category: '뮤지컬',
    title: '난쟁이들',
  };

  const [score, setScore] = useState(0);
  const [review, setReview] = useState();

  return (
    <Main>
      <section className="w-full justify-center flex flex-col items-center gap-8">
        <h1 className="main-section-title m-0 text-3xl">
          [{data.category}] {data.title}
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
          onChange={(e) => setReview(e.target.value)}
        />
        <button className="btn bg-purple ml-auto">
          {state.reviewId ? '수정 완료' : '등록하기'}
        </button>
      </section>
    </Main>
  );
};

export default ReviewEdit;
