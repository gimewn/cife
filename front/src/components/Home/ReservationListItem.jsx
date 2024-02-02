import Star from '@assets/star.svg';

const ReservationListItem = ({ item }) => {
  const onClickNowReservaeButton = () => {
    if (item.link) {
      window.open(item.link);
    }
  };

  return (
    <div className="bg-glass flex flex-col items-center p-8 gap-6">
      <p className="d-day-title">D-{item.d_day}</p>
      <div className="flex justify-center items-center gap-1">
        <p className="font-extrabold text-xl">
          [{item.category}] {item.title}
        </p>
        {item.is_important && <img src={Star} />}
      </div>
      <p className="font-semibold">{item.saw_date} 관람 예정</p>
      <div className="flex gap-3">
        <button className="btn-small bg-gray">안 볼래요</button>
        <button className="btn-small bg-purple">예매했어요</button>
        <button className="btn-small bg-red cursor-pointer" onClick={onClickNowReservaeButton}>
          지금 예매할래요
        </button>
      </div>
    </div>
  );
};

export default ReservationListItem;
