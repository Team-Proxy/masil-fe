'use client';

import { useEffect } from 'react';

import { cn } from '@/lib/utils';

interface KeyboardAwareButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function KeyboardAwareButton({ children, className }: KeyboardAwareButtonProps) {
  useEffect(() => {
    const viewport = window.visualViewport;
    if (!viewport) return;

    const resizeHandler = () => {
      const offset = window.innerHeight - viewport.height;
      // viewport.height === innerHeight 일 때는 키보드가 닫힌 상태로 간주 or 음수면 주소창 변화로 간주
      // 키보드가 열리면 innerHeight > viewport.height -> offset > 0
      // 가려진 높이 계산
      document.documentElement.style.setProperty('--keyboard-offset', offset > 0 ? `${offset}px` : '0px');
    };

    resizeHandler();
    viewport.addEventListener('resize', resizeHandler);

    return () => {
      viewport.removeEventListener('resize', resizeHandler);
      document.documentElement.style.removeProperty('--keyboard-offset');
    };
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0',
        'mx-auto w-full max-w-105 p-4',
        'pb-[calc(env(safe-area-inset-bottom)+16px)]',
        className,
      )}
      style={{ transform: `translateY(calc(-1 * var(--keyboard-offset)))` }}
    >
      {/* 
        Y축은 아래로 갈 수록 '+', 위로 갈수록 '-'이기 때문에
        키보드 높이만큼 음수 이동시켜서 버튼이 가려지지 않도록 함
      */}
      {children}
    </div>
  );
}
