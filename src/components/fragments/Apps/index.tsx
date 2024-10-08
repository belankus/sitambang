import { applications } from "@/components/sections/Home/Applications";
import Image from "next/image";
import Link from "next/link";

type Proptypes = {
  isOpen: boolean;
};

export default function Apps({ isOpen }: Proptypes) {
  return (
    <div
      className={`${isOpen ? "block" : "hidden"} scrollbar absolute right-0 top-0 z-10 max-h-96 min-w-96 translate-y-10 overflow-y-scroll rounded-xl bg-gray-100 p-2 shadow-lg`}
    >
      <div className="grid grid-cols-3 gap-2 rounded-lg bg-white/60 p-4">
        {applications.map((application, index) => (
          <div
            key={index}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-lg p-2"
          >
            <figure className="flex flex-col items-center justify-center">
              <Link
                href={application.link}
                className="group peer cursor-pointer"
              >
                <Image
                  src={application.img}
                  alt="image"
                  width={56}
                  height={56}
                  className="mb-2 h-16 w-16 translate-y-0 rounded-md bg-white p-2 shadow-md transition-transform group-hover:-translate-y-1 group-hover:shadow-lg"
                />
              </Link>
              <figcaption className="line-clamp-1 text-center text-sm font-semibold peer-hover:line-clamp-none">
                {application.caption}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}
