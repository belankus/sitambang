"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import MobileNavbar from "../Mobile/Navbar";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "./Dropdown";
import { ChevronDown, LayoutDashboard, X } from "lucide-react";
import Button from "@/components/ui/Button";
// import { useCart } from "@/context/CartContext";

const Navbar = () => {
  // const { data: session } = useSession();
  // const { cart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsHovered("");
  }, [pathname]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className="fixed top-0 z-50 hidden w-full justify-center bg-white lg:flex"
        style={{
          height: isHome ? (isScrolled ? "60px" : "80px") : "60px",
          transition: "height 300ms",
          boxShadow: isScrolled ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none",
        }}
      >
        <div className="flex w-full items-center justify-between gap-16 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          {/* <Link
            href={"/"}
            className="flex justify-center"
            style={{
              // width: isHome ? (isScrolled ? "10rem" : "300px") : "300px",
              height: "auto",
              transition: "width 300ms",
            }}
          > */}
          <Image
            src="/images/logo-landscape.png"
            alt="Logo"
            width={300}
            height={300}
            className="object-fill"
          />
          {/* </Link> */}
          <div className="flex w-full justify-end p-5">
            <ul className="flex w-full justify-center gap-5">
              <li
                className={`flex cursor-pointer items-center gap-2 border-b-2 py-2 text-sm font-bold hover:border-b-white ${
                  pathname.startsWith("/projects")
                    ? "border-b-white opacity-100"
                    : "border-b-transparent opacity-80"
                }`}
                onClick={() =>
                  isHovered === "" ? setIsHovered("projects") : setIsHovered("")
                }
              >
                Aplikasi{" "}
                {isHovered === "" ? <ChevronDown size={16} /> : <X size={16} />}
              </li>
              <Link onMouseEnter={() => setIsHovered("")} href="/gallery">
                <li
                  className={`border-b-2 py-2 text-sm font-bold hover:border-b-white ${
                    pathname.startsWith("/gallery")
                      ? "border-b-white opacity-100"
                      : "border-b-transparent opacity-80"
                  }`}
                >
                  Gallery
                </li>
              </Link>
              <Link onMouseEnter={() => setIsHovered("")} href="/products">
                <li
                  className={`border-b-2 py-2 text-sm font-bold hover:border-b-white ${
                    pathname.startsWith("/products")
                      ? "border-b-white opacity-100"
                      : "border-b-transparent opacity-80"
                  }`}
                >
                  Kontak
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex w-full justify-end p-5">
            <div className="relative flex items-center justify-between gap-5">
              <Link onMouseEnter={() => setIsHovered("")} href="/products">
                <div
                  className={`border-b-2 py-2 text-sm font-bold hover:border-b-white ${
                    pathname.startsWith("/products")
                      ? "border-b-white opacity-100"
                      : "border-b-transparent opacity-80"
                  }`}
                >
                  Login
                </div>
              </Link>
              <Button
                type="link"
                href={"/ujicoba"}
                className="h-fit border-secondary bg-secondary text-sm text-white"
              >
                Uji Coba Sekarang
              </Button>
            </div>
          </div>
        </div>
      </nav>
      {/* Desktop Dropdown */}
      <Dropdown
        isHome={isHome}
        isScrolled={isScrolled}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />

      <MobileNavbar />
    </>
  );
};

const ProfileMenu = (props: any) => {
  const { session, isProfileMenuOpen, setIsProfileMenuOpen, pathname } = props;

  return (
    <div className="text-lava-black absolute left-1/2 top-full w-44 -translate-x-1/2 rounded-lg bg-white p-4 shadow-lg">
      <div className="w-full">
        {session ? (
          <>
            <div className="w-full">
              <h2 className="line-clamp-1 text-sm font-semibold">
                {session?.user?.name}
              </h2>
            </div>
            <div className="my-2 w-full border-b" />
            <div className="text-lava-black w-full text-sm font-semibold">
              <Link
                href={"/admin"}
                className="hover:bg-lava-black/10 flex items-center gap-2 rounded p-2"
              >
                <LayoutDashboard size="18" />
                Dashboard
              </Link>
            </div>
            <div className="my-2 w-full border-b" />
            <button
              type="button"
              className="border-action text-action hover:bg-action w-full rounded-lg border px-2 py-1.5 text-sm font-semibold hover:text-white"
              onClick={() => signOut()}
            >
              Log Out
            </button>
          </>
        ) : (
          <button
            type="button"
            className="w-full rounded-lg border bg-primary px-2 py-1.5 text-sm font-semibold text-white hover:bg-primary/80 hover:text-white"
            onClick={() => signIn()}
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
