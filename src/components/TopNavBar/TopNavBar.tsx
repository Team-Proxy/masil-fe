import { BellIcon, SettingsIcon } from 'lucide-react';
import Link from 'next/link';

export default function TopNavBar() {
  return (
    <header>
      <nav aria-label="앱 상단 네비게이션" className="flex items-center justify-between p-4">
        <div>
          <Link href="/matches" aria-label="홈으로 이동" className="flex items-center gap-2">
            <span>마실 로고</span>
            <span>마실</span>
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
    </header>
  );
}
