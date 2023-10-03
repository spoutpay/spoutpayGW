"use client";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const salesData = [
  { month: "Jan 19", sales: "10" },
  { month: "Feb 19", sales: "60" },
  { month: "March 19", sales: "30" },
  { month: "April 19", sales: "40" },
  { month: "May 19", sales: "80" },
  { month: "June 19", sales: "60" },
  { month: "Jan 19", sales: "120" },
  { month: "Feb 19", sales: "80" },
  { month: "March 19", sales: "150" },
  { month: "April 19", sales: "60" },
  { month: "May 19", sales: "110" },
  { month: "June 19", sales: "20" },
];

function LineChart() {
  const data = {
    labels: salesData.map((data) => data.month),
    datasets: [
      {
        label: "Transaction Performance",
        data: salesData.map((data) => data.sales),
        borderColor: "#360D90",
        borderWidth: 3,
        pointBorderColor: "#360D90",
        pointBorderWidth: 3,
        tension: 0.5,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#7B53CC76");
          gradient.addColorStop(1, "#7B53CC76");
          return gradient;
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 17,
            weight: "bold",
          },
        },
        title: {
          display: true,
          padding: {
            bottom: 10,
          },
          font: {
            size: 30,
            style: "italic",
            family: "Arial",
          },
        },
        min: 50,
      },
      x: {
        ticks: {
          font: {
            size: 17,
            weight: "bold",
          },
        },
        title: {
          display: true,
          padding: {
            top: 10,
          },
          font: {
            size: 30,
            style: "italic",
            family: "Arial",
          },
        },
      },
    },
  };

  return (
    <div className=" bg-white rounded-md m-5 ">
      <div
        className="w-full flex justify-center"
        // style={{
        //   width: "100%",
        //   height: "500px",
        //   padding: "20px",
        //   cursor: "pointer",
        // }}
      >
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}

export default LineChart;
