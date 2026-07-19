import { getOnePagers } from "@/lib/one-pagers";

export default function OnePagersPage() {
  const onePagers = getOnePagers();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-center font-heading text-xs font-semibold uppercase tracking-[0.3em] text-emerald">
        One-Pager Library
      </p>
      <h1 className="mt-4 text-center font-heading text-3xl font-semibold text-navy">
        Practical guides, one page at a time.
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-center font-body text-base text-slate-600">
        Short, printable guides on the AI topics that matter to owners and
        leaders. This library grows over time.
      </p>

      {onePagers.length === 0 ? (
        <div className="mx-auto mt-12 max-w-md rounded-sm border border-dashed border-slate-200 p-8 text-center">
          <p className="font-body text-sm text-slate-600">
            No one-pagers yet. Drop a PDF into{" "}
            <code className="rounded-sm bg-slate-50 px-1.5 py-0.5 font-mono text-xs text-navy">
              public/one-pagers/
            </code>
            , commit, and push to add the first one.
          </p>
        </div>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {onePagers.map((onePager) => (
            <a
              key={onePager.fileName}
              href={`/one-pagers/${encodeURIComponent(onePager.fileName)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-sm border border-slate-100 p-6 transition-colors hover:border-emerald"
            >
              <h2 className="font-heading text-base font-semibold text-navy">
                {onePager.title}
              </h2>
              <p className="mt-2 font-body text-xs text-slate-600">
                {onePager.date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <span className="mt-4 font-heading text-xs font-semibold uppercase tracking-wider text-emerald group-hover:underline">
                View PDF &rarr;
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
