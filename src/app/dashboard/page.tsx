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
import Link from "next/link";
import { Ellipsis, TrendingUp } from "lucide-react";

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

export default function Page() {
  return (
    <>
      <div className="flex w-full bg-background-2 pt-2">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <ul className="flex h-full items-center gap-2 text-white">
            <Link href={"/dashboard"}>
              <li className="relative block rounded-t-md bg-white px-4 py-2 text-text-primary">
                <span className="text-sm font-bold">Dashboard</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <section className="w-full bg-background-2 pb-5">
        <div className="mx-10 min-h-screen max-w-full rounded-xl bg-white p-10 shadow-background-2 [box-shadow:_rgba(0,_0,_0,_0.5)_0px_5px_10px_0px_inset]">
          <h1 className="mb-5 text-2xl font-bold">Dashboard</h1>

          {/* Row 1 */}
          <div className="mb-5 flex w-full justify-between gap-5">
            {/* Widget */}
            <div className="w-1/3 rounded-md border bg-white p-5 shadow-md">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-semibold">Total Asset</h2>
                <Ellipsis size={20} />
              </div>
              <div>
                <span className="relative -top-10 text-2xl font-bold">$</span>
                <span className="text-7xl font-bold">2.51</span>
                <span className="text-5xl font-bold">B</span>
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
                <h2 className="text-xs font-semibold">Total Running Vehicle</h2>
                <Ellipsis size={20} />
              </div>
              <div>
                <span className="text-5xl font-bold">7,500</span>
                <span className="text-xl font-bold">units</span>
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
                <h2 className="text-xs font-semibold">Production YTD</h2>
                <Ellipsis size={20} />
              </div>
              <div>
                <span className="text-5xl font-bold">4.1</span>
                <span className="text-xl font-bold">Million Tonne</span>
              </div>
              <div className="mt-5">
                <TrendingUp size={20} className="inline text-green-700" />{" "}
                <span className="text-xs font-bold text-green-700">+7%</span>
                <span className="text-xs font-bold"> from last year</span>
              </div>
            </div>
            {/* Widget */}
            <div className="flex w-1/3 flex-col justify-between rounded-md border bg-white p-5 shadow-md">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-semibold">Production 1 Year</h2>
                <Ellipsis size={20} />
              </div>
              <div>
                <span className="text-5xl font-bold">7.3</span>
                <span className="text-xl font-bold">Million Tonne</span>
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
              <h2>Title Line Chart 1</h2>
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
        </div>
      </section>
    </>
  );
}
