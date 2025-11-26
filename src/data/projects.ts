export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  imageUrls: string[];
  tags: string[];
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'project3',
    title: 'BSS 배터리 장치 관리 및 업체 관리 백오피스 개발',
    description:
      '주요 역할: 프론트엔드 개발 리드. React와 TypeScript를 사용하여 반응형 UI를 구축하고, Redux를 이용한 상태 관리를 담당했습니다. API 연동 및 성능 최적화를 통해 초기 로딩 속도를 50% 개선했습니다.',
    detailedDescription:
      '이 프로젝트는 최신 웹 기술을 활용하여 사용자 친화적인 이커머스 플랫폼을 구축하는 것을 목표로 했습니다. 주요 기능으로는 상품 목록, 상세 페이지, 장바구니, 결제 시스템이 포함됩니다. 성능 최적화를 위해 코드 분할 및 이미지 지연 로딩을 적용했으며, 그 결과 Lighthouse 점수가 20점 이상 향상되었습니다. 또한, Jest와 React Testing Library를 사용한 단위 및 통합 테스트를 통해 코드의 안정성을 확보했습니다.',
    imageUrls: ['/project3/bss_ui.png', '/project3/bss_architecture.png', '/project3/bss_service.png'],
    tags: ['Java', 'Spring Boot', 'MySQL', 'Vue.js'],
    // githubUrl: 'https://github.com/hjms777',
  },
  {
    id: 'project2',
    title: '백오피스 RESTful API 작업',
    description:
      '주요 역할: 풀스택 개발. Next.js를 활용하여 SEO에 최적화된 웹사이트를 구축했으며, Strapi CMS를 도입하여 콘텐츠 관리 효율성을 높였습니다. 사용자 인증 및 API 개발을 담당했습니다.',
    detailedDescription:
      '기존의 노후된 기업 웹사이트를 현대적인 디자인과 기술 스택으로 전면 개편하는 프로젝트였습니다. Next.js의 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 활용하여 검색 엔진 최적화(SEO) 점수를 크게 향상시켰습니다. 콘텐츠 관리 시스템(CMS)으로 Strapi를 도입하여 마케팅 팀이 직접 콘텐츠를 수정하고 배포할 수 있도록 하여 운영 효율성을 높였습니다.',
    imageUrls: [
      'https://placehold.co/600x400/DDD/31343C',
      'https://placehold.co/600x400/CCC/31343C',
      'https://placehold.co/600x400/EEE/31343C',
    ],
    tags: ['Next.js', 'TypeScript', 'MySQL', 'Swagger'],
    // githubUrl: 'https://github.com/hjms777',
  },
  {
    id: 'project1',
    title: '신규 대시보드 개발 및 운행기록 통계 기록화',
    description:
      '주요 역할: 프론트엔드 개발. Chart.js와 React를 사용하여 데이터 시각화 대시보드를 개발했습니다. 사용자가 복잡한 데이터를 쉽게 이해할 수 있도록 인터랙티브한 UI/UX를 구현하는 데 집중했습니다.',
    detailedDescription:
      '모바일 앱의 사용자 데이터를 분석하고 시각화하는 관리자용 대시보드를 개발했습니다. Chart.js를 커스터마이징하여 다양한 형태의 인터랙티브 차트를 구현했으며, 사용자가 원하는 데이터를 필터링하고 정렬할 수 있는 기능을 제공했습니다. Firebase를 백엔드로 사용하여 실시간 데이터 동기화를 구현했습니다.',
    imageUrls: [
      'https://placehold.co/600x400/CCC/31343C',
      'https://placehold.co/600x400/EEE/31343C',
      'https://placehold.co/600x400/DDD/31343C',
    ],
    tags: ['Java', 'Spring Boot', 'MySQL', 'Vue.js'],
    // githubUrl: 'https://github.com/hjms777',
  },
];
