export type Option<T extends string> = {
  code: T;
  label: string;
};

// 문항 1
export type Frequency = 'NONE' | 'SOMETIMES' | 'WEEK_1_2' | 'WEEK_3_4' | 'DAILY';

export type Smoking = 'NON_SMOKER' | 'SMOKER';

export type Pet = 'NONE' | 'DOG' | 'CAT' | 'OTHER';

export type Job =
  | 'IT'
  | 'RESEARCH'
  | 'EDUCATION'
  | 'MEDICAL'
  | 'PUBLIC'
  | 'MILITARY'
  | 'SERVICE'
  | 'FOOD'
  | 'BUSINESS'
  | 'CONSTRUCTION'
  | 'PROFESSIONAL'
  | 'UNEMPLOYED'
  | 'ETC';

export type Religion = 'NONE' | 'PROTESTANT' | 'CATHOLIC' | 'BUDDHISM' | 'OTHER';

export type Politics = 'CONSERVATIVE' | 'MODERATE' | 'PROGRESSIVE' | 'NONE';

export const PETS: Option<Pet>[] = [
  { code: 'NONE', label: '없음' },
  { code: 'DOG', label: '강아지' },
  { code: 'CAT', label: '고양이' },
  { code: 'OTHER', label: '기타 동물' },
];

export const FREQUENCY_OPTIONS: Option<Frequency>[] = [
  { code: 'NONE', label: '전혀 안함' },
  { code: 'SOMETIMES', label: '가끔' },
  { code: 'WEEK_1_2', label: '주 1-2회' },
  { code: 'WEEK_3_4', label: '주 3-4회' },
  { code: 'DAILY', label: '거의 매일' },
];

export const EXERCISES = FREQUENCY_OPTIONS;
export const ALCOHOLS = FREQUENCY_OPTIONS;

export const SMOKING: Option<Smoking>[] = [
  { code: 'NON_SMOKER', label: '비흡연자' },
  { code: 'SMOKER', label: '흡연자' },
];

export const JOBS: Option<Job>[] = [
  { code: 'IT', label: 'IT / 개발' },
  { code: 'RESEARCH', label: '연구 · 기술' },
  { code: 'EDUCATION', label: '교육' },
  { code: 'MEDICAL', label: '의료' },
  { code: 'PUBLIC', label: '공공기관' },
  { code: 'MILITARY', label: '군인' },
  { code: 'SERVICE', label: '서비스업' },
  { code: 'FOOD', label: '요식업' },
  { code: 'BUSINESS', label: '자영업 · 사업' },
  { code: 'CONSTRUCTION', label: '건설 · 생산직' },
  { code: 'PROFESSIONAL', label: '전문직' },
  { code: 'UNEMPLOYED', label: '무직 · 휴직' },
  { code: 'ETC', label: '기타' },
];

export const RELIGIONS: Option<Religion>[] = [
  { code: 'NONE', label: '무교' },
  { code: 'PROTESTANT', label: '개신교' },
  { code: 'CATHOLIC', label: '천주교' },
  { code: 'BUDDHISM', label: '불교' },
  { code: 'OTHER', label: '기타 종교' },
];

export const POLITICS: Option<Politics>[] = [
  { code: 'CONSERVATIVE', label: '보수적인 편' },
  { code: 'MODERATE', label: '중도' },
  { code: 'PROGRESSIVE', label: '진보적인 편' },
  { code: 'NONE', label: '관심 없음' },
];

// 문항 2
export type LifeRhythm = 'MORNING' | 'NIGHT' | 'FLEXIBLE';

export type MealPreference = 'HOME' | 'DELIVERY' | 'OUT';

export type SpendingStyle = 'SAVING' | 'PLANNED' | 'SPENDING';

export type TravelStyle = 'REST' | 'SIGHTSEEING' | 'DOMESTIC' | 'OVERSEAS' | 'NONE';

export type LivingType = 'ALONE' | 'WITH_CHILD' | 'WITH_PARENTS';

