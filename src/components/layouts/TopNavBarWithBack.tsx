'use client';

import { ChevronLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface TopNavBarWithBackProps {
  title: string;
}

export default function TopNavBarWithBack({ title }: TopNavBarWithBackProps) {
  const router = useRouter();

  return (
    <header className="bg-background sticky top-0">
      <div className="border-b">
        <nav className="flex items-center gap-2 px-4 py-4">
          <button type="button" onClick={() => router.back()} aria-label="뒤로가기">
            <ChevronLeftIcon size={20} />
          </button>
          <h1 className="text-base font-medium">{title}</h1>
        </nav>
      </div>
    </header>
  );
}
