"use client";

import { useEffect, useMemo, useState } from "react";
import type { Feature, Status } from "@/lib/features";
import { initialFeatures } from "@/lib/features";
import { FeatureCard } from "@/components/FeatureCard";

const STORAGE_KEY = "roadmap-votes-v1";

const columns: { status: Status; title: string; subtitle: string }[] = [
  { status: "planned", title: "Planned", subtitle: "예정" },
  { status: "in-progress", title: "In Progress", subtitle: "진행 중" },
  { status: "completed", title: "Completed", subtitle: "완료" },
];

export function RoadmapBoard() {
  const [features, setFeatures] = useState<Feature[]>(initialFeatures);
  const [voted, setVoted] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as {
          votes?: Record<string, number>;
          voted?: Record<string, boolean>;
        };
        setVoted(saved.voted ?? {});
        setFeatures((current) =>
          current.map((item) => ({
            ...item,
            votes: saved.votes?.[item.id] ?? item.votes,
          })),
        );
      }
    } catch {
      // Keep default sample data if storage is unavailable.
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    const votes = Object.fromEntries(features.map((item) => [item.id, item.votes]));
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ votes, voted }));
  }, [features, voted, ready]);

  const grouped = useMemo(() => {
    return columns.map((column) => ({
      ...column,
      items: features.filter((item) => item.status === column.status),
    }));
  }, [features]);

  function toggleVote(id: string) {
    const alreadyVoted = Boolean(voted[id]);
    setVoted((prev) => ({ ...prev, [id]: !alreadyVoted }));
    setFeatures((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, votes: Math.max(0, item.votes + (alreadyVoted ? -1 : 1)) }
          : item,
      ),
    );
  }

  return (
    <section className="mt-10 grid grid-cols-1 gap-4 overflow-x-auto md:grid-cols-3">
      {grouped.map((column) => (
        <div
          key={column.status}
          className="min-w-0 rounded-2xl border border-line bg-mist/60 p-3"
        >
          <header className="mb-3 flex items-baseline justify-between px-2 pt-1">
            <div>
              <h2 className="text-sm font-semibold tracking-tight text-ink">
                {column.title}
              </h2>
              <p className="text-xs text-stone">{column.subtitle}</p>
            </div>
            <span className="rounded-full bg-white px-2 py-0.5 text-xs text-stone">
              {column.items.length}
            </span>
          </header>
          <div className="space-y-3">
            {column.items.map((feature) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                voted={Boolean(voted[feature.id])}
                onVote={() => toggleVote(feature.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
