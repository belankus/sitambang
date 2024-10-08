import {
  faFacebookF,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function SectionFooter() {
  return (
    <section className="bg-secondary text-white">
      <div className="mx-auto flex w-full max-w-6xl gap-10">
        <div className="flex w-3/5 gap-5">
          <div className="w-full">
            <h2 className="mb-2 text-2xl font-bold">Layanan</h2>
            <ul className="opacity-70">
              <li>Dashboard</li>
              <li>Produksi</li>
              <li>Keuangan</li>
              <li>Dokumen</li>
            </ul>
          </div>
          <div className="w-full">
            <h2 className="mb-2 text-2xl font-bold">Tentang Kami</h2>
            <ul className="opacity-70">
              <li>Perusahaan Kami</li>
              <li>Hubungi Kami</li>
            </ul>
          </div>
        </div>
        <div className="w-2/5">
          <h1 className="mb-2 text-3xl font-bold">SITAMBANG</h1>
          <p className="text-sm">
            SITAMBANG adalah sebuah rangkaian aplikasi bisnis tambang yang
            dirancang untuk memenuhi kebutuhan sistem manajemen tambang:
            eksplorasi, mineplan, tracking, scheduling, fleet management, hingga
            HSE tambang.
          </p>
          <div className="mt-5 flex gap-5">
            <Link
              href="/"
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <FontAwesomeIcon icon={faFacebookF} className="size-4" />
            </Link>
            <Link
              href="/"
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <FontAwesomeIcon icon={faXTwitter} className="size-4" />
            </Link>
            <Link
              href="/"
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <FontAwesomeIcon icon={faInstagram} className="size-4" />
            </Link>
            <Link
              href="/"
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="size-4" />
            </Link>
          </div>
        </div>
      </div>
      <hr className="mx-auto mb-5 mt-20 h-px w-full max-w-6xl border-0 bg-gray-200 opacity-50" />
      <div className="mx-auto flex max-w-6xl justify-between pb-5 text-sm">
        <p>Copyright &copy; 2024 DBS Coal and Mineral</p>
        <p>Kebijakan Privasi. Syarat dan Ketentuan.</p>
      </div>
    </section>
  );
}
