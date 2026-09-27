"use client";

import type { Feature } from "@/lib/features";

type FeatureCardProps = {
  feature: Feature;
  voted: boolean;
  onVote: () => void;
};

export function FeatureCard({ feature, voted, onVote }: FeatureCardProps) {
  return (
    <article className="rounded-xl border border-line bg-white p-4 shadow-card">
      <h3 className="text-[15px] font-semibold leading-snug text-ink">
        {feature.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-stone">
        {feature.description}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onVote}
          aria-pressed={voted}
          className={
            voted
              ? "inline-flex items-center gap-1.5 rounded-lg border border-ink bg-ink px-2.5 py-1.5 text-xs font-medium text-sun-soft"
              : "inline-flex items-center gap-1.5 rounded-lg border border-line bg-paper px-2.5 py-1.5 text-xs font-medium text-ink transition hover:border-ink/30 hover:bg-sun-soft"
          }
        >
          <span aria-hidden>👍</span>
          Upvote
        </button>
        <span className="text-xs tabular-nums text-stone">
          추천 {feature.votes}
        </span>
      </div>
    </article>
  );
}
