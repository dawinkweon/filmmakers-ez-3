import { Advert } from "../../model";

const FAKE_ADVERTS: Advert[] = [
  {
    title:
      "새글[웹드라마]            숏드라마  연기하실 20-30대 여성 배우분 모십니다",
    age: " 여자 공무원  ",
    gender: "여자",
    parentPageIndex: "Page #1",
  },
  {
    title: "새글[웹드라마]            웹드라마 단역 여배우 모집 공고합니다.",
    age: " 여고생 3명  ",
    gender: "여자",
    parentPageIndex: "Page #1",
  },
  {
    title:
      "새글[단편영화]            한국예술종합학교 단편 영화 <당당한 생태계의 일원>에서 주.조연 남,여 배우를 모집합니다.",
    age: " 여자 주연(40대 후반-60대 초반)  ",
    gender: "남자,여자",
    parentPageIndex: "Page #1",
  },
  {
    title:
      "새글[웹드라마]            9월 15일 촬영 가능하신 여성 배우분들을 모집합니자",
    age: " 20-30대 여자 주인공 / 20-30대 여  ",
    gender: "여자",
    parentPageIndex: "Page #1",
  },
  {
    title:
      '새글[웹드라마]            유튜브 "밀크필름"에 출연 해 주실 남여 배우분들 모십니다',
    age: " 주인공  ",
    gender: "남자,여자",
    parentPageIndex: "Page #1",
  },
  {
    title:
      "새글[단편영화]            학생 단편영화 여자주인공을 찾고 있습니다!!!",
    age: " 20대 평범한 여대생  ",
    gender: "여자",
    parentPageIndex: "Page #1",
  },
  {
    title:
      "새글[단편영화]            한국영상대학교 영화영상과 영화제작워크숍 <안녕히, 안녕히>에서 주.조연 남, 여 배우를 모집합니다.2",
    age: " 남주연, 여조연(60대 후~ 70대   ",
    gender: "남자,여자",
    parentPageIndex: "Page #1",
  },
  {
    title:
      "새글[단편영화]            경남아카데미 제작지원작 <가만히 눈을 감고>에서 주연 남, 여 배우를 모집합니다.  (20대 중반 ~ 30대 초반)",
    age: " 남자 주인공(20대 중~30대초),   ",
    gender: "남자,여자",
    parentPageIndex: "Page #1",
  },
  {
    title:
      "새글[단편영화]            중앙대학교 단편 영화 <만약 내일 죽는다면>에서 20대 여자 주연 배우를 구합니다.",
    age: " 20대 여자  ",
    gender: "여자",
    parentPageIndex: "Page #1",
  },
  {
    title:
      "새글[단편영화]            광주 제작지원 영화  < 소시오 > 에서 여자 주연 배우 찾습니다.1",
    age: " 20대 후반 30대 초반 여자배우  ",
    gender: "여자",
    parentPageIndex: "Page #1",
  },
  {
    title:
      "새글[웹드라마]            [기업 브랜디드 웹드라마] 30대 초중반 남성 주연 배우 1명을 구합니다.2",
    age: " 남주인공  ",
    gender: "남자",
    parentPageIndex: "Page #1",
  },
  {
    title:
      "새글[웹드라마]            [기업 브랜디드 웹드라마] 2~30대 여성 주연 배우 1명을 구합니다.3",
    age: " 여주인공  ",
    gender: "여자",
    parentPageIndex: "Page #1",
  },
  {
    title:
      "새글[웹드라마]            서울시교육청 홍보용 웹드라마 장학사/교수 역할 남자배우 모집합니다.",
    age: " 장학사 역할 남자배우 1명, 교  ",
    gender: "남자",
    parentPageIndex: "Page #1",
  },
  {
    title:
      "새글[단편영화]            인하대학교 영상제작학회 알케미스트 단편영화 <일장추몽>에서 주연배우님들을 모집합니다.2",
    age: " 20대 초중반 여대생, 20대 남성  ",
    gender: "남자,여자",
    parentPageIndex: "Page #1",
  },
  {
    title:
      "새글[단편영화]            대전정보문화산업진흥원에서 제작지원을 받은 단편영화 <실종 선고 5년 차>의 여자 아역 배우를 찾고 있습니다.",
    age: " 여자아이 12~14세  / 여자주인  ",
    gender: "여자",
    parentPageIndex: "Page #1",
  },
  {
    title:
      "새글[단편영화]            대전정보문화산업진흥원에서 제작지원을 받은 단편영화 <실종 선고 5년 차>의 중년 여배우를 찾고 있습니다.",
    age: " 여자 54세 / 권유정 친모 / 전   ",
    gender: "여자",
    parentPageIndex: "Page #1",
  },
  {
    title:
      "새글[단편영화]            대전정보문화산업진흥원에서 제작지원을 받은 단편영화 <실종 선고 5년 차>의 50대 후반 중년 여배우를 찾고 있습니다",
    age: " 여자  57세 / 실종자 가족  모임  ",
    gender: "여자",
    parentPageIndex: "Page #2",
  },
  {
    title:
      "새글[장편 상업영화]            영화 (물결)에서 남,녀 스탠드 인 역할해주실 배우님을 섭외합니다.",
    age: " 스탠드 인  ",
    gender: "남자,여자",
    parentPageIndex: "Page #2",
  },
  {
    title:
      "새글[단편영화]            대전정보문화산업진흥원에서 제작지원을 받은 단편영화 <실종 선고 5년 차>의 20대 남자 배우를 찾고 있습니다.",
    age: " 남자  24세 / 실종자 가족 모임  ",
    gender: "남자",
    parentPageIndex: "Page #2",
  },
  {
    title:
      "새글[단편영화]            대전정보문화산업진흥원에서 제작지원을 받은 단편영화 <실종 선고 5년 차>의 30대 남자 배우를 찾고 있습니다.",
    age: " 남자 32세 / 실종자 가족 모임  ",
    gender: "남자",
    parentPageIndex: "Page #2",
  },
  {
    title:
      "새글[단편영화]            대전정보문화산업진흥원에서 제작지원을 받은 단편영화 <실종 선고 5년 차>의 중년 여배우를 찾고 있습니다.",
    age: " 여자 54세 / 권유정 친모 / 전   ",
    gender: "여자",
    parentPageIndex: "Page #2",
  },
  {
    title:
      "새글[단편영화]            대전정보문화산업진흥원에서 제작지원을 받은 단편영화 <실종 선고 5년 차>의 50대 후반 중년 여배우를 찾고 있습니다",
    age: " 여자  57세 / 실종자 가족  모임  ",
    gender: "여자",
    parentPageIndex: "Page #3",
  },
  {
    title:
      "새글[장편 상업영화]            영화 (물결)에서 남,녀 스탠드 인 역할해주실 배우님을 섭외합니다.",
    age: " 스탠드 인  ",
    gender: "남자,여자",
    parentPageIndex: "Page #3",
  },
  {
    title: "새글[단편영화]            모스키토",
    age: " 카페 주인‘쇼’ 역, 카페 손  ",
    gender: "여자",
    parentPageIndex: "Page #3",
  },
  {
    title:
      "새글[단편영화]            서경대학교 영화영상학과 워크샵 <선물>에서 5-7세 주연 여자 아역 배우님을 모십니다",
    age: " 5-7세 여자아이  ",
    gender: "여자",
    parentPageIndex: "Page #3",
  },
  {
    title: "새글[단편영화]            [20대 여자배우] 단편영화",
    age: " 20대 여자 회사원  ",
    gender: "여자",
    parentPageIndex: "Page #3",
  },
  {
    title:
      "새글[웹드라마]            성인영화 출연하실 여자 배우(일반인&모델)분들의 많은 지원 바랍니다.",
    age: " 20대 일반 직장인, 대학생, 나  ",
    gender: "여자",
    parentPageIndex: "Page #4",
  },
  {
    title:
      "새글[단편영화]            인덕대학교 방송영상미디어학과 3학년 졸업작품 단편드라마 <VR(가제)>에서 배우님을 모집합니다.2",
    age: " 20대 초반 남자배우 2명 (주, 조  ",
    gender: "남자,여자",
    parentPageIndex: "Page #4",
  },
  {
    title:
      "새글[단편영화]            다이어트 바이럴 광고 영상에 출연해 주실분 연락 부탁드립니다.",
    age: " 다이어터  ",
    gender: "여자",
    parentPageIndex: "Page #4",
  },
  {
    title:
      "새글[단편영화]            단편 영화 <각자만의 시간>(가제) 40,50,60대 주연 배우님들을 모집합나다.",
    age: " 40대 여성, 50대 남성, 60대 여성  ",
    gender: "남자,여자",
    parentPageIndex: "Page #4",
  },
  {
    title:
      "[단편영화]            경복궁 관련 짧게 인터뷰 해주실 어린아이, 20대, 40대 분 모십니다.",
    age: " 아이, 20대, 40대  ",
    gender: "남자,여자",
    parentPageIndex: "Page #5",
  },
  {
    title:
      "[단편영화]            동아방송예술대학교 졸업영화 <재롱잔치>에서 유치원 선생님 역을 맡아줄 여자 단역을 구합니다1",
    age: " 유치원 선생님 /20대~30대 중 후  ",
    gender: "여자",
    parentPageIndex: "Page #5",
  },
  {
    title:
      "[OTT/TV 드라마]            OTT드라마  올노출 배드씬 대역 가능하신 여자배우분 구합니다",
    age: " 여배우 대역  ",
    gender: "여자",
    parentPageIndex: "Page #5",
  },
  {
    title:
      "[단편영화]            TBS x 서울특별시가 함께하는 청소년 마약 근절 캠페인 영상",
    age: " 고등학생 연기 가능한 20대 성  ",
    gender: "남자,여자",
    parentPageIndex: "Page #6",
  },
  {
    title:
      "[OTT/TV 드라마]            *급구* EBS <명의>에서 6-70대 여성 재연배우님을 구합니다!",
    age: " 6-70대 여성  ",
    gender: "여자",
    parentPageIndex: "Page #6",
  },
  {
    title:
      "[단편영화]            단편영화 <괜찮아요 맛있으면 0Kcal> 주연배우님 모십니다(20대 후반 남성, 초등학교 2학년 여자 아역)",
    age: " 20대 후반 화가지망생(남), 9살   ",
    gender: "남자,여자",
    parentPageIndex: "Page #6",
  },
  {
    title:
      "[단편영화]            건축대학교 영화영상학과 4학년 졸업작품 <구금>에서 주연:  40대 남성 역할, 30-40대 여성 역할 찾습니다.",
    age: " 몽연,용건  ",
    gender: "남자,여자",
    parentPageIndex: "Page #6",
  },
  {
    title:
      "[웹드라마]            패션 웹드라마 여자 모델 역할 (168cm이상) 배우  모집합니다",
    age: " 20대후반 셀러브리티 모델  ",
    gender: "여자",
    parentPageIndex: "Page #6",
  },
  {
    title:
      "[OTT/TV 드라마]            *급구* EBS <명의>에서 6-70대 여성 재연배우님을 구합니다!",
    age: " 6-70대 여성  ",
    gender: "여자",
    parentPageIndex: "Page #6",
  },
  {
    title:
      "[단편영화]           마감 핑크리본영화제 초단편 20대후반~30대초반 여배우 모집",
    age: " 30대 초반 / 유산의 아픔이 있  ",
    gender: "여자",
    parentPageIndex: "Page #6",
  },
  {
    title: "[웹드라마]            웹드라마<모닝글로리> 오디션 공고",
    age: " 주, 조연  ",
    gender: "남자,여자",
    parentPageIndex: "Page #6",
  },
  {
    title:
      "[단편영화]            국민대학교 영화전공 졸업작품 <차박만 죽어라 했는데> 여자 / 남자 주연 배우 두 분 모집합니다.2",
    age: " 30대 초반 여, 20대 후반 남  ",
    gender: "남자,여자",
    parentPageIndex: "Page #6",
  },
  {
    title:
      '[웹드라마]            하이틴 판타지 웹드라마 "이 세계에서" 배역 캐스팅 진행중1',
    age: " 자세한 설명은 아래에  ",
    gender: "남자,여자",
    parentPageIndex: "Page #6",
  },
  {
    title:
      "[웹드라마]            부산신용보증재단 웹드라마 배우 공고_첨부 파일 꼭 확인해주세요.",
    age: " 29세 힘나연  ",
    gender: "여자",
    parentPageIndex: "Page #6",
  },
];

export const FIXTURES = { FAKE_ADVERTS };
