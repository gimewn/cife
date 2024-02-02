import { MODALOPENER } from '@/util/variable';
import Star from '@assets/star.svg';
import ReservationLinkModal from '@components/Modal/RevervationLinkModal';
import useModal from '@hooks/useModal';
import { useState } from 'react';
import CultureDeleteModal from '../Modal/CultureDeleteModal';
import ReservationInputModal from '../Modal/ReservationInputModal';

const ReservationListItem = ({ item }) => {
  const { BaseModal, isOpen, openModal, closeModal } = useModal();
  const [modalOpener, setModalOpener] = useState();

  const onClickReservateLinkButton = () => {
    if (item.link) {
      window.open(item.link);
    } else {
      setModalOpener(MODALOPENER.LINK);
      openModal();
    }
  };

  const onClickDeleteCultureButton = () => {
    setModalOpener(MODALOPENER.DELETE);
    openModal();
  };

  const onClickInputDateButton = () => {
    setModalOpener(MODALOPENER.INPUT);
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
        <p className="font-semibold">{item.saw_date} 관람 예정</p>
        <div className="flex gap-3">
          <button className="btn bg-gray" onClick={onClickDeleteCultureButton}>
            안 볼래요
          </button>
          <button className="btn bg-purple" onClick={onClickInputDateButton}>
            예매했어요
          </button>
          <button className="btn bg-red cursor-pointer" onClick={onClickReservateLinkButton}>
            지금 예매할래요
          </button>
        </div>
      </div>
      <BaseModal isOpen={isOpen} closeModal={closeModal}>
        {modalOpener === MODALOPENER.DELETE && (
          <CultureDeleteModal category={item.category} title={item.title} closeModal={closeModal} />
        )}
        {modalOpener === MODALOPENER.INPUT && (
          <ReservationInputModal
            title={item.title}
            category={item.category}
            closeModal={closeModal}
          />
        )}
        {modalOpener === MODALOPENER.LINK && <ReservationLinkModal closdModal={closeModal} />}
      </BaseModal>
    </>
  );
};

export default ReservationListItem;
