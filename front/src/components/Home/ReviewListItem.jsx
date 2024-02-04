import { useNavigate } from 'react-router-dom';

import Star from '@assets/star.svg';

import CultureDeleteModal from '@components/Modal/CultureDeleteModal';

import useModal from '@hooks/useModal';
import useStopPropagation from '@hooks/useStopPropagation';

import { PAGE_URL } from '@util/path';

const ReviewListItem = ({ item }) => {
  const { BaseModal, isOpen, openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const onClickListItem = useStopPropagation(() =>
    navigate(PAGE_URL.CULTURE_DETAIL(item.culture_id)),
  );
  const onClickCultureDeleteButton = useStopPropagation(openModal);
  const onClickGoToReviewButton = useStopPropagation(() =>
    navigate(PAGE_URL.REVIEW, {
      state: {
        cultureId: item.culture_id,
      },
    }),
  );

  return (
    <>
      <div
        className="bg-glass flex flex-col items-center p-8 gap-6 cursor-pointer"
        onClick={onClickListItem}
      >
        <div className="flex justify-center items-center gap-1">
          <p className="font-extrabold text-xl">
            [{item.category}] {item.title}
          </p>
          {item.is_important && <img src={Star} />}
        </div>
        <p>{item.saw_date} 관람</p>
        <div className="flex gap-3">
          <button className="btn bg-gray" onClick={onClickCultureDeleteButton}>
            안 봤어요
          </button>
          <button className="btn bg-red" onClick={onClickGoToReviewButton}>
            후기 작성하기
          </button>
        </div>
      </div>
      <BaseModal isOpen={isOpen} closeModal={closeModal}>
        <CultureDeleteModal category={item.category} title={item.title} closeModal={closeModal} />
      </BaseModal>
    </>
  );
};

export default ReviewListItem;
