import { useDispatch, useSelector } from "react-redux";
import { ChartComp, Grid, SkeletonContainer } from "../index";
import { setActiveTab, setWeatherData } from "../../store/slices/appSlice";
import { useEffect } from "react";
import { format } from "date-fns";
import getWeatherDetails from "../utils/functions/getWeatherDetails";

const GridLayout = () => {
  const activeTab = useSelector((state) => state.app.activeTab);
  const dispatch = useDispatch();
  const fromDate = useSelector((state) => state.app.fromDate);
  const toDate = useSelector((state) => state.app.toDate);
  const latitude = useSelector((state) => state.app.latitude);
  const longitude = useSelector((state) => state.app.longitude);
  const weatherData = useSelector((state) => state.app.weatherData);

  const fetchWeatherdata = async () => {
    const formattedFromDate = format(fromDate, "yyyy-MM-dd");
    const formattedToDate = format(toDate, "yyyy-MM-dd");
    
    const response = await getWeatherDetails(
      latitude,
      longitude,
      formattedFromDate,
      formattedToDate
    );
    dispatch(setWeatherData(response));
  };
  useEffect(() => {
    fetchWeatherdata();
  }, []);

  {
    return weatherData.length === 0 ? (
      <SkeletonContainer />
    ) : (
      <div className="h-full bg-red-300 overflow-auto px-4">
        <div className="bg-white p-3 my-2 rounded-lg h-[8%] md:h-[10%] text-black flex gap-x-3">
          <button
            onClick={() => dispatch(setActiveTab("grid"))}
            className={`bg-red-200 hover:bg-red-300 transition-all text-gray-600 px-6 md:px-4 font-semibold rounded-lg md:py-1 ${
              activeTab === "grid" && "active-tab"
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => dispatch(setActiveTab("chart"))}
            className={`bg-red-200 hover:bg-red-300 transition-all text-gray-600 px-6 md:px-4 font-semibold rounded-lg md:py-1 ${
              activeTab === "chart" && "active-tab"
            }`}
          >
            Chart
          </button>
        </div>

        {activeTab === "grid" ? (
          <div className="bg-white py-3 px-2 rounded-lg h-[85%] overflow-auto">
            <Grid />
          </div>
        ) : (
          <div className="bg-white py-3 px-2 rounded-lg h-[85%] overflow-auto">
            <ChartComp />
          </div>
        )}
      </div>
    );
  }
};

export default GridLayout;
