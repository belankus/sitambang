import { Ellipsis, SlidersHorizontal, X } from "lucide-react";
import DashboardLayout from "../Main";

export default function VehicleContent() {
  return (
    <DashboardLayout>
      <h1 className="mb-5 text-2xl font-bold">Vehicle</h1>
      <FilterVehicle />
      <div className="mt-5 flex gap-5">
        <ScheduledList />
      </div>
    </DashboardLayout>
  );
}

const FilterVehicle = () => {
  return (
    <div className="flex w-full gap-5">
      <div className="flex w-full items-center gap-4 rounded-md bg-gray-900 px-6 py-3 text-white">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="max-w-[300px] rounded-md border border-gray-700 bg-gray-800 p-2 text-white"
          />
        </div>

        <button
          type="button"
          className="rounded-md border border-gray-700 bg-gray-800 p-2 hover:bg-gray-700"
        >
          <SlidersHorizontal size={20} />
        </button>

        <div className="flex flex-col justify-between gap-0.5">
          <span className="text-xs">Filters :</span>
          <div className="flex items-center gap-1">
            <div className="flex items-center justify-between gap-1 rounded-sm bg-green-400 px-1.5 py-0.5 text-green-800">
              <span className="text-xs">Search: caterpillar</span>
              <button type="button">
                <X size={12} />
              </button>
            </div>
            <div className="flex items-center justify-between gap-1 rounded-sm bg-red-400 px-1.5 py-0.5 text-red-800">
              <span className="text-xs">Category: Truck</span>
              <button type="button">
                <X size={12} />
              </button>
            </div>
            <div className="flex items-center justify-between gap-1 rounded-sm bg-yellow-400 px-1.5 py-0.5 text-yellow-800">
              <span className="text-xs">Status: Queued</span>
              <button type="button">
                <X size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScheduledList = () => {
  return (
    <div className="w-full rounded-md bg-gray-900 px-6 py-3 text-white">
      <h2 className="text-lg font-semibold">Scheduled</h2>
      <table className="w-full">
        <thead className="*:text-xs">
          <tr className="border-b border-gray-700 font-bold *:py-1.5">
            <td className="min-w-[40px]">No.</td>
            <td className="min-w-[200px]">Vehicle</td>
            <td className="min-w-[150px]">Due Date</td>
            <td className="min-w-[80px]">Status</td>
            <td></td>
          </tr>
        </thead>
        <tbody className="text-sm [&>*:nth-child(even)]:bg-gray-800">
          <tr>
            <td className="p-2">1.</td>
            <td>Dump Truck (HD-2331)</td>
            <td className="text-yellow-600">25-10-2024 08:00 WIB</td>
            <td>Queued</td>
            <td>
              <Ellipsis size={20} className="text-gray-400" />
            </td>
          </tr>
          <tr>
            <td className="p-2">2.</td>
            <td>Dump Truck (HD-2342)</td>
            <td className="text-green-600">27-10-2024 14:00 WIB</td>
            <td>Queued</td>
            <td>
              <Ellipsis size={20} className="text-gray-400" />
            </td>
          </tr>
          <tr>
            <td className="p-2">3.</td>
            <td>Excavator (CAT-25534)</td>
            <td className="text-green-600">29-10-2024 14:00 WIB</td>
            <td>Open</td>
            <td>
              <Ellipsis size={20} className="text-gray-400" />
            </td>
          </tr>
          <tr>
            <td className="p-2">4.</td>
            <td>Excavator (CAT-25575)</td>
            <td className="text-green-600">30-10-2024 08:00 WIB</td>
            <td>Open</td>
            <td>
              <Ellipsis size={20} className="text-gray-400" />
            </td>
          </tr>
          <tr>
            <td className="p-2">5.</td>
            <td>Loader (BG-1257)</td>
            <td className="text-green-600">30-10-2024 14:00 WIB</td>
            <td>Open</td>
            <td>
              <Ellipsis size={20} className="text-gray-400" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// const ProcessedList = () => {
//   return (
//     <div className="overflow-auto rounded-md bg-gray-900 px-6 py-3 text-white">
//       <h2 className="text-lg font-semibold">Processed</h2>
//       <table>
//         <thead className="*:text-xs">
//           <tr className="border-b border-gray-700 font-bold *:py-1.5">
//             <td className="min-w-[40px]">No.</td>
//             <td className="min-w-[120px]">ServiceID</td>
//             <td className="min-w-[200px]">Vehicle</td>
//             <td className="min-w-[150px]">Start Checking</td>
//             <td className="min-w-[150px]">Finish Checking</td>
//             <td className="min-w-[150px]">Start Handling</td>
//             <td className="min-w-[150px]">Finish Handling</td>
//             <td></td>
//           </tr>
//         </thead>
//         <tbody className="text-sm [&>*:nth-child(even)]:bg-gray-800">
//           <tr>
//             <td className="p-2">1.</td>
//             <td>SRV45-121-23</td>
//             <td>Dump Truck (HD-2331)</td>
//             <td className="text-green-600">25-10-2024 08:00 WIB</td>
//             <td className="text-green-600">25-10-2024 08:00 WIB</td>
//             <td className="text-green-600">25-10-2024 08:00 WIB</td>
//             <td className="text-green-600">25-10-2024 08:00 WIB</td>
//             <td>
//               <Ellipsis size={20} className="text-gray-400" />
//             </td>
//           </tr>
//           <tr>
//             <td className="p-2">2.</td>
//             <td>SRV45-121-24</td>
//             <td>Dump Truck (HD-2342)</td>
//             <td className="text-green-600">27-10-2024 14:00 WIB</td>
//             <td className="text-green-600">27-10-2024 14:00 WIB</td>
//             <td className="text-green-600">27-10-2024 14:00 WIB</td>
//             <td className="text-green-600">27-10-2024 14:00 WIB</td>
//             <td>
//               <Ellipsis size={20} className="text-gray-400" />
//             </td>
//           </tr>
//           <tr>
//             <td className="p-2">3.</td>
//             <td>SRV45-121-25</td>
//             <td>Excavator (CAT-25534)</td>
//             <td className="text-yellow-600">29-10-2024 14:00 WIB</td>
//             <td className="text-yellow-600">29-10-2024 14:00 WIB</td>
//             <td className="text-yellow-600">29-10-2024 14:00 WIB</td>
//             <td className="text-yellow-600">-</td>
//             <td>
//               <Ellipsis size={20} className="text-gray-400" />
//             </td>
//           </tr>
//           <tr>
//             <td className="p-2">4.</td>
//             <td>SRV45-121-26</td>
//             <td>Excavator (CAT-25575)</td>
//             <td className="text-yellow-600">30-10-2024 08:00 WIB</td>
//             <td className="text-yellow-600">30-10-2024 08:00 WIB</td>
//             <td className="text-yellow-600">-</td>
//             <td className="text-yellow-600">-</td>
//             <td>
//               <Ellipsis size={20} className="text-gray-400" />
//             </td>
//           </tr>
//           <tr>
//             <td className="p-2">5.</td>
//             <td>SRV45-121-27</td>
//             <td>Loader (BG-1257)</td>
//             <td className="text-yellow-600">30-10-2024 14:00 WIB</td>
//             <td className="text-yellow-600">-</td>
//             <td className="text-yellow-600">-</td>
//             <td className="text-yellow-600">-</td>
//             <td>
//               <Ellipsis size={20} className="text-gray-400" />
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };
