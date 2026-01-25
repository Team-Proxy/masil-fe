'use client';

import { BellIcon, SettingsIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = ['/communities', '/matches', '/match-requests', '/chats', '/mypage'];

export default function TopNavBarWithLogo() {
  const currentPath = usePathname();
  const isTopNavBarVisible = NAV_LINKS.includes(currentPath);

  if (!isTopNavBarVisible) return null;

  return (
    <header className="bg-background sticky top-0 z-1">
      <div className="border-b">
        <nav aria-label="앱 상단 네비게이션" className="flex items-center justify-between p-4">
          <div>
            <Link href="/matches" aria-label="홈으로 이동">
              마실 로고
            </Link>
          </div>
          <ul className="flex items-center gap-2">
            <li>
              <Link href="/notifications" aria-label="알림">
                <BellIcon size={20} />
              </Link>
            </li>
            <li>
              <Link href="/settings" aria-label="환경 설정">
                <SettingsIcon size={20} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
