import Image from "next/image";
import DashboardLayout from "../Main";
import Link from "next/link";

export default function GalleryContent() {
  return (
    <DashboardLayout>
      <div className="flex justify-between">
        <h1 className="mb-5 text-2xl font-bold">Gallery</h1>
        <div className="flex items-center gap-2">
          <label
            htmlFor="archive"
            className="cursor-pointer font-thin text-gray-400"
          >
            Archive
          </label>
          <select
            name="archive"
            id="archive"
            className="w-32 cursor-pointer rounded border-r-8 border-gray-100 bg-gray-100 px-2 py-2 text-sm text-gray-900 outline-none"
          >
            <option value="all">All Year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
          </select>
        </div>
      </div>

      {/* Row 1 */}
      <div className="mb-5 flex w-full justify-between gap-5">
        {/* Widget */}
        <div className="w-1/3 overflow-hidden rounded-md border bg-white shadow-md">
          <Link
            href={"/dashboard/gallery/c/community"}
            className="group relative"
          >
            <Image
              src={"/images/Gallery/community.jpg"}
              alt="image"
              width={400}
              height={400}
              className="brightness-50 transition-all duration-500 ease-in-out group-hover:cursor-pointer group-hover:brightness-100"
            />
            <div className="absolute bottom-0 left-0 flex -translate-y-2 translate-x-2 items-center justify-center rounded-sm p-2">
              <div className="absolute h-full w-full bg-black opacity-50" />
              <h2 className="z-10 text-xs font-semibold text-white opacity-100">
                10 November 2024
              </h2>
            </div>
          </Link>
          <div className="flex items-center justify-between p-5">
            <h2 className="text-xs font-semibold">Community</h2>
            <p className="text-xs font-semibold text-blue-700">42 Photo</p>
          </div>
        </div>
        {/* Widget */}
        <div className="w-1/3 overflow-hidden rounded-md border bg-white shadow-md">
          <Link
            href={"/dashboard/gallery/c/operating-activity"}
            className="group relative"
          >
            <Image
              src={"/images/Gallery/operation.jpg"}
              alt="image"
              width={400}
              height={400}
              className="brightness-50 transition-all duration-500 ease-in-out group-hover:cursor-pointer group-hover:brightness-100"
            />
            <div className="absolute bottom-0 left-0 flex -translate-y-2 translate-x-2 items-center justify-center rounded-sm p-2">
              <div className="absolute h-full w-full bg-black opacity-50" />
              <h2 className="z-10 text-xs font-semibold text-white opacity-100">
                Today -{" "}
                {new Date().toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </h2>
            </div>
          </Link>
          <div className="flex items-center justify-between p-5">
            <h2 className="text-xs font-semibold">Operating Activity</h2>
            <p className="text-xs font-semibold text-blue-700">1.652 Photo</p>
          </div>
        </div>
        {/* Widget */}
        <div className="w-1/3 overflow-hidden rounded-md border bg-white shadow-md">
          <Link href={"/dashboard/gallery/c/csr"} className="group relative">
            <Image
              src={"/images/Gallery/csr.jpg"}
              alt="image"
              width={400}
              height={400}
              className="brightness-50 transition-all duration-500 ease-in-out group-hover:cursor-pointer group-hover:brightness-100"
            />
            <div className="absolute bottom-0 left-0 flex -translate-y-2 translate-x-2 items-center justify-center rounded-sm p-2">
              <div className="absolute h-full w-full bg-black opacity-50" />
              <h2 className="z-10 text-xs font-semibold text-white opacity-100">
                1 November 2024
              </h2>
            </div>
          </Link>
          <div className="flex items-center justify-between p-5">
            <h2 className="text-xs font-semibold">Corporate Responsibility</h2>
            <p className="text-xs font-semibold text-blue-700">58 Photo</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
