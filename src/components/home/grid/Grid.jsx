import { useSelector } from "react-redux";

const Grid = () => {
  const weatherData = useSelector((state) => state.app.weatherData);
  const headers = Object.keys(weatherData[0]);
  return (
    <div className="bg-red-200 h-full mx-auto overflow-x-auto">
      <table className="weather-table w-full rounded-lg border-collapse text-left">
        <thead className="sticky top-0">
          <tr className="hover:bg-red-300">
            {headers.map((header) => (
              <th
                className={`py-[10px] uppercase px-4 border border-gray-400 bg-red-400 text-gray-700 font-bold ${
                  header === "date" && "min-w-[150px]"
                }`}
                key={header}
              >
                {header.replace(/_/g, " ")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weatherData.map((row, rowIndex) => (
            <tr
              className="hover:bg-red-300 hover:cursor-pointer"
              key={rowIndex}
            >
              {headers.map((header) => (
                <td
                  className="py-[10px] px-4 border text-gray-700 border-gray-400"
                  key={`${rowIndex}-${header}`}
                >
                  {row[header] !== null ? row[header] : "N/A"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
