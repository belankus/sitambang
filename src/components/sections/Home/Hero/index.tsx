import Image from "next/image";
import Link from "next/link";

export default function SectionHero() {
  return (
    <section className="relative mx-auto h-[90vh] w-full text-text-primary">
      <div className="pt-20">
        <h1 className="font-Poppins mx-auto max-w-5xl text-center text-5xl font-bold">
          Semua kebutuhan bisnis tambang Anda dalam{" "}
          <span className="whitespace-nowrap bg-[url('/assets/highlight.svg')] bg-contain bg-center bg-no-repeat">
            satu platform.
          </span>
        </h1>

        <h2 className="font-Poppins mx-auto mt-5 max-w-5xl text-center text-4xl font-semibold">
          Sederhana, efisien,{" "}
          <span className="whitespace-nowrap bg-[url('/assets/blue_highlight.svg')] bg-contain bg-center bg-no-repeat">
            dan terintegrasi!
          </span>
        </h2>

        {/* Section CTA */}
        <div className="mx-auto mt-14 flex w-full max-w-5xl justify-center gap-4">
          <Link
            href={"/ujicoba"}
            className="h-fit w-fit rounded-md border-secondary bg-secondary px-4 py-2 text-lg text-white"
          >
            Mulai Sekarang
          </Link>
          <Link
            href={"/ujicoba"}
            className="h-fit w-fit rounded-md border border-secondary bg-white px-4 py-2 text-lg text-secondary"
          >
            Jadwalkan Demo
          </Link>
        </div>
      </div>
      <Image
        src={"/images/Home/wave-shade.svg"}
        width={"1000"}
        height={"1000"}
        alt="wave"
        className="absolute bottom-0 w-full"
      />
    </section>
  );
}
