import { useDispatch } from "react-redux";
import { setErrMsg } from "../../store/slices/appSlice";

/* eslint-disable react/prop-types */
const InputTag = ({ value, setValue, placeholder }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setErrMsg(''))
    dispatch(setValue(e.target.value))
  }
  return (
    <div className="bg-white py-2 px-4 rounded-md">
      <input
        className="border-none outline-none text-black"
        type="text"
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputTag;
