'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { TABS } from '@/constants/tabs';
import getJosa from '@/libs/getJosa';
import { cn } from '@/libs/utils';

export default function BottomNavBar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  return (
    <nav className="bg-background mx-auto w-full max-w-105 p-4" aria-label="앱 하단 네비게이션">
      <ul className="flex justify-around text-[10px]">
        {TABS.map((tab) => (
          <li key={tab.name}>
            <Link
              href={tab.href}
              aria-label={`${tab.name}${getJosa(tab.name, '으로/로')} 이동`}
              className={cn('flex flex-col items-center gap-1', isActive(tab.href) ? 'text-black' : 'text-gray-400')}
            >
              <tab.icon size={tab.size} />
              {tab.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
