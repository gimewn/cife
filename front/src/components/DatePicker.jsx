import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ selected, onChangeHandler, isOpen }) => {
  return (
    <ReactDatePicker
      className="outline-none cursor-pointer"
      onChange={onChangeHandler}
      selected={selected}
      dateFormat="yyyy.MM.dd"
      open={isOpen}
    />
  );
};

export default DatePicker;
