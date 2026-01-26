'use client';

import { ChevronLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

import useInView from '@/hooks/useInView';
import { cn } from '@/libs/utils';
import { useHeaderTitle } from '@/providers/headerTitleProvider';

export default function TopNavBarWithBack() {
  const router = useRouter();
  const title = useHeaderTitle();
  const { isInView } = useInView({
    initialInView: true,
    rootId: 'scroll-container',
    targetId: 'scroll-sentinel',
  });

  return (
    <header className={cn('bg-background sticky top-0 z-1', !isInView ? 'border-b' : '')}>
      <nav className="flex items-center gap-2 px-4 py-4">
        <button type="button" onClick={() => router.back()} aria-label="뒤로가기">
          <ChevronLeftIcon size={20} />
        </button>
        <h1 className="text-base font-medium">{title}</h1>
      </nav>
    </header>
  );
}
