import Surprise from '@assets/surprise.png';

const ReservationLinkModal = ({ closdModal }) => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <img src={Surprise} className="w-1/3" />
        <p className="font-bold text-4xl text italic">앗!</p>
        <p className="font-bold">예매처 링크가 존재하지 않아요.</p>
      </div>
      <div className="flex gap-3 flex-1 w-full">
        <button className="btn-small bg-gray w-full" onClick={closdModal}>
          닫기
        </button>
        <button className="btn-small bg-red w-full">링크 입력하기</button>
      </div>
    </div>
  );
};

export default ReservationLinkModal;
