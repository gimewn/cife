import Star from '@assets/star.svg';
import CultureDeleteModal from '@components/Modal/CultureDeleteModal';

import useModal from '@hooks/useModal';

const ReviewListItem = ({ item }) => {
  const { BaseModal, isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <div className="bg-glass flex flex-col items-center p-8 gap-6">
        <div className="flex justify-center items-center gap-1">
          <p className="font-extrabold text-xl">
            [{item.category}] {item.title}
          </p>
          {item.is_important && <img src={Star} />}
        </div>
        <p>{item.saw_date} 관람</p>
        <div className="flex gap-3">
          <button className="btn bg-gray" onClick={openModal}>
            안 봤어요
          </button>
          <button className="btn bg-red">후기 작성하기</button>
        </div>
      </div>
      <BaseModal isOpen={isOpen} closeModal={closeModal}>
        <CultureDeleteModal category={item.category} title={item.title} closeModal={closeModal} />
      </BaseModal>
    </>
  );
};

export default ReviewListItem;
