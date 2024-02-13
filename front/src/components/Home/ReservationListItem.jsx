import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Star from '@assets/star.svg';

import ReservationLinkModal from '@components/Modal/ReservationLinkModal';
import CultureDeleteModal from '@components/Modal/CultureDeleteModal';
import ReservationInputModal from '@components/Modal/ReservationInputModal';

import useModal from '@hooks/useModal';
import useStopPropagation from '@hooks/useStopPropagation';

import { MODAL_OPENER } from '@util/variable';
import { PAGE_URL } from '@util/path';
import { formatDate } from '@util/funcs';

const ReservationListItem = ({ item }) => {
  const { BaseModal, isOpen, openModal, closeModal } = useModal();
  const [modalOpener, setModalOpener] = useState();
  const navigate = useNavigate();

  const onClickListItem = useStopPropagation(() =>
    navigate(PAGE_URL.CULTURE_DETAIL(item.cultureId)),
  );

  const onClickReserveLinkButton = useStopPropagation(() => {
    if (item.link) {
      window.open(item.link);
    } else {
      setModalOpener(MODAL_OPENER.LINK);
      openModal();
    }
  });

  const onClickDeleteCultureButton = useStopPropagation(() => {
    setModalOpener(MODAL_OPENER.DELETE);
    openModal();
  });

  const onClickInputDateButton = useStopPropagation(() => {
    setModalOpener(MODAL_OPENER.INPUT);
    openModal();
  });

  return (
    <>
      <div
        className="bg-glass flex flex-col items-center p-8 gap-6 cursor-pointer"
        onClick={onClickListItem}
      >
        <p className="d-day-title">D-{item.dday}</p>
        <div className="flex justify-center items-center gap-1">
          <p className="font-extrabold text-xl">
            [{item.category}] {item.title}
          </p>
          {item.is_important && <img src={Star} />}
        </div>
        <p className="font-semibold">{formatDate(item.sawDate)} 관람 예정</p>
        <div className="flex gap-3">
          <button className="btn bg-gray" onClick={onClickDeleteCultureButton}>
            안 볼래요
          </button>
          <button className="btn bg-purple" onClick={onClickInputDateButton}>
            예매했어요
          </button>
          <button className="btn bg-red cursor-pointer" onClick={onClickReserveLinkButton}>
            지금 예매할래요
          </button>
        </div>
      </div>
      <BaseModal isOpen={isOpen} closeModal={closeModal}>
        {modalOpener === MODAL_OPENER.DELETE && (
          <CultureDeleteModal
            category={item.category}
            title={item.title}
            closeModal={closeModal}
            cultureId={item.cultureId}
          />
        )}
        {modalOpener === MODAL_OPENER.INPUT && (
          <ReservationInputModal
            title={item.title}
            category={item.category}
            closeModal={closeModal}
            reserved_date={new Date()}
            cultureId={item.cultureId}
          />
        )}
        {modalOpener === MODAL_OPENER.LINK && (
          <ReservationLinkModal closeModal={closeModal} cultureId={item.cultureId} />
        )}
      </BaseModal>
    </>
  );
};

export default ReservationListItem;
