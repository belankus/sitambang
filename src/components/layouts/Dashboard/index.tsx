"use client";

import Apps from "@/components/fragments/Apps";
import { Bell, LayoutGrid, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function DahsboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown function
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="flex h-[50px] w-full bg-secondary">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <Link href={"/"}>
            <Image
              src="/images/logo-landscape.png"
              alt="Logo"
              width={200}
              height={200}
              className="object-fill brightness-0 invert"
            />
          </Link>
          <div className="relative flex gap-3">
            <button
              type="button"
              onClick={toggleDropdown}
              className={`${isOpen ? "bg-white/30" : ""} rounded-full p-1.5 transition-colors hover:bg-white/30`}
            >
              <LayoutGrid className="size-4 text-white" />
            </button>
            <button
              type="button"
              className={`rounded-full p-1.5 transition-colors hover:bg-white/30`}
            >
              <Settings className="size-4 text-white" />
            </button>
            <button
              type="button"
              className={`rounded-full p-1.5 transition-colors hover:bg-white/30`}
            >
              <Bell className="size-4 text-white" />
            </button>

            <Apps {...{ isOpen }} />
          </div>
        </div>
      </div>

      {children}
    </>
  );
}
