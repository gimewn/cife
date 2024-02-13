import { useNavigate } from 'react-router-dom';

import Star from '@assets/star.svg';

import CultureDeleteModal from '@components/Modal/CultureDeleteModal';

import useModal from '@hooks/useModal';
import useStopPropagation from '@hooks/useStopPropagation';

import { PAGE_URL } from '@util/path';
import { formatDate } from '@util/funcs';

const CultureListItem = ({ cultureId, title, category, isImportant, sawDate, refetch }) => {
  const navigate = useNavigate();

  const { isOpen, openModal, closeModal, BaseModal } = useModal();

  const onClickListItem = useStopPropagation(() => navigate(PAGE_URL.CULTURE_DETAIL(cultureId)));
  const onClickDeleteCultureButton = useStopPropagation(openModal);
  const onClickEditCultureButton = useStopPropagation(() =>
    navigate(PAGE_URL.CULTURE_EDIT, {
      state: {
        cultureId: cultureId,
      },
    }),
  );

  return (
    <>
      <div
        className="bg-glass w-full h-full cursor-pointer first-letter:rounded-xl flex justify-center items-center p-8 flex-col gap-5"
        onClick={onClickListItem}
      >
        <div className="flex gap-1 items-center">
          <p className="text-lg font-extrabold">
            [{category}] {title}
          </p>
          {isImportant && <img src={Star} />}
        </div>
        <p className="text-sm">{formatDate(sawDate)} 관람 예정</p>
        <div className="flex gap-2">
          <button className="btn bg-red text-sm" onClick={onClickDeleteCultureButton}>
            삭제하기
          </button>
          <button className="btn bg-purple text-sm" onClick={onClickEditCultureButton}>
            수정하기
          </button>
        </div>
      </div>
      <BaseModal isOpen={isOpen} closeModal={closeModal}>
        <CultureDeleteModal
          closeModal={closeModal}
          category={category}
          title={title}
          cultureId={cultureId}
          refetch={refetch}
        />
      </BaseModal>
    </>
  );
};

export default CultureListItem;
