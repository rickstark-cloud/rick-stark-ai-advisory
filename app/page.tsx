export default function SplashPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-white.png"
        alt="Rick Stark"
        className="w-64 sm:w-80"
      />
      <div className="mt-6 h-px w-16 bg-emerald" />
      <p className="mt-6 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-emerald-light">
        AI Advisory
      </p>
      <p className="mt-4 max-w-md font-body text-base text-slate-200">
        Clear counsel on AI for owners and leaders. Coming soon.
      </p>
    </main>
  );
}
