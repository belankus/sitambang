import Image from "next/image";
import DashboardLayout from "../Main";
import { FileCheck2, FileSearch, OctagonAlert } from "lucide-react";

export default function OverviewContent() {
  return (
    <DashboardLayout>
      <h1 className="mb-5 text-2xl font-bold">Overview</h1>

      <div className="flex gap-10">
        {/* Driver Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Driver Information</h2>

          <div className="flex gap-4">
            <div className="">
              <Image
                src={"/assets/avatar.jpg"}
                width={200}
                height={200}
                alt="driver"
                className="size-16 rounded-full object-cover"
              />
            </div>

            <table>
              <colgroup>
                <col style={{ width: "180px" }} />
                <col />
              </colgroup>
              <tbody>
                <tr className="*:py-1.5">
                  <td className="opacity-70">Driver Name</td>
                  <td className="font-bold">John Doe</td>
                </tr>
                <tr className="*:py-1.5">
                  <td className="opacity-70">Driver Code</td>
                  <td className="font-bold">DRV-012-X-123</td>
                </tr>
                <tr className="*:py-1.5">
                  <td className="opacity-70">Joined Date</td>
                  <td className="font-bold">1 January 2022</td>
                </tr>
                <tr className="*:py-1.5">
                  <td className="opacity-70">Email</td>
                  <td className="flex items-center gap-1 font-bold text-orange-500">
                    <span>example@example.org</span>
                    <OctagonAlert className="inline-block h-4 w-4" />
                  </td>
                </tr>
                <tr className="*:py-1.5">
                  <td className="opacity-70" valign="top">
                    Address
                  </td>
                  <td className="font-bold">
                    Jl. Perumnas No. 123, Jakarta Selatan
                  </td>
                </tr>
                <tr className="*:py-1.5">
                  <td className="opacity-70">Phone Number</td>
                  <td className="font-bold">0853 1234 5678</td>
                </tr>
                <tr className="*:py-1.5">
                  <td className="opacity-70">Emergency Number</td>
                  <td className="font-bold">0890 1234 5678</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Fleet Information */}
        <div className="">
          <h2 className="text-xl font-bold">Fleet Information</h2>

          <div className="flex gap-4">
            <Image
              src="/assets/unit-dt.png"
              width={200}
              height={200}
              alt="unit"
              className="aspect-auto size-40 object-cover"
            />
            <div>
              <div className="my-2 flex items-end gap-2 text-sm">
                <button className="flex h-fit items-center gap-1 rounded-md bg-gray-100 px-3 py-2">
                  <FileSearch className="h-4 w-4" />
                  <span>Fleet Checking History</span>
                </button>
                <button className="flex h-fit items-center gap-1 rounded-md bg-gray-100 px-3 py-2">
                  <FileCheck2 className="h-4 w-4" />
                  <span>Fleet Legal Documents</span>
                </button>
              </div>

              <table>
                <colgroup>
                  <col style={{ width: "180px" }} />
                  <col />
                </colgroup>
                <tbody>
                  <tr className="*:py-1.5">
                    <td className="opacity-70">Fleet Brand</td>
                    <td className="font-bold">Hino 700 Series</td>
                  </tr>
                  <tr className="*:py-1.5">
                    <td className="opacity-70">Fleet Model</td>
                    <td className="font-bold">ZS4141 - Open Dump Truck</td>
                  </tr>
                  <tr className="*:py-1.5">
                    <td className="opacity-70">Fleet Code</td>
                    <td className="font-bold">FBL-784MD</td>
                  </tr>
                  <tr className="*:py-1.5">
                    <td className="opacity-70">Last Checking</td>
                    <td className="flex items-center gap-1 font-bold text-orange-500">
                      <span>18 July 2024</span>
                      <OctagonAlert className="inline-block h-4 w-4" />
                    </td>
                  </tr>
                  <tr className="*:py-1.5">
                    <td className="opacity-70" valign="top">
                      Fleet Capacity
                    </td>
                    <td className="font-bold">40.000 Tons</td>
                  </tr>
                  <tr className="*:py-1.5">
                    <td className="opacity-70">Fleet Condition</td>
                    <td className="font-bold text-green-600">
                      <span className="inline-block h-2 w-2 rounded-full bg-green-500" />{" "}
                      Good Condition
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
