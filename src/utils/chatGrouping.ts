import { ChatMessage } from '@/mocks/chatMessages';

import { getMinuteKey } from './chatTime';

export function isSameGroup(a: ChatMessage, b: ChatMessage) {
  if (!a || !b) return false;
  return a.senderId === b.senderId && getMinuteKey(a.date) === getMinuteKey(b.date);
}

/**
 * 규칙 완전 반영
 * 1. 그룹 시작 = tail
 * 2. 그룹 끝 = time
 * 3. 분 변경 시 자동 새 그룹
 */
export function getMessageFlags(messages: ChatMessage[], index: number) {
  const current = messages[index];
  const prev = messages[index - 1];
  const next = messages[index + 1];

  const sameAsPrev = isSameGroup(prev, current);
  const sameAsNext = isSameGroup(current, next);

  return {
    showTail: !sameAsPrev, // 그룹 시작
    showTime: !sameAsNext, // 그룹 끝
  };
}
