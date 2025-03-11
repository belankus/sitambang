import DahsboardLayout from "@/components/fragments/Dashboard/Main";
import dynamic from "next/dynamic";

const StockpileScene = dynamic(
  () => import("@/components/fragments/Dashboard/Stockpile/StockpileModel"),
  {
    ssr: false, // Three.js hanya berjalan di sisi client
  },
);

export default function StockpilePage() {
  return (
    <DahsboardLayout>
      <StockpileScene />
    </DahsboardLayout>
  );
}
