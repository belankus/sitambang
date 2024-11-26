"use client";

import DashboardLayout from "../../Main";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";

const galleryImages: Record<string, { title: string; links: string[] }> = {
  community: {
    title: "Community",
    links: [
      "/images/Gallery/Community/golf.jpg",
      "/images/Gallery/Community/gym.jpg",
      "/images/Gallery/Community/badminton.jpeg",
    ],
  },
  "operating-activity": {
    title: "Operating Activity",
    links: [
      "/images/Gallery/Operating-Activity/tunnel.jpg",
      "/images/Gallery/Operating-Activity/railway.jpg",
      "/images/Gallery/Operating-Activity/smelter.jpg",
    ],
  },
  csr: {
    title: "CSR",
    links: [
      "/images/Gallery/CSR/benih.jpg",
      "/images/Gallery/CSR/health.jpeg",
      "/images/Gallery/CSR/enviro.jpg",
    ],
  },
};

export default function GalleryCategoryContent({
  params,
}: {
  params: { category: string };
}) {
  return (
    <DashboardLayout>
      <div className="flex justify-between">
        <div className="mb-5">
          <h1 className="text-2xl font-bold">Gallery</h1>
          <h2>{galleryImages[params.category].title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <label
            htmlFor="archive"
            className="cursor-pointer font-thin text-gray-400"
          >
            Archive
          </label>
          <select
            name="archive"
            id="archive"
            className="w-32 cursor-pointer rounded border-r-8 border-gray-100 bg-gray-100 px-2 py-2 text-sm text-gray-900 outline-none"
          >
            <option value="all">All Year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-4 gap-4"
        >
          {galleryImages[params.category]?.links.map((image, index) => (
            <a key={index} href={image} className="group">
              <Image
                alt={`img-${index + 1}`}
                src={image}
                height={300}
                width={300}
                className="h-full max-h-[150px] object-cover brightness-100 group-hover:brightness-75"
              />
            </a>
          )) || <p>No images available for this category.</p>}
        </LightGallery>
      </div>
    </DashboardLayout>
  );
}
