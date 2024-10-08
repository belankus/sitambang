"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <div className="flex w-full bg-background-2">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <ul className="flex h-full items-center gap-2 text-white">
            <Link href={"/dashboard/fleet-management"}>
              <li
                className={`${pathname == "/dashboard/fleet-management" ? "mt-2 bg-white font-bold text-text-primary" : "text-white"} relative block rounded-t-md px-4 py-2 text-text-primary`}
              >
                <span className="text-sm">Overview</span>
              </li>
            </Link>
            <Link href={"/dashboard/fleet-management/tracking"}>
              <li
                className={`${pathname == "/dashboard/fleet-management/tracking" ? "mt-2 bg-white font-bold text-text-primary" : "text-white"} relative block rounded-t-md px-4 py-2 text-text-primary`}
              >
                <span className="text-sm">Tracking</span>
              </li>
            </Link>
            <Link href={"/dashboard/fleet-management/vehicle"}>
              <li
                className={`${pathname == "/dashboard/fleet-management/vehicle" ? "mt-2 bg-white font-bold text-text-primary" : "text-white"} relative block rounded-t-md px-4 py-2 text-text-primary`}
              >
                <span className="text-sm">Vehicle</span>
              </li>
            </Link>
            <Link href={"/dashboard/fleet-management/maintenance"}>
              <li
                className={`${pathname == "/dashboard/fleet-management/maintenance" ? "mt-2 bg-white font-bold text-text-primary" : "text-white"} relative block rounded-t-md px-4 py-2 text-text-primary`}
              >
                <span className="text-sm">Maintenance</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      {children}
    </>
  );
}
