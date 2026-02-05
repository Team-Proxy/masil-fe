export type ChatMessage = {
  id: number;
  senderId: number;
  senderName: string;
  message: string;
  date: string;
};

export const MOCK_MESSAGES: ChatMessage[] = [
  {
    id: 1,
    senderId: 2,
    senderName: '닉네임2',
    message: '안녕하세요! 반갑습니다. 😊',
    date: '2024-05-22 14:30:01',
  },
  {
    id: 2,
    senderId: 2,
    senderName: '닉네임2',
    message: '처음 뵙네요!',
    date: '2024-05-22 14:30:15',
  },
  {
    id: 3,
    senderId: 2,
    senderName: '닉네임2',
    message: '이렇게 인사드리게 돼서 반가워요.',
    date: '2024-05-22 14:30:40',
  },
  {
    id: 4,
    senderId: 1,
    senderName: '닉네임1',
    message: '네, 저도 반가워요!',
    date: '2024-05-22 14:31:02',
  },
  {
    id: 5,
    senderId: 1,
    senderName: '닉네임1',
    message: '프로필 보고 먼저 인사드렸어요.',
    date: '2024-05-22 14:31:25',
  },
  {
    id: 6,
    senderId: 2,
    senderName: '닉네임2',
    message: '오늘 날씨가 참 좋네요.',
    date: '2024-05-22 14:32:00',
  },
  {
    id: 7,
    senderId: 2,
    senderName: '닉네임2',
    message: '산책하기 딱 좋은 날씨예요.',
    date: '2024-05-22 14:32:20',
  },
  {
    id: 8,
    senderId: 1,
    senderName: '닉네임1',
    message: '맞아요 ㅎㅎ 저도 방금 밖에 나갔다 왔어요.',
    date: '2024-05-22 14:33:05',
  },
  {
    id: 9,
    senderId: 1,
    senderName: '닉네임1',
    message: '공기가 좋아서 기분이 좋더라고요.',
    date: '2024-05-22 14:33:45',
  },
  {
    id: 10,
    senderId: 2,
    senderName: '닉네임2',
    message: '오 좋네요 😊',
    date: '2024-05-22 14:34:10',
  },
  {
    id: 11,
    senderId: 2,
    senderName: '닉네임2',
    message: '테스트 1',
    date: '2024-05-22 14:34:10',
  },
  {
    id: 12,
    senderId: 2,
    senderName: '닉네임2',
    message: '테스트 2',
    date: '2024-05-22 14:35:10',
  },
  {
    id: 13,
    senderId: 2,
    senderName: '닉네임2',
    message: '테스트 3',
    date: '2024-05-22 14:35:20',
  },
];
