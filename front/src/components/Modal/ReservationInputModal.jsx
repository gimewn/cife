import { useState } from 'react';

import Calendar from '@assets/calendar.svg';

import DatePicker from '@components/DatePicker';

const ReservationInputModal = ({ category, title, reservated_date, closeModal }) => {
  const [startDate, setStartDate] = useState(reservated_date);
  const [isDateOpen, setIsDateOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="modal-title">
        [{category}] {title}
      </p>
      <p>예매하신 날짜를 입력해주세요.</p>
      <div
        className="flex p-3 border-2 cursor-pointer border-purple rounded-2xl"
        onClick={() => setIsDateOpen(!isDateOpen)}
      >
        <DatePicker
          selected={startDate}
          isOpen={isDateOpen}
          onChangeHandler={(date) => setStartDate(date)}
        />
        <img src={Calendar} />
      </div>
      <div className="flex gap-3 w-full">
        <button className="btn bg-gray w-full" onClick={closeModal}>
          취소
        </button>
        <button className="btn bg-red w-full">확인</button>
      </div>
    </div>
  );
};

export default ReservationInputModal;
