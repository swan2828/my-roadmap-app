import { RoadmapBoard } from "@/components/RoadmapBoard";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8">
        <header className="max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-xs text-stone">
            <span className="h-1.5 w-1.5 rounded-full bg-sun" />
            Public Roadmap
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Roadmap & Changelog
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-stone">
            인디 개발자가 만들고 있는 기능을 투명하게 공개합니다. 관심 있는
            기능에 추천을 남겨 다음 우선순위를 함께 정해주세요.
          </p>
        </header>
        <RoadmapBoard />
      </div>
    </main>
  );
}
