import DahsboardLayout from "@/components/layouts/Dashboard";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DahsboardLayout>{children}</DahsboardLayout>
    </>
  );
}
