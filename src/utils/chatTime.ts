export function getMinuteKey(date: string) {
  // '2024-05-22 14:30:00' → '2024-05-22 14:30'
  return date.slice(0, 16);
}

export function formatChatTime(date: string): string {
  const [, time] = date.split(' ');
  const [hourStr, minute] = time.split(':');

  let hour = Number(hourStr);

  const period = hour >= 12 ? '오후' : '오전';

  if (hour === 0) hour = 12;
  else if (hour > 12) hour -= 12;

  return `${period} ${hour}:${minute}`;
}
