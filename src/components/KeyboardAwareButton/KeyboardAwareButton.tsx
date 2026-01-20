'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

interface KeyboardAwareButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function KeyboardAwareButton({ children, className }: KeyboardAwareButtonProps) {
  const [bottom, setBottom] = useState(0);

  useEffect(() => {
    // Visual Viewport API
    // 키보드가 열릴때, 주소창이 나타나거나 사라질때 height이 줄어듦
    const viewport = window.visualViewport;
    if (!viewport) return;

    const updatePosition = () => {
      /**
       * visualViewport.offsetTop:
       * - 스크롤 + 키보드로 인해 밀린 viewport의 top 위치
       *
       * window.innerHeight - (offsetTop + height):
       * - 실제로 가려진 하단 영역 (키보드 높이)
       */
      const keyboardHeight = window.innerHeight - (viewport.offsetTop + viewport.height);

      setBottom(keyboardHeight > 0 ? keyboardHeight : 0);
    };

    updatePosition();
    viewport.addEventListener('resize', updatePosition);
    viewport.addEventListener('scroll', updatePosition);

    return () => {
      viewport.removeEventListener('resize', updatePosition);
      viewport.removeEventListener('scroll', updatePosition);
    };
  }, []);

  return (
    <div
      className={cn(
        'bg-background fixed inset-x-0',
        'mx-auto w-full max-w-105 p-4',
        'pb-[calc(env(safe-area-inset-bottom)+16px)]',
        className,
      )}
      style={{
        bottom: `${bottom}px`,
      }}
    >
      {children}
    </div>
  );
}
