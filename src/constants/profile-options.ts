export type Option<T extends string> = {
  code: T;
  label: string;
};

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
