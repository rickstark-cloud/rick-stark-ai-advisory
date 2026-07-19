export default function SiteFooter() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-white.png" alt="Rick Stark" className="h-6 w-auto opacity-90" />
        <p className="font-body text-sm text-slate-200">
          Rick Stark &middot; Advisor &middot; (719) 337-9625 &middot; RickStark@Me.com
        </p>
      </div>
    </footer>
  );
}
