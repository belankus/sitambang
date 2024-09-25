"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "../Menu";
import Link from "next/link";
import { Menu } from "lucide-react";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="fixed top-0 z-50 flex h-[60px] w-screen justify-center bg-primary shadow-md lg:hidden">
        <div className="mx-5 flex w-full max-w-full justify-between">
          <Link href={"/"} className="flex h-full items-center">
            <Image src="/img/logo.svg" alt="Logo" width={48} height={40} />
          </Link>
          <div className="flex h-full items-center">
            <Button
              type="button"
              className="flex items-center justify-center !p-0"
              onClick={() => {
                handleToggleMenu();
              }}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}

      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default MobileNavbar;
