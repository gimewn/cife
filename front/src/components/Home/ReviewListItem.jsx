import { useNavigate } from 'react-router-dom';

import Star from '@assets/star.svg';

import CultureDeleteModal from '@components/Modal/CultureDeleteModal';

import useModal from '@hooks/useModal';
import useStopPropagation from '@hooks/useStopPropagation';

import { PAGE_URL } from '@util/path';
import { formatDate } from '@util/funcs';

const ReviewListItem = ({ item, refetch }) => {
  const { BaseModal, isOpen, openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const onClickListItem = useStopPropagation(() =>
    navigate(PAGE_URL.CULTURE_DETAIL(item.cultureId)),
  );
  const onClickCultureDeleteButton = useStopPropagation(openModal);
  const onClickGoToReviewButton = useStopPropagation(() =>
    navigate(PAGE_URL.REVIEW_EDIT, {
      state: {
        category: item.category,
        title: item.title,
        cultureId: item.cultureId,
      },
    }),
  );

  return (
    <>
      <div
        className="bg-glass flex flex-col items-center p-8 gap-6 cursor-pointer"
        onClick={onClickListItem}
      >
        <div className="flex justify-center items-center gap-1 w-full">
          <p className="font-extrabold text-xl whitespace-nowrap text-ellipsis overflow-hidden">
            [{item.category}] {item.title}
          </p>
          {item.isImportant && <img src={Star} />}
        </div>
        <p>{formatDate(item.sawDate)} 관람</p>
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
        <CultureDeleteModal
          category={item.category}
          title={item.title}
          closeModal={closeModal}
          cultureId={item.cultureId}
          refetch={refetch}
        />
      </BaseModal>
    </>
  );
};

export default ReviewListItem;
