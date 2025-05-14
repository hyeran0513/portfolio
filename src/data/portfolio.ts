import cloud from "../assets/images/portfolio/cloud.png";
import commtalk from "../assets/images/portfolio/commtalk.png";
import hdream from "../assets/images/portfolio/hdream.png";
import memo from "../assets/images/portfolio/memo.png";
import saasda from "../assets/images/portfolio/saasda.png";
import tripsphere from "../assets/images/portfolio/tripsphere.png";
import portfolio from "../assets/images/portfolio/portfolio.png";
import firebaseIcon from "../assets/images/icons/firebase.png";
import reactIcon from "../assets/images/icons/react.png";
import vueIcon from "../assets/images/icons/vue.png";
import nuxtIcon from "../assets/images/icons/nuxt.png";
import sassIcon from "../assets/images/icons/sass.png";
import tailwindIcon from "../assets/images/icons/tailwindcss.png";
import githubIcon from "../assets/images/icons/github.png";
import gitlabIcon from "../assets/images/icons/gitlab.png";
import figmaIcon from "../assets/images/icons/figma.png";
import zustandIcon from "../assets/images/icons/zustand.png";
import typescriptIcon from "../assets/images/icons/typescript.png";
import styledcomponents from "../assets/images/icons/styledcomponents.png";

