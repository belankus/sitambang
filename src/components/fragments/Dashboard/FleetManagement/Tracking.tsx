import DashboardLayout from "../Main";
import {
  Boxes,
  Ellipsis,
  MapPin,
  MapPinned,
  SlidersVertical,
  TriangleAlert,
  Truck,
} from "lucide-react";
import { Fragment } from "react";

export default function TrackingContent() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex justify-between">
        <h1 className="mb-5 max-w-20 text-2xl font-bold">Vehicle Tracking</h1>
        <div className="flex gap-10">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center rounded-md bg-gray-100 p-6">
              <Boxes size={24} />
            </div>
            <div>
              <h2 className="text-nowrap text-sm font-semibold">Total Fleet</h2>
              <div className="flex items-end text-3xl font-semibold">
                <span>250</span>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center rounded-md bg-gray-100 p-6">
              <MapPinned size={24} />
            </div>
            <div>
              <h2 className="text-nowrap text-sm font-semibold">
                Active Tracking
              </h2>
              <div className="flex items-end text-3xl font-semibold">
                <span>220</span>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center rounded-md bg-gray-100 p-6">
              <Truck size={24} />
            </div>
            <div>
              <h2 className="text-nowrap text-sm font-semibold">
                Finished Job
              </h2>
              <div className="flex items-end text-3xl font-semibold">
                <span>415</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-2 flex w-full justify-between rounded-full bg-gray-100 p-1.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-full bg-gray-50 p-2.5">
            <MapPin size={20} />
          </div>
          <div className="text-xs">
            <h3 className="font-semibold">Tracking Report</h3>
            <p>Today - October 9, 2024</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <TriangleAlert size={20} className="text-red-500" />
            <span className="text-xs">You got 5 new alerts</span>
          </div>

          <div className="flex gap-1">
            <button
              type="button"
              className="flex items-center justify-center rounded-full border border-gray-300 p-2.5 hover:bg-gray-200"
            >
              <SlidersVertical size={20} />
            </button>
            <button
              type="button"
              className="text flex items-center rounded-full border border-gray-300 px-5 py-2 text-xs font-semibold hover:bg-gray-200"
            >
              Download Report
            </button>
            <button
              type="button"
              className="flex items-center rounded-full border border-orange-400 bg-orange-400 px-5 py-2 text-xs font-semibold text-white hover:bg-orange-500"
            >
              View Report
            </button>
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="flex w-full gap-5">
        <AnalyticCard />
        <HistoryCard />
        <MapsCard />
      </div>
    </DashboardLayout>
  );
}

// Helper function to generate random numbers for simulating the heatmap effect for 14 weeks
const generateRandomData = (weeks: number, daysPerWeek: number) => {
  return Array.from({ length: daysPerWeek }, () =>
    Array.from({ length: weeks }, () => Math.floor(Math.random() * 100)),
  );
};

const getColorClass = (value: number) => {
  if (value > 80) return "bg-green-600"; // Darkest shade
  if (value > 60) return "bg-green-500";
  if (value > 40) return "bg-green-400";
  if (value > 20) return "bg-green-300";
  return "bg-green-200"; // Lightest shade
};

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weeks = 14; // 14 weeks (14 columns)

const AnalyticCard = () => {
  const data = generateRandomData(weeks, daysOfWeek.length); // Generating random data for 14 weeks (7 days per week)

  return (
    <div className="mt-5 w-full max-w-xl rounded-lg bg-gray-900 p-6 text-white shadow-lg">
      {/* Top section with title and filters */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Analytic view</h2>
        <div className="flex space-x-2">
          {["Day", "Week", "Month", "Quarter", "Year", "All"].map((filter) => (
            <button
              key={filter}
              className={`rounded px-3 py-1 text-sm ${
                filter === "Week"
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Middle section with min, avg, max */}
      <div className="mt-6 flex items-center justify-between text-center">
        <div>
          <p className="text-lg font-semibold">97</p>
          <p className="text-sm text-gray-400">Minimal number</p>
        </div>
        <div>
          <p className="text-lg font-semibold">120</p>
          <p className="text-sm text-gray-400">Average number</p>
        </div>
        <div>
          <p className="text-lg font-semibold">259</p>
          <p className="text-sm text-gray-400">Maximum number</p>
        </div>
      </div>

      {/* Weekly data grid (Days on Y-axis, Weeks on X-axis) */}
      <div className="mt-6 overflow-x-auto">
        {/* Render the data grid */}
        <div className="mx-auto mt-2 grid w-fit grid-cols-[repeat(15,_1fr)] gap-1">
          {/* Days of the week (Y-axis) */}
          {daysOfWeek.map((day, i) => (
            <Fragment key={day}>
              {/* Day label */}
              <div className="text-right text-sm text-gray-400">{day}</div>
              {/* Data grid for each day (14 weeks per day) */}

              {data[i].map((value, j) => (
                <div
                  key={j}
                  className={`h-6 w-6 rounded-md ${getColorClass(
                    value,
                  )}`} /* Color classes are based on value */
                />
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

const HistoryCard = () => {
  return (
    <div className="mt-5 w-full max-w-xl rounded-lg bg-gray-900 p-6 text-white shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Tracking History</h2>
        <Ellipsis size={20} />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Tracking ID</p>
          <p className="font-semibold">#18761-10-8735yu</p>
        </div>
        <div>
          <span className="inline-block rounded-full bg-yellow-600 px-2.5 py-1 text-xs text-white">
            In transit
          </span>
        </div>
      </div>
      <div className="mt-5 w-full space-y-2">
        <div className="flex gap-2">
          {/* Dots and Line */}
          <div className="relative flex">
            <div className="relative z-10 size-2 translate-y-1.5 animate-pulse rounded-full bg-yellow-500" />
            <div className="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1.5 border-l border-dashed border-gray-400" />
          </div>
          <div className="flex w-full justify-between">
            <div>
              <p className="text-sm text-gray-400">Current Location</p>
              <p className="text-nowrap text-sm font-semibold">
                -123.456, 456.789
              </p>
            </div>
            <div>
              <p className="text-right text-sm text-gray-400">
                10th Oct, 2024, 15:03 WIB
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {/* Dots and Line */}
          <div className="relative flex">
            <div className="relative z-10 size-2 translate-y-1.5 rounded-full bg-green-600" />
            <div className="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1.5 border-l border-dashed border-gray-400" />
          </div>
          <div className="flex w-full justify-between">
            <div>
              <p className="text-sm text-gray-400">Arrival Waypoint</p>
              <p className="text-nowrap text-sm font-semibold">
                Stockpile, Indonesia
              </p>
            </div>
            <div>
              <p className="text-right text-sm text-gray-400">
                10th Oct, 2024, 10:00 WIB
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {/* Dots and Line */}
          <div className="relative flex">
            <div className="relative z-10 size-2 translate-y-1.5 rounded-full bg-green-600" />
          </div>
          <div className="flex w-full justify-between">
            <div>
              <p className="text-sm text-gray-400">Departure Waypoint</p>
              <p className="text-nowrap text-sm font-semibold">
                Runoff Mine, Indonesia
              </p>
            </div>
            <div>
              <p className="text-right text-sm text-gray-400">
                10th Oct, 2024, 08:43 WIB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MapsCard = () => {
  return (
    <div className="mt-5 w-full max-w-xl rounded-lg bg-gray-900 p-6 text-white shadow-lg">
      Testing
    </div>
  );
};
