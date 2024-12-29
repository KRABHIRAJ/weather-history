import { useDispatch, useSelector } from "react-redux";
import { ChartComp, Grid } from "../index";
import { setActiveTab } from "../../store/slices/appSlice";

const GridLayout = () => {
  const activeTab = useSelector((state) => state.app.activeTab);
  const dispatch = useDispatch();
  return (
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
};

export default GridLayout;
