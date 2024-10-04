import Apps from "@/components/fragments/Apps";
import { faBell, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bell, LayoutGrid, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DahsboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            <button type="button">
              <LayoutGrid className="size-4 text-white" />
            </button>
            <Settings className="size-4 text-white" />
            <Bell className="size-4 text-white" />

            <Apps />
          </div>
        </div>
      </div>

      {children}
    </>
  );
}
