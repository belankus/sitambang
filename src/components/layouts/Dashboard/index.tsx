import { faBell, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function DahsboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-[50px] w-full bg-secondary">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <Image
            src="/images/logo-landscape.png"
            alt="Logo"
            width={200}
            height={200}
            className="object-fill brightness-0 invert"
          />
          <div className="flex gap-3">
            <FontAwesomeIcon icon={faGear} className="size-4 text-white" />
            <FontAwesomeIcon icon={faBell} className="size-4 text-white" />
          </div>
        </div>
      </div>

      {children}
    </>
  );
}
