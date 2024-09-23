import Navbar from "@/components/fragments/Navbar";
import SectionApplications from "@/components/sections/Home/Applications";
import SectionFooter from "@/components/sections/Home/Footer";
import SectionHero from "@/components/sections/Home/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-[80px]">
        <SectionHero />
        <SectionApplications />
        <SectionFooter />
      </main>
    </>
  );
}
