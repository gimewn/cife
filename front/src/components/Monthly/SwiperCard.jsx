import { useNavigate } from 'react-router-dom';

import Star from '@assets/m_star.svg';
import StarDisabled from '@assets/m_star_disabled.svg';

import useStopPropagation from '@hooks/useStopPropagation';

import { formatDate } from '@util/funcs';
import { PAGE_URL } from '@util/path';

const SwiperCard = ({ data }) => {
  const navigate = useNavigate();
  const onClickCard = useStopPropagation(() => navigate(PAGE_URL.CULTURE_DETAIL(data.cultureId)));
  const onClickSeeReviewButton = useStopPropagation(() =>
    navigate(PAGE_URL.REVIEW_DETAIL(data.reviewId)),
  );
  const onClickWriteReviewButton = useStopPropagation(() =>
    navigate(PAGE_URL.REVIEW_EDIT, { state: { cultureId: data.cultureId } }),
  );

  return (
    <div
      className="w-full bg-white rounded-xl py-10 px-10 flex justify-center flex-col items-center gap-6 "
      onClick={onClickCard}
    >
      <h1 className="w-full text-xl font-bold whitespace-nowrap text-ellipsis overflow-hidden text-center">
        [{data.category}] {data.title}
      </h1>
      <div className="flex gap-2 mb-2">
        {[1, 2, 3, 4, 5].map((num) => (
          <img key={num} src={`${data.score >= num ? Star : StarDisabled}`} />
        ))}
      </div>
      <div className="flex justify-center flex-col items-center gap-2">
        {data.reservedDate && (
          <p>
            <span className="text-red font-bold">{formatDate(data.reservedDate)}</span>
            <span>{data.sawDate ? '에 예매했고,' : '에 예매했어요'}</span>
          </p>
        )}
        {data.sawDate && (
          <p>
            <span className="text-red font-bold">{formatDate(data.sawDate)}</span>
            <span>
              {new Date(data.sawDate) < new Date() ? '에 관람했어요.' : '에 관람 예정이에요.'}
            </span>
          </p>
        )}
      </div>
      {data.reviewId && (
        <button className="btn bg-purple w-full" onClick={onClickSeeReviewButton}>
          후기 보러 가기
        </button>
      )}
      {!data.reviewId && (
        <button className="btn bg-purple w-full" onClick={onClickWriteReviewButton}>
          후기 쓰러 가기
        </button>
      )}
    </div>
  );
};

export default SwiperCard;
