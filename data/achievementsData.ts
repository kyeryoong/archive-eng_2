export interface TextProps {
  mainText: string;
  subText: string;
}

export interface AchievementsProps {
  korTitle: string;
  engTitle: string;
  info: string;
  start: string;
  finish: string;
  text: TextProps[];
}

export const achievementsData: AchievementsProps[] = [
  {
    korTitle: "홍익대학교 컴퓨터공학과 졸업전시회",
    engTitle: "Hongik University Computer Engineering Graduation Exhibition",
    info: "최우수상",
    start: "2022.11.24",
    finish: "2022.11.25",
    text: [
      {
        mainText: "졸업 전시회 공식 포스터",
        subText:
          "2022년 졸업 전시회는 코로나19로 인해 2년 만에 대면으로 열리게 되었다.",
      },
      {
        mainText: "카드바이저팀 부스",
        subText:
          "팀원들이 각자 노트북과 태블릿을 챙겨가지고 왔다. 모니터는 교수님께 부탁드려서 빌렸다.",
      },
      {
        mainText: "카드바이저팀 팜플렛",
        subText: "크기가 제한적이라 팜플렛을 만드는 게 너무 힘들었다.",
      },
      {
        mainText: "입구 앞에서 찍은 사진",
        subText: "투턱이 튼실해서 든든해 보인다.",
      },
      {
        mainText: "전시 부스에서 찍은 사진",
        subText: "이 양반은 왜 항상 포즈가 똑같은가?",
      },
      {
        mainText: "최우수상 수상",
        subText: "아침 9시부터 부스에서 앉아있어서 매우 피곤한 모습이다.",
      },
      {
        mainText: "자랑스러운 팀원들과 함께",
        subText: "성공적으로 프로젝트를 마칠 수 있어서, 너무 행복했다.",
      },
    ],
  },

  {
    korTitle: "마이 핀테크 서비스 해커톤",
    engTitle: "My Fintech Service Hackerton",
    info: "우수상(학생부)",
    start: "2022.06.24",
    finish: "2022.06.26",
    text: [
      {
        mainText: "진행 장소",
        subText: "무박 3일 동안 지낼 곳이다.",
      },
      {
        mainText: "대회 일정표",
        subText: "아침, 점심, 저녁, 야식까지 아주 알차게 잘 나온다!",
      },
      {
        mainText: "남은 시간",
        subText: "시간이 얼마 안 지났는데, 벌써 집에 가고 싶다.",
      },
      {
        mainText: "우수상 수상",
        subText: "전혀 기대 안 했는데, 상까지 받아버렸다...?",
      },
      {
        mainText: "상금 50만원",
        subText: "50만원 너무 달달하고.",
      },
    ],
  },

  {
    korTitle: "광주 FINA 세계수영선수권대회",
    engTitle: "Gwangju FINA World Championships",
    info: "통역 자원봉사",
    start: "2019.07.05",
    finish: "2019.07.28",
    text: [
      {
        mainText: "자원봉사자 출입증",
        subText: "슈퍼패스. 이것만 있으면 어디든 들어갈 수 있다.",
      },
      {
        mainText: "여수에서 한 컷",
        subText: "어쩌다 보니 여수로 유배(?) 당해버렸다.",
      },
      {
        mainText: "믹스트 존",
        subText: "가끔 선수들이 지나가는 것도 볼 수 있다.",
      },
      {
        mainText: "실내 수영장",
        subText: "선수들이 실제로 경기를 진행하는 곳이다.",
      },
      {
        mainText: "프레스룸",
        subText: "방송국과 언론사의 기자들이 모여있는 모습이다.",
      },
    ],
  },

  {
    korTitle: "홍익대학교 영자신문사",
    engTitle: "Hongik Tidings",
    info: "취재 기자",
    start: "2021.04.14",
    finish: "2023.02.22",
    text: [
      {
        mainText: "영자신문사 기자실",
        subText: "맨 뒤 오른쪽 군인 헤어(?)를 한 양반이 바로 나다.",
      },
      {
        mainText: "신입 기자 모집 포스터",
        subText: "여러분의 많은 관심과 지원 부탁드립니다.",
      },
      {
        mainText: "출간 되는 날",
        subText: "2명이서 저거 옮기느라 허리 나가는 줄.",
      },
      {
        mainText: "우편물",
        subText: "우리 학교의 영자신문은 다른 학교 언론사로도 배송된다.",
      },
      {
        mainText: "영자 신문 배포대",
        subText: "이쁘게 잘 정돈된 모습이다.",
      },
    ],
  },
];
