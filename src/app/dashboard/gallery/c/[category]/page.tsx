import GalleryCategoryContent from "@/components/fragments/Dashboard/Gallery/Category/Category";

export default function Page({ params }: { params: { category: string } }) {
  return (
    <>
      <GalleryCategoryContent {...{ params }} />
    </>
  );
}
