"use client";

import { useState } from "react";
import Link from "next/link";
import {
  questions,
  dimensions,
  getTierForScore,
  type DimensionId,
} from "@/data/assessment";

type Stage = "intro" | "questions" | "results";

const DIMENSION_STRONG_THRESHOLD = 9; // out of 12 (3 questions x 4 max)

export default function AssessmentPage() {
  const [stage, setStage] = useState<Stage>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const currentQuestion = questions[index];

  function selectAnswer(value: number) {
    const nextAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(nextAnswers);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setStage("results");
    }
  }

  function goBack() {
    if (index > 0) setIndex(index - 1);
  }

  function restart() {
    setStage("intro");
    setIndex(0);
    setAnswers({});
  }

  const totalScore = Object.values(answers).reduce((sum, v) => sum + v, 0);
  const tier = getTierForScore(totalScore);

  const dimensionScores: Record<DimensionId, number> = {
    strategy: 0,
    data: 0,
    people: 0,
    process: 0,
    governance: 0,
  };
  for (const question of questions) {
    dimensionScores[question.dimension] += answers[question.id] ?? 0;
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      {stage === "intro" && (
        <div className="text-center">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-emerald">
            AI Readiness Assessment
          </p>
          <h1 className="mt-4 font-heading text-3xl font-semibold text-navy">
            Where does your business actually stand with AI?
          </h1>
          <p className="mt-4 font-body text-base text-slate-600">
            {questions.length} short questions across strategy, data, people,
            process, and governance. Takes about five minutes. Straight
            answers only — no right answer to game.
          </p>
          <button
            onClick={() => setStage("questions")}
            className="mt-8 rounded-sm bg-emerald px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-navy"
          >
            Start the assessment
          </button>
        </div>
      )}

      {stage === "questions" && (
        <div>
          <div className="mb-8">
            <div className="h-1 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full bg-emerald transition-all"
                style={{
                  width: `${((index + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
            <p className="mt-2 font-body text-xs text-slate-600">
              Question {index + 1} of {questions.length}
            </p>
          </div>

          <p className="font-heading text-xs font-semibold uppercase tracking-wider text-emerald">
            {dimensions.find((d) => d.id === currentQuestion.dimension)?.name}
          </p>
          <h2 className="mt-3 font-heading text-xl font-semibold text-navy sm:text-2xl">
            {currentQuestion.prompt}
          </h2>

          <div className="mt-6 flex flex-col gap-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.label}
                onClick={() => selectAnswer(option.value)}
                className="rounded-sm border border-slate-200 px-5 py-4 text-left font-body text-sm text-navy transition-colors hover:border-emerald hover:bg-emerald-light/20"
              >
                {option.label}
              </button>
            ))}
          </div>

          {index > 0 && (
            <button
              onClick={goBack}
              className="mt-6 font-heading text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-navy"
            >
              &larr; Back
            </button>
          )}
        </div>
      )}

      {stage === "results" && (
        <div>
          <p className="text-center font-heading text-xs font-semibold uppercase tracking-[0.3em] text-emerald">
            Your Result
          </p>
          <h1 className="mt-4 text-center font-heading text-2xl font-semibold text-navy sm:text-3xl">
            {tier.name}
          </h1>
          <p className="mt-3 text-center font-heading text-base font-semibold text-navy">
            {tier.headline}
          </p>
          <p className="mx-auto mt-3 max-w-xl text-center font-body text-sm text-slate-600">
            {tier.description}
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {dimensions.map((dimension) => {
              const score = dimensionScores[dimension.id];
              const isStrong = score >= DIMENSION_STRONG_THRESHOLD;
              return (
                <div
                  key={dimension.id}
                  className="rounded-sm border border-slate-100 p-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-sm font-semibold text-navy">
                      {dimension.name}
                    </h3>
                    <span className="font-heading text-xs font-semibold text-emerald">
                      {score} / 12
                    </span>
                  </div>
                  {isStrong ? (
                    <p className="mt-2 font-body text-sm text-slate-600">
                      {dimension.strongMessage}
                    </p>
                  ) : (
                    <ul className="mt-2 list-disc space-y-1 pl-4 font-body text-sm text-slate-600">
                      {dimension.lowRecommendations.map((rec) => (
                        <li key={rec}>{rec}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <p className="font-body text-sm text-slate-600">
              Not sure what some of these terms mean? Check the{" "}
              <Link href="/glossary" className="text-emerald underline">
                glossary
              </Link>
              , or browse the{" "}
              <Link href="/one-pagers" className="text-emerald underline">
                one-pager library
              </Link>{" "}
              for practical guides.
            </p>
            <button
              onClick={restart}
              className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-navy"
            >
              Retake the assessment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
