import { useState } from 'react';

import Star from '@assets/star.svg';

import ReservationInitailModal from '@components/Modal/ReservationInitialModal';
import ReservationInputModal from '@components/Modal/ReservationInputModal';

import useModal from '@hooks/useModal';

import { MODALOPENER } from '@util/variable';

const SeeListItem = ({ item }) => {
  const { BaseModal, isOpen, openModal, closeModal } = useModal();
  const [modalOpener, setModalOpener] = useState();

  const onClickEditButton = () => {
    setModalOpener(MODALOPENER.EDIT);
    openModal();
  };
  const onClickInitialButton = () => {
    setModalOpener(MODALOPENER.INITIAL);
    openModal();
  };

  return (
    <>
      <div className="bg-glass flex flex-col items-center p-8 gap-6">
        <p className="d-day-title">D-{item.d_day}</p>
        <div className="flex justify-center items-center gap-1">
          <p className="font-extrabold text-xl">
            [{item.category}] {item.title}
          </p>
          {item.is_important && <img src={Star} />}
        </div>
        <p>{item.reservated_date} 예매</p>
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
        {modalOpener === MODALOPENER.INITIAL && (
          <ReservationInitailModal
            category={item.category}
            title={item.title}
            closeModal={closeModal}
          />
        )}
        {modalOpener === MODALOPENER.EDIT && (
          <ReservationInputModal
            category={item.category}
            title={item.title}
            closeModal={closeModal}
            reservated_date={item.reservated_date}
          />
        )}
      </BaseModal>
    </>
  );
};

export default SeeListItem;
