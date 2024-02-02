import { useEffect, useState } from 'react';
import DatePicker from '@components/DatePicker';
import Calendar from '@assets/calendar.svg';

const ReservationInputModal = ({ category, title, saw_date, closeModal }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isDateOpen, setIsDateOpen] = useState(false);

  useEffect(() => console.log(isDateOpen), [isDateOpen]);

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