export type FamilyDistance = 'FREQUENT' | 'HOLIDAY' | 'MINIMAL';

export const LIFE_RHYTHMS: Option<LifeRhythm>[] = [
  { code: 'MORNING', label: '아침형' },
  { code: 'NIGHT', label: '저녁형' },
  { code: 'FLEXIBLE', label: '유동적' },
];

export const MEAL_PREFERENCES: Option<MealPreference>[] = [
  { code: 'HOME', label: '집밥' },
  { code: 'DELIVERY', label: '배달' },
  { code: 'OUT', label: '외식' },
];

export const SPENDING_STYLES: Option<SpendingStyle>[] = [
  { code: 'SAVING', label: '저축형' },
  { code: 'PLANNED', label: '계획형' },
  { code: 'SPENDING', label: '소비형' },
];

export const TRAVEL_STYLES: Option<TravelStyle>[] = [
  { code: 'REST', label: '휴양' },
  { code: 'SIGHTSEEING', label: '관광' },
  { code: 'DOMESTIC', label: '국내' },
  { code: 'OVERSEAS', label: '해외' },
  { code: 'NONE', label: '비선호' },
];

export const LIVING_TYPES: Option<LivingType>[] = [
  { code: 'ALONE', label: '혼자 생활' },
  { code: 'WITH_CHILD', label: '자녀와 동거' },
  { code: 'WITH_PARENTS', label: '부모님과 동거' },
];

export const FAMILY_DISTANCES: Option<FamilyDistance>[] = [
  { code: 'FREQUENT', label: '자주 만남' },
  { code: 'HOLIDAY', label: '명절 위주' },
  { code: 'MINIMAL', label: '최소한의 만남' },
];

// 문항 3
export type ConversationStyle = 'HONEST' | 'CONSIDERATE' | 'CHEERFUL';

export type ConflictResolution = 'IMMEDIATE' | 'DELAYED' | 'AVOIDANT';

export type ContactFrequencyPreference = 'FREQUENT' | 'AS_NEEDED' | 'MINIMAL';

export type AffectionExpression = 'VERBAL' | 'ACTION' | 'LOW_EXPRESSION';

export type RelationshipIndependence = 'TOGETHER' | 'INDEPENDENT';

export const CONVERSATION_STYLES: Option<ConversationStyle>[] = [
  { code: 'HONEST', label: '솔직한' },
  { code: 'CONSIDERATE', label: '배려하는' },
  { code: 'CHEERFUL', label: '쾌활한' },
];

export const CONFLICT_RESOLUTIONS: Option<ConflictResolution>[] = [
  { code: 'IMMEDIATE', label: '즉시 해결' },
  { code: 'DELAYED', label: '시간 둔 후 해결' },
  { code: 'AVOIDANT', label: '피하는 편' },
];

export const CONTACT_FREQUENCY_PREFERENCES: Option<ContactFrequencyPreference>[] = [
  { code: 'FREQUENT', label: '자주 연락' },
  { code: 'AS_NEEDED', label: '필요할 때 연락' },
  { code: 'MINIMAL', label: '최소한의 연락' },
];

export const AFFECTION_EXPRESSIONS: Option<AffectionExpression>[] = [
  { code: 'VERBAL', label: '말로 표현' },
  { code: 'ACTION', label: '행동으로 표현' },
  { code: 'LOW_EXPRESSION', label: '적은 표현' },
];

export const RELATIONSHIP_INDEPENDENCE: Option<RelationshipIndependence>[] = [
  { code: 'TOGETHER', label: '함께하는 시간 중시' },
  { code: 'INDEPENDENT', label: '개인 시간 중시' },
];

// 문항 4
export type SportHobby =
  | 'RUNNING'
  | 'WALKING'
  | 'HIKING'
  | 'SOCCER'
  | 'LIGHT_EXERCISE'
  | 'GYM'
  | 'YOGA_STRETCHING'
  | 'SWIMMING'
  | 'CYCLING'
  | 'GOLF'
  | 'FISHING';

