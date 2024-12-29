/* eslint-disable react/prop-types */
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { setErrMsg } from "../../store/slices/appSlice";

const DatePickerComp = ({ selectedDate, setSelectedDate, placeholderText }) => {
  
  const dispatch = useDispatch();

  const handleSelect = (date) => {
    dispatch(setErrMsg(''))
    dispatch(setSelectedDate(date.toISOString()))
  }

  return (
    <div className="bg-white py-2 px-4 rounded-md">
      <DatePicker
        className="outline-none border-none text-black"
        selected={selectedDate}
        onSelect={(date) => handleSelect(date)}
        placeholderText={placeholderText}
        maxDate={new Date()}
      />
    </div>
  );
};

export default DatePickerComp;
