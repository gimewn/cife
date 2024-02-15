import { deleteReservedDate } from '@api/Culture';

const ReservationInitialModal = ({ cultureId, category, title, closeModal, refetch }) => {
  const onClickConfirmBUtton = async (e) => {
    const result = await deleteReservedDate(cultureId);
    if (result == 'fail') {
      alert('다시 시도해주세요.');
    } else {
      closeModal(e.target.closest('.modalBase'));
      refetch();
    }
  };

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
        <button className="btn bg-red w-full" onClick={onClickConfirmBUtton}>
          확인
        </button>
      </div>
    </div>
  );
};

export default ReservationInitialModal;
