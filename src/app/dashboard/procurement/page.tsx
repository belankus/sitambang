import DashboardContent from "@/components/fragments/Dashboard/Dashboard";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex w-full bg-background-2 pt-2">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <ul className="flex h-full items-center gap-2 text-white">
            <Link href={"/dashboard"}>
              <li className="relative block rounded-t-md bg-white px-4 py-2 text-text-primary">
                <span className="text-sm font-bold">Procurement</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <DashboardContent />
    </>
  );
}
