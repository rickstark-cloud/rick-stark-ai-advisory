import Link from "next/link";

const links = [
  { href: "/assessment", label: "Assessment" },
  { href: "/glossary", label: "Glossary" },
  { href: "/one-pagers", label: "One-Pagers" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Rick Stark" className="h-8 w-auto sm:h-9" />
          <span className="hidden font-heading text-xs font-semibold uppercase tracking-[0.25em] text-navy-70 sm:inline">
            AI Advisory
          </span>
        </Link>
        <nav className="flex items-center gap-5 sm:gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-xs font-semibold uppercase tracking-wider text-navy transition-colors hover:text-emerald sm:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
