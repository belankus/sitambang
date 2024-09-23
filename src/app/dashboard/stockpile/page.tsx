export default function Page() {
  return (
    <>
      <div className="bg-background-2 flex h-[50px] w-full">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <ul className="flex items-center gap-2 text-white">
            <li className="relative block rounded-md">
              <span>Information</span>
            </li>
          </ul>
        </div>
      </div>
      <section className="bg-background-2 w-full pb-5">
        <div className="shadow-background-2 mx-10 min-h-screen max-w-full rounded-xl bg-white p-10 [box-shadow:_rgba(0,_0,_0,_0.5)_0px_5px_10px_0px_inset]">
          Dashboard
        </div>
      </section>
    </>
  );
}
