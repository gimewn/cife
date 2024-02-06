import Star from '@assets/m_star.svg';
import StarDisabled from '@assets/m_star_disabled.svg';
import useStopPropagation from '@hooks/useStopPropagation';
import { PAGE_URL } from '@util/path';
import { useNavigate } from 'react-router-dom';

const SwiperCard = ({ data }) => {
  const navigate = useNavigate();
  const onClickCard = useStopPropagation(() => navigate(PAGE_URL.CULTURE_DETAIL(data.culture_id)));
  const onClickSeeReviewButton = useStopPropagation(() =>
    navigate(PAGE_URL.REVIEW_DETAIL(data.review_id)),
  );
  const onClickWriteReviewButton = useStopPropagation(() =>
    navigate(PAGE_URL.REVIEW_EDIT, { state: { cultureId: data.culture_id } }),
  );

  return (
    <div
      className="bg-white rounded-xl py-10 px-10 flex justify-center flex-col items-center gap-6"
      onClick={onClickCard}
    >
      <h1 className="text-xl font-bold">
        [{data.category}] {data.title}
      </h1>
      <div className="flex gap-2 mb-2">
        {[1, 2, 3, 4, 5].map((num) => (
          <img key={num} src={`${data.score >= num ? Star : StarDisabled}`} />
        ))}
      </div>
      <div className="flex justify-center flex-col items-center gap-2">
        {data.reserved_date && (
          <p>
            <span className="text-red font-bold">{data.reserved_date}</span>
            <span>{data.saw_date ? '에 예매했고,' : '에 예매했어요'}</span>
          </p>
        )}
        {data.saw_date && (
          <p>
            <span className="text-red font-bold">{data.saw_date}</span>
            <span>에 관람했어요.</span>
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