export const portfolioData = [
  {
    id: 0,
    title: "소개용 포트폴리오",
    thumb: portfolio,
    type: "토이 프로젝트",
    projectType: "개인 프로젝트",
    date: "2025.05",
    description:
      "React와 TypeScript를 활용해 제작한 개인 포트폴리오 사이트입니다.",
    skills: [
      {
        id: "portfolio1",
        text: "React",
        icon: reactIcon,
      },
      {
        id: "portfolio2",
        text: "TypeScript",
        icon: typescriptIcon,
      },
      {
        id: "portfolio3",
        text: "Styled-Components",
        icon: styledcomponents,
      },
    ],
    feature: [
      "React + TypeScript 기반의 컴포넌트 구조 설계",
      "Framer Motion을 활용한 페이지 전환 애니메이션 및 인터렉션 구현",
      "Swiper를 활용한 프로젝트 슬라이드 UI 및 autoplay 기능 적용",
      "Styled-Components를 이용한 CSS-in-JS 방식 적용",
    ],
    contribution: 100,
    role: [
      "기획부터 디자인, 개발까지 전 과정을 수행",
      "섹션별 구성과 인터랙션 플로우 기획 및 구현",
      "프로젝트 정보 구조 설계 및 사용자 친화적인 UI 구성",
    ],
    preview: ["이후 추가"],
    insights: `React와 TypeScript 기반 프로젝트를 기획하고 완성하면서 컴포넌트 단위 개발 방식, props 및 상태 관리, 애니메이션 처리에 대한 이해를 높일 수 있었습니다.\nFramer Motion의 keyframe 애니메이션을 직접 활용해보며 동적인 UI 구현 경험을 쌓았고, TypeScript를 통해 컴포넌트 간의 명확한 타입 정의도 실현해볼 수 있는 경험이었습니다.`,
  },
  {
    id: 2,
    title: "TRIPSPHERE",
    thumb: tripsphere,
    type: "토이 프로젝트",
    projectType: "팀 프로젝트",
    date: "2025.03 - 2025.04",
    description: "국내 숙소 예약 기능 제공을 위한 여행 예약 사이트",
    skills: [
      {
        id: "tripsphere1",
        text: "React",
        icon: reactIcon,
      },
      {
        id: "tripsphere2",
        text: "Zustand",
        icon: zustandIcon,
      },
      {
        id: "tripsphere3",
        text: "Tailwindcss",
        icon: tailwindIcon,
      },
      {
        id: "tripsphere4",
        text: "Firebase",
        icon: firebaseIcon,
      },
      {
        id: "tripsphere5",
        text: "GitHub",
        icon: githubIcon,
      },
    ],
    feature: [
      "대실/숙박 예약 기능 추가 및 예약 결과 출력",
      "회원 인증, 상품 조회, 상품 옵션 선택 기능 제공",
      "장바구니, 주문 내역 확인, 찜 목록 조회 기능 구현",
    ],
    contribution: 100,
    role: [
      "메인페이지, 상품 상세 페이지, 내 정보 수정 페이지, 로그인 및 회원 가입 페이지, 포인트내역 페이지 구현",
      "Firebase 데이터베이스 설계",
      "모든 페이지 수정 및 기능 구현 전반 지원",
    ],
    preview: [
      "https://github.com/hyeran0513/tripsphere",
      "https://www.youtube.com/watch?v=1Ja1eEiGR60",
    ],
    insights: `부트캠프에서 팀장을 맡아 기획부터 개발, 배포까지 주도한 프로젝트입니다.\nservices 폴더에는 Firebase와 직접 통신하는 API 로직을 작성하고, hooks 폴더에서는 React Query의 useQuery, useMutation을 활용하여 데이터 요청/조작 로직을 분리했습니다.\n코드 리뷰를 진행했습니다. 예를 들면, React 개발환경에서 StrictMode로 인해 useEffect가 두 번 실행되어 상태가 초기화되는 문제를 발견했습니다.\n→ 이를 해결하기 위해 import.meta.env.MODE !== 'development' 조건을 제안하여 개발환경과 배포환경을 구분한 초기화 로직을 적용했습니다.`,
  },
  {
    id: 3,
    title: "커톡커톡",
    thumb: commtalk,
    type: "토이 프로젝트",
    projectType: "팀 프로젝트",
    date: "2024.06 - 2024.10",
    description:
      "사용자가 관심 카테고리를 선택하여 게시판을 커스터마이징할 수 있는 커뮤니티 웹사이트",
    skills: [
      {
        id: "commtalk1",
        text: "Nuxt",
        icon: nuxtIcon,
      },
      {
        id: "commtalk2",
        text: "SASS",
        icon: sassIcon,
      },
      {
        id: "commtalk3",
        text: "Figma",
        icon: figmaIcon,
      },
      {
        id: "commtalk4",
        text: "GitLab",
        icon: gitlabIcon,
      },
    ],
    feature: [
      "나만의 핀 설정: 원하는 게시판을 고정하여 맞춤형 피드 구성",
      "통합 검색: 전체 게시판에서 원하는 콘텐츠를 빠르게 검색",
      "공감 및 스크랩: 게시글에 공감을 표시하고 스크랩하여 저장",
    ],
    contribution: 100,
    role: [
      "나만의 핀 설정, 통합 검색, 공감 및 스크랩, 게시글 CRUD 기능 개발 및 구현",
    ],
    preview: [
      "https://github.com/hyeran0513/commtalk-nuxt",
      "https://www.youtube.com/watch?v=2CtmzoWrwbc",
    ],
    insights: `대학 동기와 함께 Vue2 + Spring Boot로 진행했던 프로젝트를 Nuxt 기반으로 재구성한 토이 프로젝트입니다.\nNuxt에서는 Composition API와 file-based routing을 활용해 컴포넌트 구조를 효율적으로 관리할 수 있었고, setup 함수를 통해 유연하고 일관된 방식으로 로직을 구성할 수 있었습니다.\nPinia와 tui-grid 등의 라이브러리를 활용해 상태 관리와 데이터 테이블 UI를 구현하며, Nuxt 환경에서의 개발 경험을 통해 프론트엔드 아키텍처에 대한 이해를 넓힐 수 있었습니다.`,
  },
  {
    id: 4,
    title: "TIP 매니저 활동지원 시스템(M.A.P)",
    thumb: memo,
    type: "실무 프로젝트",
    projectType: "팀 프로젝트",
    date: "2024.07 - 2024.09",
    description:
      "지사 관리, 정산 신청, GFSR, 활동 입력 등\n다양한 매니저 활동지원 시스템",
    skills: [
      {
        id: "memo1",
        text: "Vue",
        icon: vueIcon,
      },
      {
        id: "memo2",
        text: "SASS",
        icon: sassIcon,
      },
      {
        id: "memo3",
        text: "Figma",
        icon: figmaIcon,
      },
      {
        id: "memo4",
        text: "GitLab",
        icon: gitlabIcon,
      },
    ],
    feature: [
      "영업지도: 지사 필터를 통해 지도에서 해당 지사의 가입 설계, 가동 현황, 댓글 확인 가능",
      "활동: 내가 속한 지점의 모든 활동을 조회",
      "정산: 정산 신청 내역을 한번에 확인하고 정산 신청 가능",
    ],
    contribution: 90,
    role: ["정산신청, GFSR 찾기, 영업지도, 활동입력 구현 및 반응형 작업"],
    preview: ["https://tip.metlife.co.kr/memo"],
    insights: `활동 지원 정산 신청 기능 개발 시, 사용자가 출발지, 경유지, 도착지를 입력하면 차량 이동 거리와 정산 금액을 자동으로 계산하는 로직을 구현했습니다.\n기능 흐름은 ① 경로 입력 → ② 거리 계산 → ③ 비용 산출 순으로 구성되어 있으며, 초기 개발 단계에서는 컴포넌트 간 props 전달이 복잡해지는 props drilling 문제가 발생했습니다.\n이를 해결하기 위해 상태 관리 라이브러리인 Pinia를 도입해 전역 상태로 데이터를 효율적으로 관리했습니다.\n프론트엔드 개발을 단독으로 맡아 책임감을 가지고 진행했으며, 개발자로서 한 단계 성장할 수 있는 경험이었습니다.`,
  },
  {
    id: 5,
    title: "사스다(SAASDA) 서비스 홈페이지",
    thumb: cloud,
    type: "실무 프로젝트",
    projectType: "팀 프로젝트",
    date: "2024.01 - 2024.04",
    description:
      "윌비소프트 자사 프로그램인 사스다(SAASDA)에 대해\n소개하는 사이트",
    skills: [
      {
        id: "cloud1",
        text: "Nuxt",
        icon: nuxtIcon,
      },
      {
        id: "cloud2",
        text: "SASS",
        icon: sassIcon,
      },
      {
        id: "cloud3",
        text: "Figma",
        icon: figmaIcon,
      },
      {
        id: "cloud4",
        text: "GitLab",
        icon: gitlabIcon,
      },
    ],
    feature: [
      "서비스 소개: 자사 프로그램인 사스다(SAASDA)의 기능을 설명",
      "스토리: 윌비소프트가 진행한 프로젝트를 나열",
      "장애인 연계고용: 장애인 연계고용에 대한 소개",
    ],
    contribution: 70,
    role: [
      "메인페이지, 서비스소개, 스토리, 장애인 연계고용 등 구현 및 반응형 작업",
    ],
    preview: ["https://www.saasda.cloud/"],
    insights: `반복적으로 등장하는 배경 이미지를 효율적으로 처리하기 위해 background-image와 translateX를 조합한 애니메이션을 구현했습니다. \n스크롤 위치에 따라 애니메이션을 제어하기 위해 VueUse의 useElementVisibility와 useScroll을 활용했습니다.  \n이를 통해 사용자 인터랙션에 반응하는 시각적 효과를 구현했습니다.  \n대부분의 페이지를 직접 개발하며 인터랙티브한 UI/UX 구현에 중점을 두었습니다.`,
  },
  {
    id: 6,
    title: "사스다(SAASDA) 운영 홈페이지",
    thumb: saasda,
    type: "실무 프로젝트",
    projectType: "팀 프로젝트",
    date: "2023.11 -2024.09",
    description:
      "맞춤형 콘텐츠와 실시간 학습 현황 분석으로\n개개인에 꼭 맞는 학습 경험을 선사하는 교육 관리 시스템",
    skills: [
      {
        id: "saasda1",
        text: "Nuxt",
        icon: nuxtIcon,
      },
      {
        id: "saasda2",
        text: "SASS",
        icon: sassIcon,
      },
      {
        id: "saasda3",
        text: "Figma",
        icon: figmaIcon,
      },
      {
        id: "saasda4",
        text: "GitLab",
        icon: gitlabIcon,
      },
    ],
    feature: [
      "대시보드: 학습 데이터를 바탕으로 학습 성향과 진도율을 시각화하여 제공",
      "다양한 학습 활동 지원: 강의 영상 시청, 학습 메모 작성, 시험 응시 등",
      "나의 강의실: 개인의 학습 현황과 강의 진행 상황을 한눈에 확인할 수 있는 공간",
    ],
    contribution: 40,
    role: [
      "로그인, 회원가입, 마이홈, QR 코드 관리, 캘린더 등 구현 및 반응형 작업",
    ],
    preview: ["https://www.saasda.co.kr/"],
    insights: `캘린더 라이브러리를 사용하지 않고, 사용자 정의 UI에 맞춰 직접 달력을 구현했습니다.\n초기에는 백엔드에서 성능을 고려해 일정 데이터를 현재 달을 기준으로 이전 달, 현재 달, 다음 달까지만 3개월 단위로 불러오는 방식이었으나, 다음 달 클릭 시 데이터가 없어서 화면 전환이 되지 않는 UX 문제가 발생했습니다.\n이를 해결하기 위해 특정 달 전환 시 해당 월의 데이터를 비동기로 불러오는 방식으로 백엔드와 협의하여 API 로직을 개선했고, 프론트엔드에서는 월 변경 이벤트에 따라 데이터를 동적으로 처리할 수 있도록 수정했습니다.\n마이페이지 내 요소의 위치를 사용자가 자유롭게 변경할 수 있도록 vue-draggable과 flex를 활용해 인터랙티브한 UI를 구현했습니다.`,
  },
  {
    id: 7,
    title: "하남시진로진학통합플랫폼 꿈노트",
    thumb: hdream,
    type: "실무 프로젝트",
    projectType: "팀 프로젝트",
    date: "2023.11 - 2023.12",
    description: "진로 및 진학 정보와 다양한 체험 활동을 소개하는 플랫폼",
    skills: [
      {
        id: "hdream1",
        text: "Nuxt",
        icon: nuxtIcon,
      },
      {
        id: "hdream2",
        text: "SASS",
        icon: sassIcon,
      },
      {
        id: "hdream3",
        text: "Figma",
        icon: figmaIcon,
      },
      {
        id: "hdream4",
        text: "GitLab",
        icon: gitlabIcon,
      },
    ],
    feature: [
      "진로검사: 진로의사결정에 유용한 정보 제공",
      "진로정보: 관심 있는 직업에 대한 다양한 정보 확인",
      "진로체험: 다양한 진로교육 프로그램 신청",
    ],
    contribution: 30,
    role: ["회원가입, 마이페이지, 추천 사이트 등 구현 및 반응형 작업"],
    preview: ["https://www.hdream.or.kr/"],
    insights: `회원가입 과정은 유형 선택 후, 약관 동의 → 본인 인증 → 정보 입력 → 가입 완료 순으로 단계별로 나누어져 있었습니다.\n처음에는 각 단계를 index 값을 기준으로 관리했으나, 이 방식으로 진행하면서 상태 관리에서 문제가 발생했습니다.
단계 간 데이터 전파와 상태 업데이트가 제대로 되지 않아, 이전 단계에서 입력한 정보가 후속 단계에서 반영되지 않거나, 사용자가 직전 단계를 건너뛸 수 없는 이슈가 발생했습니다.\n이 문제를 해결하기 위해, 단계별 상태를 별도로 관리하고, 각 단계 간 상태 전파를 명확히 처리하는 방식으로 수정했습니다.\n이 과정에서 상태 관리의 중요성과 단계별 데이터 흐름의 관리에 대해 배울 수 있었습니다.`,
  },
];
