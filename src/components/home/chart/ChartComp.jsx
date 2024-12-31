import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const ChartComp = () => {
  const data = useSelector((state) => state.app.weatherData);

  // Extracting data for the chart
  const labels = data.map((entry) => entry.date);
  const apparentTemperatureMax = data.map(
    (entry) => entry.apparent_temperature_max ?? null
  );
  const apparentTemperatureMean = data.map(
    (entry) => entry.apparent_temperature_mean ?? null
  );
  const temperature2mMax = data.map(
    (entry) => entry.temperature_2m_max ?? null
  );
  const temperature2mMin = data.map(
    (entry) => entry.temperature_2m_min ?? null
  );
  const temperature2mMean = data.map(
    (entry) => entry.temperature_2m_mean ?? null
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: "Apparent Temperature Max",
        data: apparentTemperatureMax,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Apparent Temperature Mean",
        data: apparentTemperatureMean,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Temperature 2m Max",
        data: temperature2mMax,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Temperature 2m Min",
        data: temperature2mMin,
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Temperature 2m Mean",
        data: temperature2mMean,
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Temperature Data Over Time",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Temperature (°C)",
        },
        beginAtZero: true,
      },
    },
  };
  return (
    <div style={{ width: "100%", maxWidth: "1100px", margin: "0 auto", padding: "1rem" }}>
    <div className="h-[550px] sm:h-[500px] md:h-[430px]" style={{ position: "relative", width: "100%" }}>
      <Line data={chartData} options={options} />
    </div>
  </div>
  );
};

export default ChartComp;