export type CultureHobby =
  | 'MOVIE'
  | 'DRAMA'
  | 'THEATER'
  | 'MUSICAL'
  | 'EXHIBITION'
  | 'PERFORMANCE'
  | 'READING'
  | 'NEWS_READING'
  | 'NEWS_WATCHING';

export type MusicTaste =
  | 'BALLAD'
  | 'KPOP'
  | 'TROT'
  | 'MUSIC_7080'
  | 'MUSIC_90'
  | 'FOLK'
  | 'CLASSICAL'
  | 'NEW_AGE'
  | 'POP'
  | 'OST';

export type DailyHobby = 'CAFE' | 'RESTAURANT' | 'COOKING' | 'GARDENING' | 'PHOTOGRAPHY' | 'SOCIALIZING';

export type TravelHobby = 'DOMESTIC_TRAVEL' | 'OVERSEAS_TRAVEL' | 'DAY_TRIP' | 'HOT_SPRING' | 'FOOD_TRAVEL';

export type HobbyCode = SportHobby | CultureHobby | MusicTaste | DailyHobby | TravelHobby;

export const SPORTS: Option<SportHobby>[] = [
  { code: 'WALKING', label: '걷기 / 산책' },
  { code: 'RUNNING', label: '달리기' },
  { code: 'HIKING', label: '등산' },
  { code: 'SOCCER', label: '축구' },
  { code: 'LIGHT_EXERCISE', label: '가벼운 운동' },
  { code: 'GYM', label: '헬스' },
  { code: 'YOGA_STRETCHING', label: '요가 / 스트레칭' },
  { code: 'SWIMMING', label: '수영' },
  { code: 'CYCLING', label: '자전거' },
  { code: 'GOLF', label: '골프' },
  { code: 'FISHING', label: '낚시' },
];

export const CULTURES: Option<CultureHobby>[] = [
  { code: 'MOVIE', label: '영화 보기' },
  { code: 'DRAMA', label: '드라마 시청' },
  { code: 'THEATER', label: '연극' },
  { code: 'MUSICAL', label: '뮤지컬' },
  { code: 'EXHIBITION', label: '전시 / 미술관' },
  { code: 'PERFORMANCE', label: '공연 관람' },
  { code: 'READING', label: '독서' },
  { code: 'NEWS_READING', label: '신문 / 시사 읽기' },
  { code: 'NEWS_WATCHING', label: '뉴스 보기' },
];

export const MUSIC_TASTES: Option<MusicTaste>[] = [
  { code: 'BALLAD', label: '발라드' },
  { code: 'KPOP', label: 'KPOP' },
  { code: 'TROT', label: '트로트' },
  { code: 'MUSIC_7080', label: '7080년대 음악' },
  { code: 'MUSIC_90', label: '90년대 음악' },
  { code: 'FOLK', label: '포크 / 통기타' },
  { code: 'CLASSICAL', label: '클래식' },
  { code: 'NEW_AGE', label: '뉴에이지' },
  { code: 'POP', label: '팝송' },
  { code: 'OST', label: 'OST' },
];

export const DAILY_HOBBIES: Option<DailyHobby>[] = [
  { code: 'CAFE', label: '카페 가기' },
  { code: 'RESTAURANT', label: '맛집 탐방' },
  { code: 'COOKING', label: '요리' },
  { code: 'GARDENING', label: '조경' },
  { code: 'PHOTOGRAPHY', label: '사진 찍기' },
  { code: 'SOCIALIZING', label: '모임·친목' },
];

export const TRAVEL_HOBBIES: Option<TravelHobby>[] = [
  { code: 'DOMESTIC_TRAVEL', label: '국내 여행' },
  { code: 'OVERSEAS_TRAVEL', label: '해외 여행' },
  { code: 'DAY_TRIP', label: '당일치기 나들이' },
  { code: 'HOT_SPRING', label: '온천 / 휴양' },
  { code: 'FOOD_TRAVEL', label: '맛집 여행' },
];
