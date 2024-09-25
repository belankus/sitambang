import Image from "next/image";
import Link from "next/link";

const applications = [
  {
    img: "/assets/dashboard.svg",
    caption: "Management",
    link: "/dashboard",
  },
  {
    img: "/assets/information.svg",
    caption: "Information",
    link: "/dashboard/information",
  },
  {
    img: "/assets/scheduling.svg",
    caption: "Activity",
    link: "/dashboard/activity",
  },
  {
    img: "/assets/gallery.svg",
    caption: "Gallery",
    link: "/dashboard/gallery",
  },
  {
    img: "/assets/mineplan.svg",
    caption: "Mineplan",
    link: "/dashboard/mineplan",
  },
  {
    img: "/assets/production.svg",
    caption: "Production",
    link: "/dashboard/production",
  },
  {
    img: "/assets/stockpile.svg",
    caption: "Stockpile",
    link: "/dashboard/stockpile",
  },
  {
    img: "/assets/quality.svg",
    caption: "Quality Laboratory",
    link: "/dashboard/quality",
  },
  {
    img: "/assets/fleet-management.svg",
    caption: "Fleet Management",
    link: "/dashboard/fleet-management",
  },
  {
    img: "/assets/shipment.svg",
    caption: "Shipment",
    link: "/dashboard/shipment",
  },
  {
    img: "/assets/procurement.svg",
    caption: "Procurement",
    link: "/dashboard/procurement",
  },
  {
    img: "/assets/hse.svg",
    caption: "HSE",
    link: "/dashboard/hse",
  },
  {
    img: "/assets/hrd.svg",
    caption: "HRD",
    link: "/dashboard/hrd",
  },
  {
    img: "/assets/finance.svg",
    caption: "Finance",
    link: "/dashboard/finance",
  },
];

export default function SectionApplications() {
  return (
    <section className="relative bg-background pb-64">
      <div className="mx-auto w-full max-w-5xl pt-5">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5 lg:grid-cols-4">
          {applications.map((application, index) => (
            <div key={index} className="flex items-center justify-center">
              <figure className="flex flex-col items-center">
                <Link href={application.link} className="group cursor-pointer">
                  <Image
                    src={application.img}
                    alt="image"
                    width={56}
                    height={56}
                    className="mb-2 h-20 w-20 translate-y-0 rounded-md bg-white p-2 shadow-md transition-transform group-hover:-translate-y-1 group-hover:shadow-lg"
                  />
                </Link>
                <figcaption className="font-semibold">
                  {application.caption}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={"/images/Home/wave-blue.svg"}
        width={"1000"}
        height={"1000"}
        alt="wave"
        className="absolute bottom-0 w-full"
      />
    </section>
  );
}
