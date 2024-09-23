"use client";

import Link from "next/link";
import { Dispatch, Fragment, SetStateAction } from "react";

type Proptypes = {
  isHome: boolean;
  isScrolled: boolean;
  isHovered: string;
  setIsHovered: Dispatch<SetStateAction<string>>;
};

export const menu = [
  {
    id: "allProjects",
    title: "Dashboard",
    link: "/projects",
    categories: [
      {
        id: "tendaAllProject",
        title: "Information",
        link: "/projects/c/tenda",
      },
      { id: "kursiAllProject", title: "Schedule", link: "/projects/c/kursi" },
      {
        id: "mejaAllProject",
        title: "Fleet Management",
        link: "/projects/c/meja",
      },
    ],
  },
  {
    id: "weddingProjects",
    title: "Produksi",
    link: "/projects/wedding",
    categories: [
      {
        id: "tendaWeddingProject",
        title: "Tenda",
        link: "/projects/wedding/tenda",
      },
      {
        id: "kursiWeddingProject",
        title: "Kursi",
        link: "/projects/wedding/kursi",
      },
      {
        id: "mejaWeddingProject",
        title: "Meja",
        link: "/projects/wedding/meja",
      },
    ],
  },
  {
    id: "corporateProjects",
    title: "Dokumen",
    link: "/projects/corporate",
    categories: [
      {
        id: "tendaCorporateProject",
        title: "Tenda",
        link: "/projects/corporate/tenda",
      },
      {
        id: "kursiCorporateProject",
        title: "Kursi",
        link: "/projects/corporate/kursi",
      },
      {
        id: "mejaCorporateProject",
        title: "Meja",
        link: "/projects/corporate/meja",
      },
    ],
  },
  {
    id: "eventProjects",
    title: "Keuangan",
    link: "/projects/event",
    categories: [
      {
        id: "tendaEventProject",
        title: "Tenda",
        link: "/projects/event/tenda",
      },
      {
        id: "kursiEventProject",
        title: "Kursi",
        link: "/projects/event/kursi",
      },
      { id: "mejaEventProject", title: "Meja", link: "/projects/event/meja" },
    ],
  },
];

const Dropdown = (props: Proptypes) => {
  const { isHome, isScrolled, isHovered, setIsHovered } = props;
  return (
    <>
      <div
        className={`fixed inset-0 z-[39] bg-black transition-opacity duration-300 ${
          isHovered !== "" ? "block opacity-50" : "hidden opacity-0"
        }`}
      />
      <div
        onMouseLeave={() => setIsHovered("")}
        className={`fixed left-0 top-0 z-[40] w-full transform bg-background text-foreground duration-300 ${
          isHovered
            ? isHome && !isScrolled
              ? "translate-y-[80px] opacity-100"
              : "translate-y-[60px] opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto flex w-[calc(100vw-80px)] max-w-7xl justify-center gap-20 pb-20 pt-10">
          {menu.map((item) => (
            <div
              key={item.id}
              className={`transform transition delay-300 duration-500 ${
                isHovered !== ""
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-5 opacity-0"
              }`}
            >
              <Link
                href={item.link}
                className="text-lg font-semibold opacity-80 hover:opacity-100"
              >
                {item.title}
              </Link>
              <ul className="mt-4 flex flex-col gap-2">
                {item.categories.map((category) => (
                  <li key={category.id}>
                    <Link
                      href={category.link}
                      className="opacity-50 hover:opacity-100"
                    >
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Dropdown;
