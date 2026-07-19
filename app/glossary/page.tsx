"use client";

import { useMemo, useState } from "react";
import { glossaryTerms } from "@/data/glossary";

const categories = Array.from(
  new Set(glossaryTerms.map((t) => t.category).filter(Boolean)),
) as string[];

export default function GlossaryPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return glossaryTerms.filter((entry) => {
      const matchesCategory = !category || entry.category === category;
      const matchesQuery =
        !normalizedQuery ||
        entry.term.toLowerCase().includes(normalizedQuery) ||
        entry.definition.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-center font-heading text-xs font-semibold uppercase tracking-[0.3em] text-emerald">
        Glossary
      </p>
      <h1 className="mt-4 text-center font-heading text-3xl font-semibold text-navy">
        AI terms, in plain language.
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-center font-body text-base text-slate-600">
        No jargon explaining jargon. Search or browse by category.
      </p>

      <div className="mt-10">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search terms..."
          className="w-full rounded-sm border border-slate-200 px-4 py-3 font-body text-sm text-navy placeholder:text-slate-400 focus:border-emerald focus:outline-none"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setCategory(null)}
            className={`rounded-full border px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider transition-colors ${
              category === null
                ? "border-emerald bg-emerald text-white"
                : "border-slate-200 text-slate-600 hover:border-emerald hover:text-emerald"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full border px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider transition-colors ${
                category === cat
                  ? "border-emerald bg-emerald text-white"
                  : "border-slate-200 text-slate-600 hover:border-emerald hover:text-emerald"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 font-body text-xs text-slate-600">
        {filteredTerms.length} of {glossaryTerms.length} terms
      </p>

      <dl className="mt-4 flex flex-col divide-y divide-slate-100">
        {filteredTerms.map((entry) => (
          <div key={entry.term} className="py-5">
            <dt className="flex items-baseline justify-between gap-4">
              <span className="font-heading text-base font-semibold text-navy">
                {entry.term}
              </span>
              {entry.category && (
                <span className="whitespace-nowrap font-heading text-[10px] font-semibold uppercase tracking-wider text-emerald">
                  {entry.category}
                </span>
              )}
            </dt>
            <dd className="mt-2 font-body text-sm text-slate-600">
              {entry.definition}
              {entry.example && (
                <span className="mt-1 block text-slate-600/80">
                  <span className="font-semibold text-navy-70">Example: </span>
                  {entry.example}
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>

      {filteredTerms.length === 0 && (
        <p className="mt-10 text-center font-body text-sm text-slate-600">
          No terms match &ldquo;{query}&rdquo;.
        </p>
      )}
    </div>
  );
}
