import Link from "next/link";

const sections = [
  {
    href: "/assessment",
    title: "AI Readiness Assessment",
    description:
      "Answer a short set of questions, get a clear score, and walk away with next steps tailored to where your business actually stands.",
    cta: "Take the assessment",
  },
  {
    href: "/glossary",
    title: "Glossary",
    description:
      "AI terms explained in plain language. No jargon explaining jargon — just straight, searchable definitions.",
    cta: "Browse the glossary",
  },
  {
    href: "/one-pagers",
    title: "One-Pager Library",
    description:
      "Practical, printable guides on the AI topics that matter to owners and leaders — growing over time.",
    cta: "View the library",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-navy px-6 py-20 text-center sm:py-28">
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-emerald-light">
          AI Advisory
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl text-balance font-heading text-3xl font-semibold text-white sm:text-4xl">
          Clear counsel on AI, for owners and leaders.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-balance font-body text-base text-slate-200 sm:text-lg">
          Straight answers, no hype. Find out where you stand, learn the terms that
          matter, and get practical guides you can actually use.
        </p>
        <Link
          href="/assessment"
          className="mt-8 inline-block rounded-sm bg-emerald px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-emerald-light hover:text-navy"
        >
          Take the AI Readiness Assessment
        </Link>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-16 sm:grid-cols-3 sm:py-20">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group flex flex-col rounded-sm border border-slate-100 p-6 transition-colors hover:border-emerald"
          >
            <h2 className="font-heading text-lg font-semibold text-navy">
              {section.title}
            </h2>
            <p className="mt-3 flex-1 font-body text-sm text-slate-600">
              {section.description}
            </p>
            <span className="mt-4 font-heading text-xs font-semibold uppercase tracking-wider text-emerald group-hover:underline">
              {section.cta} &rarr;
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}
