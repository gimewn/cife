const ReviewDeleteModal = ({ category, title, closeModal }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="modal-title">
        [{category}] {title}
      </p>
      <p>이 후기를 정말 삭제하시겠어요?</p>
      <div className="flex w-full gap-3">
        <button className="btn bg-gray w-full" onClick={closeModal}>
          취소
        </button>
        <button className="btn bg-red w-full">삭제</button>
      </div>
    </div>
  );
};

export default ReviewDeleteModal;
