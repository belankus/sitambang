import { applications } from "@/components/sections/Home/Applications";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Tooltip } from "react-tooltip";

type Proptypes = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Apps({ isOpen, setIsOpen }: Proptypes) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    )
      setIsOpen(false);
  };

  useEffect(() => {
    // Add event listener on mount
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`${isOpen ? "block" : "hidden"} scrollbar absolute right-0 top-0 z-10 max-h-96 min-w-96 translate-y-10 overflow-y-scroll rounded-xl bg-gray-100 p-2 shadow-lg`}
    >
      <div className="grid grid-cols-3 gap-2 rounded-lg bg-white/60 p-4">
        {applications.map((application, index) => (
          <div
            key={index}
            data-tooltip-id="app-tooltip"
            data-tooltip-content={application.caption}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-lg p-2"
          >
            <figure className="relative flex flex-col items-center justify-center">
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
              <figcaption className="line-clamp-1 text-center text-sm font-semibold">
                {application.caption}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>

      <Tooltip id="app-tooltip" />
    </div>
  );
}
