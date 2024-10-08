import Image from "next/image";
import DashboardLayout from "../Main";
import {
  FileCheck2,
  FileSearch,
  FileSearch2,
  OctagonAlert,
} from "lucide-react";

export default function TrackingContent() {
  return (
    <DashboardLayout>
      <div className="flex justify-between">
        <h1 className="mb-5 max-w-20 text-2xl font-bold">Vehicle Tracking</h1>
        <div className="flex gap-4">
          <div>
            <div className="aspect-square rounded-md bg-gray-100 p-2">t</div>
            Total Fleet
          </div>
          <div>Active Tracking</div>
          <div>Finished Job</div>
        </div>
      </div>
    </DashboardLayout>
  );
}
