import dynamic from "next/dynamic";

const StockpileScene = dynamic(
  () => import("@/components/fragments/Dashboard/Stockpile/StockpileModel"),
  {
    ssr: false, // Three.js hanya berjalan di sisi client
  },
);

export default function StockpilePage() {
  return (
    <div className="h-screen w-screen">
      <StockpileScene />
    </div>
  );
}
