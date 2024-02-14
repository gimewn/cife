import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Star from '@assets/star.svg';

import ReservationInitialModal from '@components/Modal/ReservationInitialModal';
import ReservationInputModal from '@components/Modal/ReservationInputModal';

import useModal from '@hooks/useModal';
import useStopPropagation from '@hooks/useStopPropagation';

import { MODAL_OPENER } from '@util/variable';
import { PAGE_URL } from '@util/path';
import { formatDate } from '@util/funcs';

const SeeListItem = ({ item, refetch }) => {
  const { BaseModal, isOpen, openModal, closeModal } = useModal();
  const [modalOpener, setModalOpener] = useState();

  const navigate = useNavigate();

  const onClickListItem = useStopPropagation(() =>
    navigate(PAGE_URL.CULTURE_DETAIL(item.cultureId)),
  );

  const onClickEditButton = useStopPropagation(() => {
    setModalOpener(MODAL_OPENER.EDIT);
    openModal();
  });
  const onClickInitialButton = useStopPropagation(() => {
    setModalOpener(MODAL_OPENER.INITIAL);
    openModal();
  });

  return (
    <>
      <div
        className="bg-glass flex flex-col items-center p-8 gap-6 cursor-pointer"
        onClick={onClickListItem}
      >
        <p className="d-day-title">D-{item.dday}</p>
        <div className="flex justify-center items-center gap-1 w-full">
          <p className="font-extrabold text-xl whitespace-nowrap text-ellipsis overflow-hidden">
            [{item.category}] {item.title}
          </p>
          {item.isImportant && <img src={Star} />}
        </div>
        <p>{formatDate(item.reservedDate)} 예매</p>
        <div className="flex gap-3">
          <button className="btn bg-gray" onClick={onClickInitialButton}>
            예매 취소했어요
          </button>
          <button className="btn bg-purple" onClick={onClickEditButton}>
            예매일 수정할래요
          </button>
        </div>
      </div>
      <BaseModal isOpen={isOpen} closeModal={closeModal}>
        {modalOpener === MODAL_OPENER.INITIAL && (
          <ReservationInitialModal
            category={item.category}
            title={item.title}
            closeModal={closeModal}
            cultureId={item.cultureId}
            refetch={refetch}
          />
        )}
        {modalOpener === MODAL_OPENER.EDIT && (
          <ReservationInputModal
            category={item.category}
            title={item.title}
            closeModal={closeModal}
            reserved_date={item.reservedDate}
            cultureId={item.cultureId}
            refetch={refetch}
          />
        )}
      </BaseModal>
    </>
  );
};

export default SeeListItem;
