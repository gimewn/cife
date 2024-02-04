const ReservationInitialModal = ({ category, title, closeModal }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="modal-title">
        [{category}] {title}
      </p>
      <p className="">나중에 다시 예매하시겠어요?</p>
      <div className="flex w-full gap-3">
        <button className="btn bg-gray w-full" onClick={closeModal}>
          취소
        </button>
        <button className="btn bg-red w-full">확인</button>
      </div>
    </div>
  );
};

export default ReservationInitialModal;
