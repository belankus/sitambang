"use client";

import { Doughnut, Line } from "react-chartjs-2";
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
} from "chart.js";

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

export default function Page() {
  return (
    <>
      <div className="flex h-[50px] w-full bg-background-2">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <ul className="flex items-center gap-2 text-white">
            <li className="relative block rounded-md">
              <span>Dashboard</span>
            </li>
          </ul>
        </div>
      </div>
      <section className="w-full bg-background-2 pb-5">
        <div className="mx-10 min-h-screen max-w-full rounded-xl bg-white p-10 shadow-background-2 [box-shadow:_rgba(0,_0,_0,_0.5)_0px_5px_10px_0px_inset]">
          <h1 className="font-bold">Dashboard</h1>

          {/* Row 1 */}
          <div className="w-fullm flex gap-5">
            {/* Widget */}
            <div className="w-3/4 rounded-md border bg-white p-5 shadow-md">
              <h2>Title Line Chart 1</h2>
              <div className="">
                <Line
                  data={dataLine}
                  options={{
                    responsive: true,
                  }}
                />
              </div>
            </div>
            {/* Widget */}
            <div className="rounded-md border bg-white p-5 shadow-md">
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
          </div>
        </div>
      </section>
    </>
  );
}
