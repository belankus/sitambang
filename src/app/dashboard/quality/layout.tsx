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
            <Link href={"/dashboard/quality"}>
              <li
                className={`${pathname == "/dashboard/quality" ? "mt-2 bg-white font-bold text-text-primary" : "text-white"} relative block rounded-t-md px-4 py-2 text-text-primary`}
              >
                <span className="text-sm">Quality Lab</span>
              </li>
            </Link>
            <Link href={"/dashboard/quality/sampling"}>
              <li
                className={`${pathname == "/dashboard/quality/sampling" ? "mt-2 bg-white font-bold text-text-primary" : "text-white"} relative block rounded-t-md px-4 py-2 text-text-primary`}
              >
                <span className="text-sm">Sampling</span>
              </li>
            </Link>

            <Link href={"/dashboard/quality/preparasi"}>
              <li
                className={`${pathname == "/dashboard/quality/preparasi" ? "mt-2 bg-white font-bold text-text-primary" : "text-white"} relative block rounded-t-md px-4 py-2 text-text-primary`}
              >
                <span className="text-sm">Preparasi</span>
              </li>
            </Link>
            <Link href={"/dashboard/quality/analisis"}>
              <li
                className={`${pathname == "/dashboard/quality/analisis" ? "mt-2 bg-white font-bold text-text-primary" : "text-white"} relative block rounded-t-md px-4 py-2 text-text-primary`}
              >
                <span className="text-sm">Analisis</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      {children}
    </>
  );
}
