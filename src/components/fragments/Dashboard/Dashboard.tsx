"use client";

import { Doughnut, Line, Radar } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Colors,
  BarController,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  BarElement,
  Legend,
  Tooltip,
  PointElement,
  RadialLinearScale,
} from "chart.js";
import { Ellipsis, TrendingDown, TrendingUp } from "lucide-react";
import DashboardLayout from "./Main";

Chart.register(
  ArcElement,
  Colors,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  Legend,
  PointElement,
  RadialLinearScale,
  Tooltip,
);

const dataDonuts = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const dataLine = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

const dataRadar = {
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "My Second Dataset",
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};

export default function DashboardContent() {
  return (
    <>
      <DashboardLayout>
        <h1 className="mb-5 text-2xl font-bold">Dashboard</h1>

        {/* Row 1 */}
        <div className="mb-5 flex w-full justify-between gap-5">
          {/* Widget */}
          <div className="w-1/3 rounded-md border bg-white p-5 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-semibold">Total Production</h2>
              <Ellipsis size={20} />
            </div>
            <div>
              <span className="relative -top-10 text-2xl font-bold"></span>
              <span className="text-5xl font-bold">0</span>
              <span className="text-2xl font-bold">MT</span>
            </div>
            <div className="mt-5">
              <TrendingUp size={20} className="inline text-green-700" />{" "}
              <span className="text-xs font-bold text-green-700">+0.5%</span>
              <span className="text-xs font-bold"> from last month</span>
            </div>
          </div>
          {/* Widget */}
          <div className="flex w-1/3 flex-col justify-between rounded-md border bg-white p-5 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-semibold">Total Shipment</h2>
              <Ellipsis size={20} />
            </div>
            <div>
              <span className="text-5xl font-bold">0</span>
              <span className="text-xl font-bold">MT</span>
            </div>
            <div className="mt-5">
              <TrendingDown size={20} className="inline text-red-700" />{" "}
              <span className="text-xs font-bold text-red-700">-0.5%</span>
              <span className="text-xs font-bold"> from last month</span>
            </div>
          </div>
          {/* Widget */}
          <div className="flex w-1/3 flex-col justify-between rounded-md border bg-white p-5 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-semibold">Working Hour</h2>
              <Ellipsis size={20} />
            </div>
            <div>
              <span className="text-5xl font-bold">0</span>
              <span className="text-xl font-bold">Hour</span>
            </div>
            <div className="mt-5">
              <TrendingUp size={20} className="inline text-green-700" />{" "}
              <span className="text-xs font-bold text-green-700">+5%</span>
              <span className="text-xs font-bold"> from last year</span>
            </div>
          </div>
          {/* Widget */}
          <div className="flex w-1/3 flex-col justify-between rounded-md border bg-white p-5 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-semibold">Total Vehicle</h2>
              <Ellipsis size={20} />
            </div>
            <div>
              <span className="text-5xl font-bold">0</span>
              <span className="text-xl font-bold">unit</span>
            </div>
            <div className="mt-5">
              <TrendingUp size={20} className="inline text-green-700" />{" "}
              <span className="text-xs font-bold text-green-700">+7%</span>
              <span className="text-xs font-bold"> from last year</span>
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="flex w-full justify-between gap-5">
          {/* Widget */}
          <div className="w-1/2 rounded-md border bg-white p-5 shadow-md">
            <h2>Production</h2>
            <div className="w-full">
              <Line
                data={dataLine}
                options={{
                  responsive: true,
                }}
              />
            </div>
          </div>
          {/* Widget */}
          <div className="w-1/4 rounded-md border bg-white p-5 shadow-md">
            <h2 className="text-xl font-semibold">Title Donuts 1</h2>
            <div className="size-48">
              <Doughnut
                data={dataDonuts}
                options={{
                  responsive: true,
                }}
              />
            </div>
          </div>
          {/* Widget */}
          <div className="w-1/4 rounded-md border bg-white p-5 shadow-md">
            <h2 className="text-xl font-semibold">Title Donuts 1</h2>
            <div className="size-60">
              <Radar
                data={dataRadar}
                options={{
                  responsive: true,
                }}
              />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
