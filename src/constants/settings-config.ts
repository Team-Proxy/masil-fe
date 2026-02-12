export const SETTINGS_CONFIG = [
  {
    id: 'notifications',
    title: '알림 설정',
    items: [
      { id: 'chat-alarm', label: '채팅 알림', href: null },
      { id: 'community-alarm', label: '커뮤니티 알림', href: null },
      { id: 'match-alarm', label: '매칭 알림', href: null },
    ],
  },
  {
    id: 'user-account',
    title: '계청 및 활동',
    items: [
      { id: 'video-auth', label: '화상 통화 인증', href: '/settings/account/video-auth' },
      { id: 'my-posts', label: '내가 작성한 글', href: '/settings/profile/posts' },
      { id: 'my-likes', label: '좋아요 누른 글', href: '/settings/profile/likes' },
      { id: 'password-reset', label: '비밀번호 재설정', href: '/settings/account/password' },
      { id: 'blocked-users', label: '차단한 사용자 관리', href: '/settings/account/blocked' },
      { id: 'reports', label: '신고 내역 확인', href: '/settings/account/reports' },
    ],
  },
  {
    id: 'etc',
    title: '기타',
    items: [
      { id: 'version', label: '현재 버전', href: null },
      { id: 'terms', label: '약관 정보', href: '/settings/info/terms' },
      { id: 'logout', label: '로그아웃', href: null },
      { id: 'withdraw', label: '탈퇴하기', href: '/settings/account/withdraw' },
    ],
  },
];
