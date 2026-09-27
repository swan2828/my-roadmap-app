export type Status = "planned" | "in-progress" | "completed";

export type Feature = {
  id: string;
  title: string;
  description: string;
  status: Status;
  votes: number;
};

export const initialFeatures: Feature[] = [
  {
    id: "dark-mode",
    title: "다크 모드",
    description: "눈의 피로를 줄이는 부드러운 야간 테마를 추가합니다.",
    status: "planned",
    votes: 24,
  },
  {
    id: "public-api",
    title: "공개 API",
    description: "외부 도구와 연동할 수 있는 REST API를 제공합니다.",
    status: "planned",
    votes: 18,
  },
  {
    id: "export-md",
    title: "Markdown 내보내기",
    description: "로드맵을 노션이나 깃허브에 붙여넣을 수 있게 내보냅니다.",
    status: "planned",
    votes: 11,
  },
  {
    id: "upvote",
    title: "방문자 추천 투표",
    description: "방문자가 원하는 기능에 추천을 남겨 우선순위를 정합니다.",
    status: "in-progress",
    votes: 42,
  },
  {
    id: "changelog",
    title: "체인지로그 타임라인",
    description: "출시 노트를 날짜순으로 모아 한눈에 보여줍니다.",
    status: "in-progress",
    votes: 31,
  },
  {
    id: "kanban",
    title: "3열 칸반 보드",
    description: "예정 · 진행 중 · 완료 상태로 기능을 정리합니다.",
    status: "completed",
    votes: 56,
  },
  {
    id: "landing",
    title: "노션 스타일 랜딩",
    description: "노랑, 검정, 회색만으로 차분한 첫 화면을 구성합니다.",
    status: "completed",
    votes: 47,
  },
];
