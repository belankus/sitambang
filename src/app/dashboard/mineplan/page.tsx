"use client";

import DashboardContent from "@/components/fragments/Dashboard/Dashboard";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  return (
    <>
      <div className="flex w-full bg-background-2">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <ul className="flex h-full items-center gap-2 text-white">
            <Link href={"/dashboard/mineplan"}>
              <li
                className={`${pathname == "/dashboard/mineplan" ? "mt-2 bg-white font-bold text-text-primary" : "text-white"} relative block rounded-t-md px-4 py-2 text-text-primary`}
              >
                <span className="text-sm">Mineplan</span>
              </li>
            </Link>
            <Link href={"/dashboard"}>
              <li
                className={`${pathname == "/dashboard/mineplan/daily" ? "mt-2 bg-white font-bold text-text-primary" : "text-white"} relative block rounded-t-md px-4 py-2 text-text-primary`}
              >
                <span className="text-sm">Daily</span>
              </li>
            </Link>
            <Link href={"/dashboard"}>
              <li
                className={`${pathname == "/dashboard/mineplan/weekly" ? "mt-2 bg-white font-bold text-text-primary" : "text-white"} relative block rounded-t-md px-4 py-2 text-text-primary`}
              >
                <span className="text-sm">Weekly</span>
              </li>
            </Link>
            <Link href={"/dashboard"}>
              <li
                className={`${pathname == "/dashboard/mineplan/monthly" ? "mt-2 bg-white font-bold text-text-primary" : "text-white"} relative block rounded-t-md px-4 py-2 text-text-primary`}
              >
                <span className="text-sm">Monthly</span>
              </li>
            </Link>
            <Link href={"/dashboard"}>
              <li
                className={`${pathname == "/dashboard/mineplan/yearly" ? "mt-2 bg-white font-bold text-text-primary" : "text-white"} relative block rounded-t-md px-4 py-2 text-text-primary`}
              >
                <span className="text-sm">Yearly</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <DashboardContent />
    </>
  );
}
