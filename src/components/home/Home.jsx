import { DatePickerComp, InputTag } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import {
  setErrMsg,
  setFromDate,
  setLatitude,
  setLongitude,
  setToDate,
} from "../../store/slices/appSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const latitude = useSelector((state) => state.app.latitude);
  const longitude = useSelector((state) => state.app.longitude);
  const fromDate = useSelector((state) => state.app.fromDate);
  const toDate = useSelector((state) => state.app.toDate);
  const errMsg = useSelector((state) => state.app.errMsg);

  const handleWeatherHistory = async () => {
    if (latitude.length === 0) {
      dispatch(setErrMsg("Please Enter Latitude"));
    } else if (longitude.length === 0) {
      dispatch(setErrMsg("Please Enter Longitude"));
    } else if (fromDate.length === 0) {
      dispatch(setErrMsg("Please Enter From date"));
    } else if (toDate.length === 0) {
      dispatch(setErrMsg("Please Enter to date"));
    } else {
      navigate('/grid')
      
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center bg-red-200 h-full">
      <h1 className="md:text-4xl text-2xl my-4 font-bold text-center">Find your weather history.</h1>
      <div className="flex flex-col md:flex-row md:gap-x-4 gap-y-4 md:my-4 ">
        <InputTag
          value={latitude}
          setValue={setLatitude}
          placeholder="Latitude"
        />
        <InputTag
          value={longitude}
          setValue={setLongitude}
          placeholder="Longitude"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-x-4 gap-y-4 mt-4 md:mt-0 md:my-4">
        <DatePickerComp
          selectedDate={fromDate}
          setSelectedDate={setFromDate}
          placeholderText="From Date"
        />
        <DatePickerComp
          selectedDate={toDate}
          setSelectedDate={setToDate}
          placeholderText="To Date"
        />
      </div>
      {errMsg.length > 0 && (
        <p className="text-red-400 font-semibold">Error: {errMsg}</p>
      )}
      <button
        onClick={handleWeatherHistory}
        className="mt-3 bg-red-300 font-semibold hover:bg-red-400 transition-all px-6 py-2 rounded-full"
      >
        Get History
      </button>
    </div>
  );
};

export default Home;
