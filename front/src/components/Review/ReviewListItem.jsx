import { useNavigate } from 'react-router-dom';

import Star from '@assets/star.svg';

import ReviewDeleteModal from '@components/Modal/ReviewDeleteModal';

import useModal from '@hooks/useModal';
import useStopPropagation from '@hooks/useStopPropagation';

import { PAGE_URL } from '@util/path';
import { formatDate } from '@util/funcs';

const ReviewListItem = ({ reviewId, category, title, isImportant, sawDate, refetch }) => {
  const { BaseModal, isOpen, openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const onClickReviewListItem = useStopPropagation(() =>
    navigate(PAGE_URL.REVIEW_DETAIL(reviewId), {
      state: {
        category: category,
        title: title,
      },
    }),
  );

  const onClickReviewDeleteButton = useStopPropagation(openModal);
  const onClickReviewEditButton = useStopPropagation(() =>
    navigate(PAGE_URL.REVIEW_EDIT, {
      state: {
        reviewId: reviewId,
        category: category,
        title: title,
      },
    }),
  );

  return (
    <>
      <div
        className="bg-glass flex flex-col items-center p-8 gap-6 cursor-pointer w-full"
        onClick={onClickReviewListItem}
      >
        <div className="flex items-center gap-2">
          <p className="font-extrabold text-xl">
            [{category}] {title}
          </p>
          {isImportant && <img src={Star} />}
        </div>
        <p>{formatDate(sawDate)}에 관람했어요.</p>
        <div className="flex gap-2">
          <button className="btn bg-red" onClick={onClickReviewDeleteButton}>
            삭제하기
          </button>
          <button className="btn bg-purple" onClick={onClickReviewEditButton}>
            수정하기
          </button>
        </div>
      </div>
      <BaseModal isOpen={isOpen} closeModal={closeModal}>
        <ReviewDeleteModal
          title={title}
          category={category}
          closeModal={closeModal}
          reviewId={reviewId}
          refetch={refetch}
        />
      </BaseModal>
    </>
  );
};

export default ReviewListItem;
