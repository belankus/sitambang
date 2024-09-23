"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { menu } from "../../Navbar/Dropdown";
import {
  ArrowLeft,
  AtSign,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  House,
  Image as ImageIcon,
  Info,
  Layers,
  Search,
  ShoppingCart,
  Tent,
  X,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
// import { useCart } from "@/context/CartContext";

type Proptypes = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

type LinksType = {
  id: string;
  title: string;
  link: string;
  categories: {
    id: string;
    title: string;
    link: string;
  }[];
}[];

const advanceLinks = menu;

const MobileMenu = (props: Proptypes) => {
  const { data: session } = useSession();
  // const { cart } = useCart();
  const { isMenuOpen, setIsMenuOpen } = props;
  const [isAdvance, setIsAdvance] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={`bg-dark fixed right-0 top-0 z-50 block h-dvh w-screen transition-[transform_500ms_ease] sm:max-w-sm lg:hidden ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      } overflow-hidden`}
    >
      {/* Body */}
      <div className="mx-5 flex h-full flex-col justify-between overflow-hidden">
        {/* Main */}
        <div>
          {/* Header */}
          <div
            className={`flex h-[60px] items-center ${
              isAdvance !== "" ? "justify-between" : "justify-end"
            }`}
          >
            {isAdvance !== "" && (
              <>
                <Button
                  type="button"
                  className="!border-dark-secondary !bg-dark-secondary flex items-center justify-center !p-1.5"
                  onClick={() => {
                    setIsAdvance("");
                  }}
                >
                  <ArrowLeft size={18} />
                </Button>
                <h2 className="text-sm font-bold">
                  {isAdvance.charAt(0).toUpperCase() + isAdvance.slice(1)}
                </h2>
              </>
            )}
            <Button
              type="button"
              className="!border-dark-secondary !bg-dark-secondary flex items-center justify-center !p-1.5"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <X size={18} />
            </Button>
          </div>

          {/* Profile */}
          <div className="mt-5 flex items-end justify-between">
            <div className="flex gap-3">
              <div className="h-10 w-10 flex-grow-0 overflow-hidden rounded-full">
                {session?.user?.image ? (
                  <Image
                    src={session?.user?.image}
                    alt="User"
                    width={40}
                    height={40}
                  />
                ) : (
                  <Image
                    src="/img/home/user.png"
                    alt="User"
                    width={40}
                    height={40}
                  />
                )}
              </div>

              <div>
                <h2 className="text-base font-medium">
                  {session ? session?.user?.name : "Selamat Datang"}
                </h2>
                <p className="text-shade text-xs font-medium">
                  {session ? session?.user?.email : "Klik Log In untuk memulai"}
                </p>
              </div>
            </div>
            <div className="relative mr-2">
              <Link href={"/cart"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <ShoppingCart />
              </Link>
              {/* {cart.length > 0 && (
                <div className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500">
                  <span className="text-[8px] text-white">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                </div>
              )} */}
            </div>
          </div>

          {/* Search Box */}
          <div className="relative mt-10 h-10 overflow-hidden rounded-full">
            <label
              htmlFor="search"
              className="absolute left-3 top-[calc(50%)] flex -translate-y-1/2 items-center justify-center"
            >
              <Search className="text-white/50" />
            </label>
            <input
              className="bg-dark-secondary h-full w-full pl-12 pr-6 text-sm font-normal leading-none outline-none placeholder:text-white placeholder:opacity-50"
              type="text"
              id="search"
              placeholder="Anda mencari sesuatu?"
            />
          </div>

          {/* Navigation */}
          <div
            className={`mt-10 flex w-full ${
              isAdvance !== "" ? "-translate-x-[100%]" : "translate-x-0"
            } transition-[translate_500ms_ease]`}
          >
            {/* Main Navigation */}
            <div className="w-full shrink-0">
              <ul className="flex flex-col gap-[18px]">
                <button
                  type="button"
                  onClick={() => {
                    router.push("/");
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  <li
                    className={`flex h-10 items-center gap-3 rounded-lg px-3 ${
                      pathname === "/" ? "bg-primary opacity-100" : "opacity-50"
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <House />
                    </div>
                    <span className="flex h-full items-center text-sm font-semibold">
                      Home
                    </span>
                  </li>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsAdvance("projects");
                  }}
                >
                  <li
                    className={`flex h-10 items-center justify-between rounded-lg px-3 ${
                      pathname.startsWith("/projects")
                        ? "bg-primary opacity-100"
                        : "opacity-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center">
                        <Layers />
                      </div>
                      <span className="text-sm font-semibold">Projects</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <ChevronRight />
                    </div>
                  </li>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    router.push("/gallery");
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  <li
                    className={`flex h-10 items-center gap-3 rounded-lg px-3 ${
                      pathname.startsWith("/gallery")
                        ? "bg-primary opacity-100"
                        : "opacity-50"
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <ImageIcon />
                    </div>
                    <span className="text-sm font-semibold">Gallery</span>
                  </li>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    router.push("/products");
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  <li
                    className={`flex h-10 items-center gap-3 rounded-lg px-3 ${
                      pathname.startsWith("/products")
                        ? "bg-primary opacity-100"
                        : "opacity-50"
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <Tent />
                    </div>
                    <span className="text-sm font-semibold">Products</span>
                  </li>
                </button>

                <hr className="text-white opacity-50" />

                <button
                  type="button"
                  onClick={() => {
                    router.push("/about");
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  <li
                    className={`flex h-10 items-center gap-3 rounded-lg px-3 ${
                      pathname === "/about"
                        ? "bg-primary opacity-100"
                        : "opacity-50"
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <Info />
                    </div>
                    <span className="text-sm font-semibold">About Us</span>
                  </li>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    router.push("/contact");
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  <li
                    className={`flex h-10 items-center gap-3 rounded-lg px-3 ${
                      pathname === "/contact"
                        ? "bg-primary opacity-100"
                        : "opacity-50"
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <AtSign />
                    </div>
                    <span className="text-sm font-semibold">Contact Us</span>
                  </li>
                </button>
              </ul>
            </div>

            {/* Advance navigation */}
            <AdvanceNavigation pathname={pathname} links={advanceLinks} />
          </div>
        </div>

        {/* Logout Button */}
        <div className="my-5">
          {session ? (
            <Button
              type="button"
              variant="hollow"
              className="!border-action !text-action w-full"
              onClick={() => signOut()}
            >
              Log Out
            </Button>
          ) : (
            <Button
              type="button"
              variant="primary"
              className="w-full"
              onClick={() => signIn()}
            >
              Log In
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const AdvanceNavigation = (props: { pathname: string; links: LinksType }) => {
  const { pathname, links } = props;
  const [isDropDown, setIsDropDown] = useState("");
  return (
    <div className="w-full shrink-0">
      <ul className="flex flex-col gap-[18px]">
        {links.map((link: LinksType[0]) => (
          <Fragment key={link.id}>
            <li
              className={`flex h-10 items-center justify-between rounded-lg px-3 ${
                pathname === link.link ||
                link.categories.some(
                  (category: any) => pathname === category.link,
                )
                  ? "bg-primary opacity-100"
                  : "opacity-50"
              } `}
            >
              <Link href={link.link} className="flex items-center gap-3">
                <div className="flex items-center justify-center">
                  <Layers />
                </div>
                <span className="text-sm font-semibold">{link.title}</span>
              </Link>
              <button
                type="button"
                onClick={() => {
                  setIsDropDown((prev: string) =>
                    prev === link.id ? "" : link.id,
                  );
                }}
                className="bg-dark-secondary flex items-center justify-center rounded-lg p-1"
              >
                {isDropDown === link.id ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
            </li>

            {/* Dropdown Link */}
            <div
              className={`flex w-full flex-col overflow-hidden px-12 text-sm transition-[max-height] duration-300 ease-in-out ${
                isDropDown === link.id ? "max-h-[150px]" : "max-h-0"
              }`}
            >
              {link.categories.map((category: any) => (
                <Link
                  key={category.id}
                  href={category.link}
                  className={`flex h-10 items-center gap-2 ${
                    pathname === category.link ? "opacity-100" : "opacity-50"
                  }`}
                >
                  {category.title}
                  <span
                    className={`h-2 w-2 rounded-full ${
                      pathname === category.link ? "bg-primary" : ""
                    }`}
                  ></span>
                </Link>
              ))}
            </div>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
