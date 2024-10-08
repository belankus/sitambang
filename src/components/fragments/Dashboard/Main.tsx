export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full bg-background-2 pb-5">
      <div className="mx-10 min-h-screen max-w-full rounded-xl bg-white p-10 shadow-background-2 [box-shadow:_rgba(0,_0,_0,_0.5)_0px_5px_10px_0px_inset]">
        {children}
      </div>
      <p className="mt-5 w-full text-center text-sm text-white">
        Copyright &copy; SITAMBANG 2024
      </p>
    </section>
  );
}
