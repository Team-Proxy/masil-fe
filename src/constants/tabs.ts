import {
  EarthIcon,
  BowArrowIcon,
  HeartHandshakeIcon,
  MessageCircleIcon,
  UserRoundIcon,
  type LucideIcon,
} from 'lucide-react';

type Tab = {
  name: string;
  href: string;
  icon: LucideIcon;
  size: number;
};

export const TABS: Tab[] = [
  {
    name: '커뮤니티',
    href: '/communities',
    icon: EarthIcon,
    size: 20,
  },
  {
    name: '인연 찾기',
    href: '/matches',
    icon: BowArrowIcon,
    size: 20,
  },
  {
    name: '인연 현황',
    href: '/match-requests',
    icon: HeartHandshakeIcon,
    size: 20,
  },
  {
    name: '채팅',
    href: '/chats',
    icon: MessageCircleIcon,
    size: 20,
  },
  {
    name: '마이페이지',
    href: '/mypage',
    icon: UserRoundIcon,
    size: 20,
  },
];
