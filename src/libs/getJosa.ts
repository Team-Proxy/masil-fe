type JosaType = '은/는' | '이/가' | '을/를' | '으로/로';

const JOSA_MAP = {
  '은/는': ['은', '는'],
  '이/가': ['이', '가'],
  '을/를': ['을', '를'],
  '으로/로': ['으로', '로'],
} as const;

const HANGUL_START = '가'.charCodeAt(0);
const HANGUL_END = '힣'.charCodeAt(0);
const JONGSUNG_COUNT = 28;
const JONG_RIEUL_INDEX = 8; // ㄹ 받침의 인덱스, 한글 종성은 'ㄹ'이 8번째

export default function getJosa(word: string, type: JosaType): string {
  const [withBatchim, withoutBatchim] = JOSA_MAP[type];

  if (!word) return withoutBatchim;

  const lastChar = word.charAt(word.length - 1); // 마지막 글자
  const code = lastChar.charCodeAt(0); // 마지막 글자의 유니코드 값

  // 한글 외(숫자, 영어 등)의 문자는 무조건 받침 없음 처리
  if (code < HANGUL_START || code > HANGUL_END) {
    return withoutBatchim;
  }

  const jongSungIndex = (code - HANGUL_START) % JONGSUNG_COUNT;

  // 받침 없음
  if (jongSungIndex === 0) return withoutBatchim;

  // ㄹ 예외 (으로/로만)
  if (withBatchim === '으로' && withoutBatchim === '로' && jongSungIndex === JONG_RIEUL_INDEX) {
    return withoutBatchim;
  }

  return withBatchim;
}
