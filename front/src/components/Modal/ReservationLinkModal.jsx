import { useNavigate } from 'react-router-dom';

import Surprise from '@assets/surprise.png';

import useStopPropagation from '@hooks/useStopPropagation';

import { PAGE_URL } from '@util/path';

const ReservationLinkModal = ({ closeModal, cultureId }) => {
  const navigate = useNavigate();
  const onClickLinkInputButton = useStopPropagation(() =>
    navigate(PAGE_URL.CULTURE_DETAIL(cultureId)),
  );
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <img src={Surprise} className="w-1/3" />
        <p className="font-bold text-4xl text italic">앗!</p>
        <p className="font-bold">예매처 링크가 존재하지 않아요.</p>
      </div>
      <div className="flex gap-3 flex-1 w-full">
        <button className="btn bg-gray w-full" onClick={closeModal}>
          닫기
        </button>
        <button className="btn bg-red w-full" onClick={onClickLinkInputButton}>
          링크 입력하기
        </button>
      </div>
    </div>
  );
};

export default ReservationLinkModal;
