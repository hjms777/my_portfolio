export interface Project {
  id: string;
  title: string;
  description: string;
  detailSections: {
    title: string;
    items: string[];
  }[];
  imageUrls: string[];
  tags: string[];
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'project3',
    title: 'BSS 배터리 장치 관리 및 업체 관리 백오피스 개발',
    description:
      'BSS 백오피스 원격 관제·제어 시스템을 구축해 웹에서 스테이션/슬롯 상태 확인과 문·전원·히터 원격 제어를 가능하게 했습니다.',
    detailSections: [
      {
        title: '상황',
        items: [
          '외주로 구축된 BSS는 C# 기반 station-manager와 chargeBox 중심 구조로 동작했지만 웹 백오피스에서 실시간 상태 확인과 원격 제어가 불가능했습니다.',
        ],
      },
      {
        title: '과제',
        items: [
          '웹에서 스테이션/슬롯 상태를 실시간으로 확인하고 문·전원·히터를 원격 제어할 수 있는 end-to-end 제어 경로를 구축해야 했습니다.',
          '운영/정지 판단 기준을 정립하고 제어 요청 및 상태 변경 이력을 추적 가능하게 설계해야 했습니다.',
        ],
      },
      {
        title: '행동 및 의사결정',
        items: [
          'Web(API) → WebSocket(세션) → chargeBox → station-manager 흐름으로 제어 파이프라인을 설계하고 구축했습니다.',
          'WebSocket 연결/해제 이벤트와 heartbeat를 기준으로 운영/정지 상태 판단 로직을 반영했습니다.',
          '즉시 ACK가 없는 구조를 고려해 제어 후 상태 재조회로 결과를 검증하도록 동선을 설계했습니다.',
          '중복 제어를 줄이기 위해 UI 3초 대기 정책을 적용했습니다.',
        ],
      },
      {
        title: '결과',
        items: [
          '백오피스 웹에서 장비 상태를 실시간 확인하고 현장 중심 기능이던 제어(문/전원/히터)를 원격 수행할 수 있도록 통합했습니다.',
          '제어 요청과 상태 이벤트 이력을 누적해 장애 발생 시 원인 추적이 가능한 운영 기반을 마련했습니다.',
        ],
      },
    ],
    imageUrls: ['/project3/bss_ui.png', '/project3/bss_architecture.png', '/project3/bss_service.png'],
    tags: ['Java', 'Spring Boot', 'WebSocket', 'MySQL'],
    // githubUrl: 'https://github.com/hjms777',
  },
  {
    id: 'project2',
    title: '백오피스 RESTful API 작업',
    description:
      'NestJS 기반 백오피스 API 서버를 구축해 인증/인가를 코드 레벨에서 강제하고, 공통 모듈로 중복 정책의 확산을 억제해 운영 안정성을 높였습니다.',
    detailSections: [
      {
        title: '상황',
        items: [
          'NestJS로 전기 오토바이 셰어링 백오피스 API 서버를 구축할 때 admin/superAdmin 권한 분리가 필요했지만 초기에 정책 일관성이 낮을 수 있는 상황이었습니다.',
          'admin, user, task API 서버가 병행되면서 중복 코드가 빠르게 늘어날 위험이 있었습니다.',
        ],
      },
      {
        title: '과제',
        items: [
          'admin/superAdmin 접근 정책을 코드 구조로 강제해 보안 실수를 줄여야 했습니다.',
          '서버 분리 환경에서도 공통 도메인·DTO·외부 API 호출·응답 포맷·페이징은 재사용 가능한 구조로 유지해야 했습니다.',
        ],
      },
      {
        title: '행동 및 의사결정',
        items: [
          'JWT + Guard 기반으로 인증/인가 정책을 표준화하고 superAdmin 전용 기능(업체 관리 등)을 코드 분기와 구조로 분리했습니다.',
          'adminAuth 모듈에서 토큰 만료/미존재 처리와 재발급 후 재요청 흐름을 표준화했습니다.',
          'Monorepo(packages/admin, packages/user, packages/task)에서 common 패키지를 두어 공통 도메인 서비스를 통합했습니다.',
        ],
      },
      {
        title: '결과',
        items: [
          '권한 정책이 코드로 강제되어 민감 기능을 안정적으로 제한 운영할 수 있게 되었습니다.',
          '공통 모듈 기반 운영으로 인증·응답 처리 일관성과 유지보수 효율이 개선되었습니다.',
        ],
      },
    ],
    imageUrls: ['/preparing.png'],
    tags: ['TypeScript', 'NestJS', 'JWT', 'Swagger', 'Monorepo'],
    // githubUrl: 'https://github.com/hjms777',
  },
  {
    id: 'project1',
    title: '신규 대시보드 개발 및 운행기록 통계 기록화',
    description:
      '운행기록 통계 대시보드에서 발생하던 조회 지연을 데이터 구조 개선과 쿼리/인덱스 최적화로 해결해 운영 화면 응답 속도를 5초에서 1초 이내로 단축했습니다.',
    detailSections: [
      {
        title: '상황',
        items: [
          '수만 대 차량의 주행·에러 데이터를 다루는 대시보드에서 특정 조건 조회 시 5초 이상 지연되어 운영 대응이 어려웠습니다.',
        ],
      },
      {
        title: '과제',
        items: [
          '운영 화면에서 에러 상태와 최근 운행 기록을 빠르게 파악할 수 있어야 했고',
          '대량 조인과 통계 쿼리를 유지하면서도 응답시간을 1초 이내로 줄여야 했습니다.',
        ],
      },
      {
        title: '행동 및 의사결정',
        items: [
          '병목을 단일 쿼리 조정이 아닌 데이터 적재 방식 및 조회 패턴 관점에서 재설계했습니다.',
          'Terminal 테이블에 에러 상태값과 마지막 주행 기록 SeqNo 컬럼을 추가했습니다.',
          '주기 보고 데이터(heartbeat) 수신 시 해당 컬럼을 일괄 갱신해 최신 상태를 유지하도록 개선했습니다.',
          '복잡한 JOIN 경로와 인덱스를 재정비해 조회 경로를 단축했습니다.',
        ],
      },
      {
        title: '결과',
        items: [
          '조회 시간을 최대 5초 → 1초 이내로 단축했습니다.',
          '운영 화면에서 핵심 상태를 즉시 확인할 수 있어 대응 효율과 유지보수성이 함께 개선되었습니다.',
        ],
      },
    ],
    imageUrls: ['/preparing.png'],
    tags: ['Java', 'Spring Boot', 'MySQL'],
    // githubUrl: 'https://github.com/hjms777',
  },
];
