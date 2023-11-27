import AcmeLogo from "../ui/acme-logo";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex min-h-screen flex-col p-4
        ">
          <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-36">
            <AcmeLogo />
          </div>
          <div className="grid  place-content-center p-5">
            {children}
          </div>
        </main>
    );
  }